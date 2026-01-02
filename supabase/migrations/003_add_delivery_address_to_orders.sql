-- Migration: Add delivery_address column to orders table
-- Run this in Supabase SQL editor (SQL) to add delivery address support

ALTER TABLE public.orders
ADD COLUMN IF NOT EXISTS delivery_address TEXT;

