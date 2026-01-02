-- Migration: Create orders table for WhatsApp orders
-- Run this in Supabase SQL editor (SQL) to create a simple orders table

-- Ensure extension for UUID generation exists
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create orders table
CREATE TABLE IF NOT EXISTS public.orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  items jsonb NOT NULL,
  total numeric(12,2),
  whatsapp_number text,
  customer_name text,
  created_at timestamptz DEFAULT now()
);

-- Example: insert a test order (uncomment to run)
-- INSERT INTO public.orders (items, total, whatsapp_number, customer_name)
-- VALUES (
--   '[{"productId":"prod1","name":"Crème hydratante","price":5000,"quantity":1}]'::jsonb,
--   5000,
--   '+2250701781701',
--   'Client Test'
-- );

-- Quick select to verify
-- SELECT * FROM public.orders ORDER BY created_at DESC;
