
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Loader2, User } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const HeroForm = () => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phone) {
      toast({
        title: "WhatsApp obrigatório",
        description: "Por favor, insira seu número de WhatsApp para continuar.",
        variant: "destructive",
      });
      return;
    }

    setIsDialogOpen(true);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name) {
      toast({
        title: "Nome obrigatório",
        description: "Por favor, insira seu nome para finalizar o cadastro.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('waitlist_leads')
        .insert({
          name: name,
          phone: phone
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

      // Reset form and close dialog
      setPhone('');
      setName('');
      setIsDialogOpen(false);

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

  const handleBackToPhone = () => {
    setIsDialogOpen(false);
    setName('');
  };

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm max-w-md mx-auto">
        <form onSubmit={handlePhoneSubmit} className="space-y-4" aria-label="Cadastro Sofina - Etapa 1">
          <div className="space-y-2">
            <Label htmlFor="hero-phone" className="text-gray-700">Seu WhatsApp</Label>
            <Input
              id="hero-phone"
              type="tel"
              placeholder="(11) 91234-5678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border-gray-300"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            size="lg" 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 text-base"
          >
            <Phone className="w-5 h-5 mr-2" />
            Quero meu Copiloto Financeiro
          </Button>
        </form>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Quase lá! 🎉</DialogTitle>
            <DialogDescription>
              Qual é o seu nome para finalizarmos seu cadastro?
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleFinalSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="dialog-name" className="text-gray-700">Seu nome</Label>
              <Input
                id="dialog-name"
                type="text"
                placeholder="Maria Silva"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-gray-300"
                required
                autoFocus
              />
            </div>
            
            <div className="flex gap-3">
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleBackToPhone}
                className="flex-1"
                disabled={isSubmitting}
              >
                Voltar
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="flex-1 bg-green-600 hover:bg-green-700"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <User className="w-4 h-4 mr-2" />
                    Finalizar
                  </>
                )}
              </Button>
            </div>
          </form>

          <div className="text-xs text-gray-500 text-center mt-4">
            WhatsApp: {phone}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HeroForm;
