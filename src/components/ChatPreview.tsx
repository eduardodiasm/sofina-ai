
import { MessageCircle, CheckCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const ChatPreview = () => {
  return (
    <Card className="max-w-md mx-auto border border-slate-200 bg-white">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="font-medium text-sm">Finwise</div>
            <div className="text-xs text-green-500">online</div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="bg-slate-100 rounded-lg p-3 text-sm">
            Oi! Eu sou a Finwise — seu copiloto financeiro imparcial. 
            Vamos montar seu plano em 3 minutos. Bora? 🚀
          </div>
          
          <div className="bg-blue-500 text-white rounded-lg p-3 text-sm ml-8">
            Vamos!
          </div>
          
          <div className="bg-slate-100 rounded-lg p-3 text-sm">
            Qual sua renda líquida mensal?
          </div>
          
          <div className="bg-blue-500 text-white rounded-lg p-3 text-sm ml-8">
            R$ 12.000
          </div>
          
          <div className="bg-slate-100 rounded-lg p-3 text-sm">
            ✅ Analisamos suas respostas!<br/>
            <strong>Seu plano:</strong> investir R$ 1.350/mês<br/>
            📊 40% Tesouro IPCA + 40% ETFs + 20% Fundo
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatPreview;
