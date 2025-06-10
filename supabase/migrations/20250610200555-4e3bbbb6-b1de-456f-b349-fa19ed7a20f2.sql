
-- Remover a constraint UNIQUE do email e permitir valores NULL
ALTER TABLE public.waitlist_leads 
ALTER COLUMN email DROP NOT NULL;

-- Remover o índice único do email
DROP INDEX IF EXISTS idx_waitlist_leads_email;

-- Criar um novo índice não-único para email (para performance em consultas futuras)
CREATE INDEX idx_waitlist_leads_email_nullable ON public.waitlist_leads(email) WHERE email IS NOT NULL;

-- Adicionar índice para phone para melhor performance
CREATE INDEX idx_waitlist_leads_phone ON public.waitlist_leads(phone) WHERE phone IS NOT NULL;
