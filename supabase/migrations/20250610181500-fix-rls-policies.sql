
-- Corrigir políticas RLS para permitir inserções públicas anônimas

-- Dropar políticas existentes
DROP POLICY IF EXISTS "Anyone can create sessions" ON public.user_sessions;
DROP POLICY IF EXISTS "Anyone can create page views" ON public.page_views;
DROP POLICY IF EXISTS "Anyone can create cta clicks" ON public.cta_clicks;

-- Criar novas políticas que funcionam com usuários anônimos
CREATE POLICY "Allow public session creation" 
  ON public.user_sessions 
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated session read" 
  ON public.user_sessions 
  FOR SELECT 
  TO authenticated
  USING (true);

CREATE POLICY "Allow public page view creation" 
  ON public.page_views 
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated page view read" 
  ON public.page_views 
  FOR SELECT 
  TO authenticated
  USING (true);

CREATE POLICY "Allow public cta click creation" 
  ON public.cta_clicks 
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated cta click read" 
  ON public.cta_clicks 
  FOR SELECT 
  TO authenticated
  USING (true);

-- Permitir atualizações em cta_clicks para marcar conversões
CREATE POLICY "Allow public cta click updates" 
  ON public.cta_clicks 
  FOR UPDATE 
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);
