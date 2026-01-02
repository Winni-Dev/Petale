-- Ajouter la colonne 'images' à la table 'products'
-- Cette colonne stockera un tableau de URLs d'images (JSONB pour flexibilité)

-- Option 1: Utiliser JSONB (recommandé pour Supabase)
ALTER TABLE products 
ADD COLUMN IF NOT EXISTS images JSONB DEFAULT '[]'::jsonb;

-- Option 2: Si vous préférez un tableau de text (alternative)
-- ALTER TABLE products 
-- ADD COLUMN IF NOT EXISTS images TEXT[] DEFAULT ARRAY[]::TEXT[];

-- Mettre à jour les produits existants pour migrer image_url vers images
-- Si un produit a déjà une image_url, on la copie dans le tableau images
UPDATE products 
SET images = CASE 
  WHEN image_url IS NOT NULL AND image_url != '' THEN 
    jsonb_build_array(image_url)
  ELSE 
    '[]'::jsonb
END
WHERE images IS NULL OR images = '[]'::jsonb;

-- Créer un index pour améliorer les performances des requêtes sur images
CREATE INDEX IF NOT EXISTS idx_products_images ON products USING GIN (images);

-- Commentaire pour documenter la colonne
COMMENT ON COLUMN products.images IS 'Tableau JSON des URLs des images du produit. La première image est généralement l''image principale.';

