
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Shield, DollarSign, Target } from 'lucide-react';

const PersonalizedPlanExample = () => {
  return (
    <Card className="border border-blue-200 bg-blue-50">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <h4 className="text-lg font-semibold text-slate-900 mb-2">
            Exemplo: João, 32 anos, Designer
          </h4>
          <p className="text-slate-600 text-sm">
            Renda: R$ 12k • Objetivo: Liberdade financeira • Perfil: Conservador
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-medium text-slate-900 mb-3">📊 Diagnóstico</h5>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Reserva ideal:</span>
                <span className="font-medium">R$ 72.000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Tem hoje:</span>
                <span className="font-medium">R$ 15.000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Gap:</span>
                <span className="font-medium text-orange-600">R$ 57.000</span>
              </div>
              <div className="flex justify-between pt-2 border-t">
                <span className="text-slate-600">Investir/mês:</span>
                <span className="font-bold text-blue-900">R$ 1.350</span>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="font-medium text-slate-900 mb-3">🎯 Alocação</h5>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-blue-600" />
                <div className="flex-1">
                  <div className="text-sm font-medium">40% Tesouro IPCA</div>
                  <div className="text-xs text-slate-600">R$ 540/mês</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <div className="flex-1">
                  <div className="text-sm font-medium">40% ETFs</div>
                  <div className="text-xs text-slate-600">R$ 540/mês</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <DollarSign className="w-4 h-4 text-purple-600" />
                <div className="flex-1">
                  <div className="text-sm font-medium">20% Fundo</div>
                  <div className="text-xs text-slate-600">R$ 270/mês</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-white rounded-lg border border-blue-200">
          <div className="flex items-center gap-2 mb-1">
            <Target className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-900">Meta em 15 anos:</span>
          </div>
          <p className="text-sm text-slate-600">
            Renda passiva de <strong>R$ 10.000/mês</strong> com patrimônio de ~R$ 500.000
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalizedPlanExample;
