
-- Remover todas as colunas desnecessárias da tabela waitlist_leads
-- Mantendo apenas: id, name, phone, created_at, updated_at

-- Primeiro, remover o constraint único existente se houver
ALTER TABLE public.waitlist_leads DROP CONSTRAINT IF EXISTS waitlist_leads_phone_key;

-- Remover colunas relacionadas a UTM tracking
ALTER TABLE public.waitlist_leads DROP COLUMN IF EXISTS utm_source;
ALTER TABLE public.waitlist_leads DROP COLUMN IF EXISTS utm_medium;
ALTER TABLE public.waitlist_leads DROP COLUMN IF EXISTS utm_campaign;
ALTER TABLE public.waitlist_leads DROP COLUMN IF EXISTS utm_term;
ALTER TABLE public.waitlist_leads DROP COLUMN IF EXISTS utm_content;

-- Remover colunas de dados que não coletamos mais
ALTER TABLE public.waitlist_leads DROP COLUMN IF EXISTS email;
ALTER TABLE public.waitlist_leads DROP COLUMN IF EXISTS income_range;
ALTER TABLE public.waitlist_leads DROP COLUMN IF EXISTS current_investments;
ALTER TABLE public.waitlist_leads DROP COLUMN IF EXISTS main_challenge;

-- Remover colunas técnicas desnecessárias
ALTER TABLE public.waitlist_leads DROP COLUMN IF EXISTS ip_address;
ALTER TABLE public.waitlist_leads DROP COLUMN IF EXISTS user_agent;

-- Recriar o constraint único no telefone
ALTER TABLE public.waitlist_leads ADD CONSTRAINT waitlist_leads_phone_key UNIQUE (phone);

-- Garantir que as colunas essenciais não sejam nulas
ALTER TABLE public.waitlist_leads ALTER COLUMN name SET NOT NULL;
ALTER TABLE public.waitlist_leads ALTER COLUMN phone SET NOT NULL;
