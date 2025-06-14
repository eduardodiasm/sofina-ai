
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Preencha os campos obrigatórios",
        description: "Nome e WhatsApp são obrigatórios para entrar na lista.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('waitlist_leads')
        .insert({
          name: formData.name,
          phone: formData.phone
        });

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "WhatsApp já cadastrado",
            description: "Este WhatsApp já está na nossa lista de espera!",
            variant: "destructive",
          });
        } else {
          throw error;
        }
        return;
      }

      toast({
        title: "Bem-vindo à Sofina! 🎉",
        description: "Você está na nossa waitlist. Em breve entraremos em contato via WhatsApp!",
      });

      // Reset form
      setFormData({
        name: '',
        phone: ''
      });

    } catch (error) {
      console.error('Erro ao salvar lead:', error);
      toast({
        title: "Erro ao processar cadastro",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm" id="waitlist-form">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700">Seu nome *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Como gostaria de ser chamado?"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="border-gray-300"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-700">Seu WhatsApp *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(11) 99999-9999"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className="border-gray-300"
              required
            />
          </div>
        </div>
        
        <Button 
          type="submit" 
          size="lg" 
          disabled={isSubmitting}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 text-lg disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Cadastrando...
            </>
          ) : (
            <>
              <Phone className="w-5 h-5 mr-2" />
              Quero meu plano no WhatsApp
            </>
          )}
        </Button>
        
        <p className="text-gray-500 text-sm text-center">
          * Ao se cadastrar, você concorda em receber comunicações da Sofina via WhatsApp. 
          Seus dados estão seguros e você pode cancelar a qualquer momento.
        </p>
      </form>
    </div>
  );
};

export default WaitlistForm;
