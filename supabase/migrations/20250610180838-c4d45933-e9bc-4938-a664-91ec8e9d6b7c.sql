
-- Criar tabela para sessões de usuário
CREATE TABLE public.user_sessions (
  session_id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address INET,
  country TEXT,
  city TEXT,
  region TEXT,
  user_agent TEXT,
  first_visit TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  last_activity TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Criar tabela para visualizações de página
CREATE TABLE public.page_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID REFERENCES public.user_sessions(session_id),
  page_path TEXT NOT NULL,
  referrer TEXT,
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Criar tabela para cliques em CTAs
CREATE TABLE public.cta_clicks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID REFERENCES public.user_sessions(session_id),
  cta_name TEXT NOT NULL,
  cta_location TEXT NOT NULL,
  page_path TEXT NOT NULL,
  converted BOOLEAN DEFAULT false,
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Adicionar índices para melhor performance
CREATE INDEX idx_user_sessions_ip ON public.user_sessions(ip_address);
CREATE INDEX idx_user_sessions_created ON public.user_sessions(created_at);
CREATE INDEX idx_page_views_session ON public.page_views(session_id);
CREATE INDEX idx_page_views_timestamp ON public.page_views(timestamp);
CREATE INDEX idx_cta_clicks_session ON public.cta_clicks(session_id);
CREATE INDEX idx_cta_clicks_cta_name ON public.cta_clicks(cta_name);
CREATE INDEX idx_cta_clicks_timestamp ON public.cta_clicks(timestamp);

-- Habilitar RLS para todas as tabelas
ALTER TABLE public.user_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cta_clicks ENABLE ROW LEVEL SECURITY;

-- Políticas RLS para permitir inserção pública e leitura apenas autenticada
CREATE POLICY "Anyone can create sessions" 
  ON public.user_sessions 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view sessions" 
  ON public.user_sessions 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Anyone can create page views" 
  ON public.page_views 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view page views" 
  ON public.page_views 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Anyone can create cta clicks" 
  ON public.cta_clicks 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view cta clicks" 
  ON public.cta_clicks 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Função para atualizar last_activity automaticamente
CREATE OR REPLACE FUNCTION update_last_activity()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE public.user_sessions 
    SET last_activity = now() 
    WHERE session_id = NEW.session_id;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers para atualizar last_activity
CREATE TRIGGER update_session_activity_on_page_view
  AFTER INSERT ON public.page_views 
  FOR EACH ROW 
  EXECUTE FUNCTION update_last_activity();

CREATE TRIGGER update_session_activity_on_cta_click
  AFTER INSERT ON public.cta_clicks 
  FOR EACH ROW 
  EXECUTE FUNCTION update_last_activity();
