
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, MousePointer, Globe, TrendingUp } from 'lucide-react';

interface AnalyticsData {
  totalSessions: number;
  totalPageViews: number;
  totalCTAClicks: number;
  conversionRate: number;
  topCountries: Array<{ country: string; count: number }>;
  topCTAs: Array<{ cta_name: string; clicks: number; conversions: number; conversion_rate: number }>;
  dailyViews: Array<{ date: string; views: number }>;
}

const Analytics = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchAnalyticsData = async () => {
    try {
      // Total de sessões
      const { count: totalSessions } = await supabase
        .from('user_sessions')
        .select('*', { count: 'exact', head: true });

      // Total de page views
      const { count: totalPageViews } = await supabase
        .from('page_views')
        .select('*', { count: 'exact', head: true });

      // Total de cliques em CTA
      const { count: totalCTAClicks } = await supabase
        .from('cta_clicks')
        .select('*', { count: 'exact', head: true });

      // Conversões
      const { count: conversions } = await supabase
        .from('cta_clicks')
        .select('*', { count: 'exact', head: true })
        .eq('converted', true);

      const conversionRate = totalCTAClicks ? ((conversions || 0) / totalCTAClicks) * 100 : 0;

      // Top países
      const { data: countriesData } = await supabase
        .from('user_sessions')
        .select('country')
        .not('country', 'is', null);

      const countryCount = countriesData?.reduce((acc, session) => {
        const country = session.country || 'Unknown';
        acc[country] = (acc[country] || 0) + 1;
        return acc;
      }, {} as Record<string, number>) || {};

      const topCountries = Object.entries(countryCount)
        .map(([country, count]) => ({ country, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      // Top CTAs
      const { data: ctaData } = await supabase
        .from('cta_clicks')
        .select('cta_name, converted');

      const ctaStats = ctaData?.reduce((acc, click) => {
        const name = click.cta_name;
        if (!acc[name]) {
          acc[name] = { clicks: 0, conversions: 0 };
        }
        acc[name].clicks++;
        if (click.converted) {
          acc[name].conversions++;
        }
        return acc;
      }, {} as Record<string, { clicks: number; conversions: number }>) || {};

      const topCTAs = Object.entries(ctaStats)
        .map(([cta_name, stats]) => ({
          cta_name,
          clicks: stats.clicks,
          conversions: stats.conversions,
          conversion_rate: (stats.conversions / stats.clicks) * 100
        }))
        .sort((a, b) => b.clicks - a.clicks);

      // Views por dia (últimos 7 dias)
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      const { data: dailyViewsData } = await supabase
        .from('page_views')
        .select('created_at')
        .gte('created_at', sevenDaysAgo.toISOString());

      const dailyViewsCount = dailyViewsData?.reduce((acc, view) => {
        const date = new Date(view.created_at).toLocaleDateString();
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      }, {} as Record<string, number>) || {};

      const dailyViews = Object.entries(dailyViewsCount)
        .map(([date, views]) => ({ date, views }))
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

      setData({
        totalSessions: totalSessions || 0,
        totalPageViews: totalPageViews || 0,
        totalCTAClicks: totalCTAClicks || 0,
        conversionRate,
        topCountries,
        topCTAs,
        dailyViews
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Carregando analytics...</div>
      </div>
    );
  }

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Analytics Dashboard</h1>
        
        {/* Cards de métricas principais */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Sessões Totais</CardTitle>
              <Users className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{data?.totalSessions}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Page Views</CardTitle>
              <Globe className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{data?.totalPageViews}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Cliques em CTA</CardTitle>
              <MousePointer className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{data?.totalCTAClicks}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Taxa de Conversão</CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{data?.conversionRate.toFixed(1)}%</div>
            </CardContent>
          </Card>
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Views por dia */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Page Views (Últimos 7 dias)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data?.dailyViews}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="date" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151', 
                      borderRadius: '8px' 
                    }} 
                  />
                  <Bar dataKey="views" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Top países */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Visitantes por País</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={data?.topCountries}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ country, percent }) => `${country} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {data?.topCountries.map((entry, index) => (
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
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Performance dos CTAs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-white">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-2">CTA</th>
                    <th className="text-left py-2">Cliques</th>
                    <th className="text-left py-2">Conversões</th>
                    <th className="text-left py-2">Taxa de Conversão</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.topCTAs.map((cta, index) => (
                    <tr key={index} className="border-b border-white/10">
                      <td className="py-2">{cta.cta_name}</td>
                      <td className="py-2">{cta.clicks}</td>
                      <td className="py-2">{cta.conversions}</td>
                      <td className="py-2">{cta.conversion_rate.toFixed(1)}%</td>
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
