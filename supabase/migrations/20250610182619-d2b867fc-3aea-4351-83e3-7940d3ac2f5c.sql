
-- Remover tabelas complexas existentes e criar tabelas simples para tracking básico

-- Dropar tabelas existentes que são muito complexas
DROP TABLE IF EXISTS public.cta_clicks CASCADE;
DROP TABLE IF EXISTS public.page_views CASCADE;
DROP TABLE IF EXISTS public.user_sessions CASCADE;

-- Criar tabela simples para contabilizar visitas à página
CREATE TABLE public.page_visits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Criar tabela simples para contabilizar cliques em CTAs
CREATE TABLE public.simple_cta_clicks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  cta_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS mas permitir inserções públicas anônimas
ALTER TABLE public.page_visits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.simple_cta_clicks ENABLE ROW LEVEL SECURITY;

-- Políticas que permitem inserção pública (anônima) mas leitura apenas autenticada
CREATE POLICY "Allow public page visit creation" 
  ON public.page_visits 
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated page visit read" 
  ON public.page_visits 
  FOR SELECT 
  TO authenticated
  USING (true);

CREATE POLICY "Allow public cta click creation" 
  ON public.simple_cta_clicks 
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated cta click read" 
  ON public.simple_cta_clicks 
  FOR SELECT 
  TO authenticated
  USING (true);
