-- Policies for storage.objects to allow uploads to the 'products' bucket
-- Use the authenticated policy in production. The public policy is for local/dev testing only.

-- 1) Authenticated users only (recommended):
DROP POLICY IF EXISTS "Allow uploads for authenticated users to products" ON storage.objects;

CREATE POLICY "Allow uploads for authenticated users to products"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'products' AND auth.role() = 'authenticated');

-- 2) Public uploads (DEV ONLY) - uncomment to use:
-- DROP POLICY IF EXISTS "Allow public uploads to products" ON storage.objects;
--
-- CREATE POLICY "Allow public uploads to products"
--   ON storage.objects
--   FOR INSERT
--   WITH CHECK (bucket_id = 'products');

-- NOTE: After applying an appropriate policy, retry the upload from the front-end.
-- If you still get an RLS error, ensure the session is authenticated when using the authenticated policy.