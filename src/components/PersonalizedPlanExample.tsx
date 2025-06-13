import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Target, DollarSign, PieChart, Brain, Calculator, BarChart3 } from 'lucide-react';

const PersonalizedPlanExample = () => {
  return (
    <div className="space-y-8">
      {/* Perfil do usuário */}
      <Card className="border-l-4 border-l-green-600 bg-gradient-to-r from-green-50 to-white">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-700 font-bold text-lg">L</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Lucas, 28 anos, Advogado</h3>
              <p className="text-slate-600">Renda líquida: R$ 21.000/mês • Perfil: Moderado-agressivo</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-slate-600">Patrimônio atual:</span>
              <div className="font-semibold text-slate-900">R$ 85.000</div>
            </div>
            <div>
              <span className="text-slate-600">Aporte possível:</span>
              <div className="font-semibold text-slate-900">R$ 3.500/mês</div>
            </div>
            <div>
              <span className="text-slate-600">Objetivo:</span>
              <div className="font-semibold text-slate-900">Independência aos 50</div>
            </div>
            <div>
              <span className="text-slate-600">Meta de renda:</span>
              <div className="font-semibold text-green-600">R$ 10.000/mês</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Diagnóstico */}
        <Card className="border border-slate-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Calculator className="w-6 h-6 text-green-600" />
              <h4 className="text-lg font-semibold text-slate-900">📊 Diagnóstico financeiro</h4>
            </div>
            
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-sm text-slate-600 mb-2">Meta de aposentadoria:</div>
                <div className="font-bold text-slate-900">R$ 120.000/ano de renda passiva</div>
                <div className="text-xs text-slate-500 mt-1">Aplicando regra dos 4%</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Patrimônio necessário:</span>
                  <span className="font-bold text-green-700">R$ 3 milhões</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Horizonte de tempo:</span>
                  <span className="font-semibold">22 anos</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Rentabilidade esperada:</span>
                  <span className="font-semibold">5,7% a.a. real</span>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-green-600" />
                  <span className="font-semibold text-green-800">Resultado projetado: R$ 3,05 milhões ✅</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alocação */}
        <Card className="border border-slate-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <PieChart className="w-6 h-6 text-green-600" />
              <h4 className="text-lg font-semibold text-slate-900">🧠 Alocação técnica</h4>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <div className="flex-1">
                    <div className="font-medium text-slate-900">35% ETFs BR + EUA</div>
                    <div className="text-xs text-slate-600">BOVA11 + IVVB11</div>
                  </div>
                  <div className="text-sm font-semibold text-green-700">R$ 1.225</div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <div className="flex-1">
                    <div className="font-medium text-slate-900">30% Tesouro IPCA+</div>
                    <div className="text-xs text-slate-600">2045 e 2055</div>
                  </div>
                  <div className="text-sm font-semibold text-green-700">R$ 1.050</div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  <div className="flex-1">
                    <div className="font-medium text-slate-900">20% Fundos multimercado</div>
                    <div className="text-xs text-slate-600">Volatilidade moderada</div>
                  </div>
                  <div className="text-sm font-semibold text-purple-700">R$ 700</div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  <div className="flex-1">
                    <div className="font-medium text-slate-900">10% Ações dividendos</div>
                    <div className="text-xs text-slate-600">ITSA4, TAEE11, BBAS3</div>
                  </div>
                  <div className="text-sm font-semibold text-orange-700">R$ 350</div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                  <div className="flex-1">
                    <div className="font-medium text-slate-900">5% Caixa estratégico</div>
                    <div className="text-xs text-slate-600">CDBs + liquidez</div>
                  </div>
                  <div className="text-sm font-semibold text-gray-700">R$ 175</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Timeline de evolução */}
      <Card className="border border-slate-200">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-6 h-6 text-green-600" />
            <h4 className="text-lg font-semibold text-slate-900">📊 Evolução patrimonial projetada</h4>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <div className="text-2xl font-bold text-slate-900">5 anos</div>
              <div className="text-sm text-slate-600 mt-1">R$ 300.000</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-700">10 anos</div>
              <div className="text-sm text-slate-600 mt-1">R$ 830.000</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-700">15 anos</div>
              <div className="text-sm text-slate-600 mt-1">R$ 1,55 milhão</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-700">20 anos</div>
              <div className="text-sm text-slate-600 mt-1">R$ 2,45 milhões</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-200">
              <div className="text-2xl font-bold text-green-700">22 anos ✅</div>
              <div className="text-sm text-green-700 font-medium mt-1">R$ 3,05 milhões</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Como a Sofina gera o plano */}
      <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-green-50">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="w-6 h-6 text-green-600" />
            <h4 className="text-lg font-semibold text-slate-900">🧩 Como a Sofina gera esse plano?</h4>
          </div>
          
          <p className="text-slate-700 leading-relaxed mb-4">
            A AI da Sofina usa <strong>dados de 40+ anos de mercado</strong>, simulações de Monte Carlo, 
            lógica de otimização de Sharpe Ratio e cenários macroeconômicos para construir o plano 
            mais eficiente dentro do seu perfil e dos seus objetivos.
          </p>
          
          <div className="bg-white rounded-lg p-4 border border-green-200">
            <p className="text-slate-800 font-medium">
              <span className="text-green-700">Não é uma recomendação genérica.</span> É uma engenharia financeira personalizada.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonalizedPlanExample;
