
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, MousePointer, TrendingUp } from 'lucide-react';

interface SimpleAnalyticsData {
  totalVisits: number;
  totalCTAClicks: number;
  conversionRate: number;
  ctaBreakdown: Array<{ cta_name: string; clicks: number }>;
  visitsToday: number;
  visitsThisWeek: number;
  visitsThisMonth: number;
}

const SimpleAnalytics = () => {
  const [data, setData] = useState<SimpleAnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchAnalyticsData = async () => {
    try {
      // Total de visitas
      const { count: totalVisits } = await supabase
        .from('page_visits')
        .select('*', { count: 'exact', head: true });

      // Total de cliques em CTA
      const { count: totalCTAClicks } = await supabase
        .from('simple_cta_clicks')
        .select('*', { count: 'exact', head: true });

      // Taxa de conversão
      const conversionRate = totalVisits && totalVisits > 0 
        ? ((totalCTAClicks || 0) / totalVisits) * 100 
        : 0;

      // Breakdown por CTA
      const { data: ctaData } = await supabase
        .from('simple_cta_clicks')
        .select('cta_name');

      const ctaBreakdown = ctaData?.reduce((acc, click) => {
        const existing = acc.find(item => item.cta_name === click.cta_name);
        if (existing) {
          existing.clicks++;
        } else {
          acc.push({ cta_name: click.cta_name, clicks: 1 });
        }
        return acc;
      }, [] as Array<{ cta_name: string; clicks: number }>) || [];

      // Visitas por período
      const today = new Date();
      const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      
      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - 7);
      
      const startOfMonth = new Date(today);
      startOfMonth.setDate(today.getDate() - 30);

      const { count: visitsToday } = await supabase
        .from('page_visits')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', startOfToday.toISOString());

      const { count: visitsThisWeek } = await supabase
        .from('page_visits')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', startOfWeek.toISOString());

      const { count: visitsThisMonth } = await supabase
        .from('page_visits')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', startOfMonth.toISOString());

      setData({
        totalVisits: totalVisits || 0,
        totalCTAClicks: totalCTAClicks || 0,
        conversionRate,
        ctaBreakdown,
        visitsToday: visitsToday || 0,
        visitsThisWeek: visitsThisWeek || 0,
        visitsThisMonth: visitsThisMonth || 0,
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Analytics Dashboard</h1>
        
        {/* Cards de métricas principais */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Total de Visitas</CardTitle>
              <Users className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{data?.totalVisits}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Cliques em CTA</CardTitle>
              <MousePointer className="h-4 w-4 text-green-400" />
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
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Visitas Hoje</CardTitle>
              <Users className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{data?.visitsToday}</div>
            </CardContent>
          </Card>
        </div>

        {/* Período de visitas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Últimos 7 dias</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{data?.visitsThisWeek}</div>
              <p className="text-slate-400">visitas</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Últimos 30 dias</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{data?.visitsThisMonth}</div>
              <p className="text-slate-400">visitas</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Total Geral</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{data?.totalVisits}</div>
              <p className="text-slate-400">visitas</p>
            </CardContent>
          </Card>
        </div>

        {/* Performance de CTAs */}
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-white">Cliques por CTA</CardTitle>
          </CardHeader>
          <CardContent>
            {data?.ctaBreakdown && data.ctaBreakdown.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data.ctaBreakdown}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="cta_name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151', 
                      borderRadius: '8px' 
                    }} 
                  />
                  <Bar dataKey="clicks" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="text-slate-400 text-center py-8">
                Nenhum clique registrado ainda
              </div>
            )}
          </CardContent>
        </Card>

        {/* Tabela de CTAs */}
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Detalhes dos CTAs</CardTitle>
          </CardHeader>
          <CardContent>
            {data?.ctaBreakdown && data.ctaBreakdown.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-white">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-2">CTA</th>
                      <th className="text-left py-2">Cliques</th>
                      <th className="text-left py-2">% do Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.ctaBreakdown.map((cta, index) => (
                      <tr key={index} className="border-b border-white/10">
                        <td className="py-2">{cta.cta_name}</td>
                        <td className="py-2">{cta.clicks}</td>
                        <td className="py-2">
                          {((cta.clicks / (data.totalCTAClicks || 1)) * 100).toFixed(1)}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-slate-400 text-center py-8">
                Nenhum dado de CTA disponível
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SimpleAnalytics;
