
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Bell, BookOpen, CheckCircle } from 'lucide-react';

const ThirtyDayFlow = () => {
  const flowSteps = [
    {
      day: "Dia 1-3",
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
      title: "Diagnóstico + Plano",
      description: "5 perguntas rápidas e seu plano personalizado pronto"
    },
    {
      day: "Dia 4",
      icon: <Bell className="w-5 h-5 text-green-600" />,
      title: "Lembrete de Aporte",
      description: "\"Hoje é dia 4! Hora de investir R$ 1.350 conforme seu plano\""
    },
    {
      day: "Dia 10",
      icon: <BookOpen className="w-5 h-5 text-purple-600" />,
      title: "Educação Financeira",
      description: "\"Você sabia? O ETF IVVB11 te dá acesso às 500 maiores empresas dos EUA\""
    },
    {
      day: "Dia 20",
      icon: <Calendar className="w-5 h-5 text-orange-600" />,
      title: "Acompanhamento",
      description: "Progresso da meta + ajustes se necessário"
    },
    {
      day: "Dia 30",
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
      title: "Fechamento",
      description: "Relatório do mês + opção de continuar com a Finwise"
    }
  ];

  return (
    <div className="space-y-4">
      {flowSteps.map((step, index) => (
        <Card key={index} className="border border-slate-200">
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 bg-slate-100 rounded-full flex-shrink-0">
                {step.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                    {step.day}
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    {step.title}
                  </span>
                </div>
                <p className="text-sm text-slate-600">
                  {step.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ThirtyDayFlow;
