
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, MousePointer, Globe, TrendingUp } from 'lucide-react';

interface AnalyticsData {
  totalPageVisits: number;
  totalCTAClicks: number;
  totalWaitlistLeads: number;
  topCTAs: Array<{ cta_name: string; clicks: number }>;
  dailyVisits: Array<{ date: string; visits: number }>;
  incomeDistribution: Array<{ range: string; count: number }>;
}

const Analytics = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchAnalyticsData = async () => {
    try {
      // Total de visitas à página
      const { count: totalPageVisits } = await supabase
        .from('page_visits')
        .select('*', { count: 'exact', head: true });

      // Total de cliques em CTA
      const { count: totalCTAClicks } = await supabase
        .from('simple_cta_clicks')
        .select('*', { count: 'exact', head: true });

      // Total de leads na waitlist
      const { count: totalWaitlistLeads } = await supabase
        .from('waitlist_leads')
        .select('*', { count: 'exact', head: true });

      // Top CTAs
      const { data: ctaData } = await supabase
        .from('simple_cta_clicks')
        .select('cta_name');

      const ctaStats = ctaData?.reduce((acc, click) => {
        const name = click.cta_name;
        acc[name] = (acc[name] || 0) + 1;
        return acc;
      }, {} as Record<string, number>) || {};

      const topCTAs = Object.entries(ctaStats)
        .map(([cta_name, clicks]) => ({ cta_name, clicks }))
        .sort((a, b) => b.clicks - a.clicks)
        .slice(0, 10);

      // Visitas por dia (últimos 7 dias)
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      const { data: dailyVisitsData } = await supabase
        .from('page_visits')
        .select('created_at')
        .gte('created_at', sevenDaysAgo.toISOString());

      const dailyVisitsCount = dailyVisitsData?.reduce((acc, visit) => {
        const date = new Date(visit.created_at).toLocaleDateString('pt-BR');
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      }, {} as Record<string, number>) || {};

      const dailyVisits = Object.entries(dailyVisitsCount)
        .map(([date, visits]) => ({ date, visits }))
        .sort((a, b) => new Date(a.date.split('/').reverse().join('-')).getTime() - new Date(b.date.split('/').reverse().join('-')).getTime());

      // Distribuição de renda dos leads
      const { data: leadsData } = await supabase
        .from('waitlist_leads')
        .select('income_range')
        .not('income_range', 'is', null);

      const incomeCount = leadsData?.reduce((acc, lead) => {
        const range = lead.income_range || 'Não informado';
        acc[range] = (acc[range] || 0) + 1;
        return acc;
      }, {} as Record<string, number>) || {};

      const incomeDistribution = Object.entries(incomeCount)
        .map(([range, count]) => ({ range, count }))
        .sort((a, b) => b.count - a.count);

      setData({
        totalPageVisits: totalPageVisits || 0,
        totalCTAClicks: totalCTAClicks || 0,
        totalWaitlistLeads: totalWaitlistLeads || 0,
        topCTAs,
        dailyVisits,
        incomeDistribution
      });
    } catch (error) {
      console.error('Error fetching analytics data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalyticsData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-900 text-xl">Carregando analytics...</div>
      </div>
    );
  }

  const COLORS = ['#1e40af', '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd'];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Analytics Dashboard</h1>
        
        {/* Cards de métricas principais */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-gray-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">Visitas à Página</CardTitle>
              <Globe className="h-4 w-4 text-blue-900" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{data?.totalPageVisits}</div>
            </CardContent>
          </Card>
          
          <Card className="border-gray-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">Cliques em CTAs</CardTitle>
              <MousePointer className="h-4 w-4 text-blue-900" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{data?.totalCTAClicks}</div>
            </CardContent>
          </Card>
          
          <Card className="border-gray-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">Leads na Waitlist</CardTitle>
              <Users className="h-4 w-4 text-blue-900" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{data?.totalWaitlistLeads}</div>
            </CardContent>
          </Card>
          
          <Card className="border-gray-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">Taxa de Conversão</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-900" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {data?.totalPageVisits ? ((data.totalWaitlistLeads / data.totalPageVisits) * 100).toFixed(1) : 0}%
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Visitas por dia */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-900">Visitas por Dia (Últimos 7 dias)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data?.dailyVisits}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="date" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb', 
                      borderRadius: '8px',
                      color: '#1f2937'
                    }} 
                  />
                  <Bar dataKey="visits" fill="#1e40af" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Distribuição de renda */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-900">Distribuição de Renda dos Leads</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={data?.incomeDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ range, percent }) => `${range} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {data?.incomeDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Performance de CTAs */}
        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle className="text-gray-900">CTAs Mais Clicados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-gray-900">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 text-gray-700">CTA</th>
                    <th className="text-left py-2 text-gray-700">Cliques</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.topCTAs.map((cta, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-2">{cta.cta_name}</td>
                      <td className="py-2">{cta.clicks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
