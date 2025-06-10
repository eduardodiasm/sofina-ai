
-- Criar tabela para armazenar leads da waitlist
CREATE TABLE public.waitlist_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  income_range TEXT CHECK (income_range IN ('6k-10k', '10k-20k', '20k-30k', '30k+')),
  current_investments TEXT CHECK (current_investments IN ('0-10k', '10k-50k', '50k-100k', '100k-500k', '500k+')),
  main_challenge TEXT CHECK (main_challenge IN ('nao-sei-investir', 'falta-tempo', 'desconfianca-assessores', 'falta-constancia', 'outros')),
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_term TEXT,
  utm_content TEXT,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Adicionar índices para melhor performance
CREATE INDEX idx_waitlist_leads_email ON public.waitlist_leads(email);
CREATE INDEX idx_waitlist_leads_created_at ON public.waitlist_leads(created_at);
CREATE INDEX idx_waitlist_leads_income_range ON public.waitlist_leads(income_range);
CREATE INDEX idx_waitlist_leads_utm_source ON public.waitlist_leads(utm_source);

-- Habilitar RLS (Row Level Security)
ALTER TABLE public.waitlist_leads ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção de novos leads (público)
CREATE POLICY "Anyone can create waitlist leads" 
  ON public.waitlist_leads 
  FOR INSERT 
  WITH CHECK (true);

-- Política para leitura apenas por usuários autenticados (para dashboard futuro)
CREATE POLICY "Authenticated users can view waitlist leads" 
  ON public.waitlist_leads 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para atualizar updated_at
CREATE TRIGGER update_waitlist_leads_updated_at 
  BEFORE UPDATE ON public.waitlist_leads 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();
