
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Users, Calendar } from 'lucide-react';

interface AnalyticsData {
  totalWaitlistLeads: number;
  dailySignups: Array<{ date: string; signups: number }>;
  recentLeads: Array<{ name: string; phone: string; created_at: string }>;
}

const Analytics = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchAnalyticsData = async () => {
    try {
      // Total de leads na waitlist
      const { count: totalWaitlistLeads } = await supabase
        .from('waitlist_leads')
        .select('*', { count: 'exact', head: true });

      // Últimos 10 leads cadastrados
      const { data: recentLeadsData } = await supabase
        .from('waitlist_leads')
        .select('name, phone, created_at')
        .order('created_at', { ascending: false })
        .limit(10);

      // Cadastros por dia (últimos 7 dias)
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      const { data: dailySignupsData } = await supabase
        .from('waitlist_leads')
        .select('created_at')
        .gte('created_at', sevenDaysAgo.toISOString());

      const dailySignupsCount = dailySignupsData?.reduce((acc, lead) => {
        const date = new Date(lead.created_at).toLocaleDateString('pt-BR');
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      }, {} as Record<string, number>) || {};

      const dailySignups = Object.entries(dailySignupsCount)
        .map(([date, signups]) => ({ date, signups }))
        .sort((a, b) => new Date(a.date.split('/').reverse().join('-')).getTime() - new Date(b.date.split('/').reverse().join('-')).getTime());

      setData({
        totalWaitlistLeads: totalWaitlistLeads || 0,
        dailySignups,
        recentLeads: recentLeadsData || []
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

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Analytics Dashboard</h1>
        
        {/* Cards de métricas principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-gray-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">Total de Leads</CardTitle>
              <Users className="h-4 w-4 text-blue-900" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{data?.totalWaitlistLeads}</div>
            </CardContent>
          </Card>
          
          <Card className="border-gray-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">Cadastros Hoje</CardTitle>
              <Calendar className="h-4 w-4 text-blue-900" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {data?.dailySignups.find(day => day.date === new Date().toLocaleDateString('pt-BR'))?.signups || 0}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cadastros por dia */}
        <Card className="border-gray-200 mb-8">
          <CardHeader>
            <CardTitle className="text-gray-900">Cadastros por Dia (Últimos 7 dias)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {data?.dailySignups.map((day, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="text-gray-700">{day.date}</span>
                  <span className="font-semibold text-gray-900">{day.signups} cadastros</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Últimos leads */}
        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle className="text-gray-900">Últimos Cadastros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-gray-900">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 text-gray-700">Nome</th>
                    <th className="text-left py-2 text-gray-700">WhatsApp</th>
                    <th className="text-left py-2 text-gray-700">Data</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.recentLeads.map((lead, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-2">{lead.name}</td>
                      <td className="py-2">{lead.phone}</td>
                      <td className="py-2">{new Date(lead.created_at).toLocaleDateString('pt-BR')}</td>
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
