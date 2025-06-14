
-- Primeiro, vamos identificar e remover duplicatas mantendo apenas o registro mais recente
DELETE FROM public.waitlist_leads 
WHERE id NOT IN (
    SELECT DISTINCT ON (phone) id
    FROM public.waitlist_leads 
    WHERE phone IS NOT NULL
    ORDER BY phone, created_at DESC
);

-- Remove registros com phone NULL se existirem
DELETE FROM public.waitlist_leads WHERE phone IS NULL;

-- Agora podemos adicionar o constraint único
ALTER TABLE public.waitlist_leads 
ADD CONSTRAINT waitlist_leads_phone_key UNIQUE (phone);
