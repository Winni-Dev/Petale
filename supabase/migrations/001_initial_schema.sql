-- ============================================
-- MIGRATION COMPLÈTE POUR UN SEUL ADMINISTRATEUR
-- ============================================

-- 1. Supprimer les anciennes tables si elles existent
DROP TABLE IF EXISTS product_images CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS sub_categories CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS settings CASCADE;
DROP TABLE IF EXISTS admins CASCADE;
DROP FUNCTION IF EXISTS is_admin CASCADE;

-- 2. Créer les tables principales
CREATE TABLE categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TABLE sub_categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TABLE products (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    price INTEGER NOT NULL CHECK (price >= 0),
    image_url TEXT NOT NULL,
    category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    sub_category_id UUID NOT NULL REFERENCES sub_categories(id) ON DELETE CASCADE,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TABLE product_images (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TABLE settings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    shop_name TEXT DEFAULT 'Petal',
    whatsapp_number TEXT DEFAULT '+2250701781701',
    currency TEXT DEFAULT 'FCFA',
    admin_email TEXT DEFAULT 'admin@petal.com', -- Email unique de l'admin
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ============================================
-- CONFIGURATION DE L'ADMIN UNIQUE
-- ============================================

-- 3. Créer une table pour stocker le hash du mot de passe admin
CREATE TABLE admin_config (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    admin_email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL, -- Hash bcrypt du mot de passe
    is_active BOOLEAN DEFAULT true,
    last_login TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 4. Fonction pour vérifier si l'utilisateur est l'admin
CREATE OR REPLACE FUNCTION is_admin(email_to_check TEXT, password_to_check TEXT)
RETURNS BOOLEAN AS $$
DECLARE
    stored_hash TEXT;
    config_row admin_config%ROWTYPE;
BEGIN
    -- Vérifier si l'email existe dans la config admin
    SELECT * INTO config_row 
    FROM admin_config 
    WHERE admin_email = email_to_check 
    AND is_active = true;
    
    -- Si aucun admin trouvé
    IF config_row.id IS NULL THEN
        RETURN FALSE;
    END IF;
    
    -- Récupérer le hash stocké
    stored_hash := config_row.password_hash;
    
    -- Vérifier le mot de passe avec bcrypt
    -- Note: Pour bcrypt, vous aurez besoin de l'extension pgcrypto
    RETURN crypt(password_to_check, stored_hash) = stored_hash;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 5. Fonction simplifiée pour l'application
CREATE OR REPLACE FUNCTION verify_admin_credentials(email_to_check TEXT, password_to_check TEXT)
RETURNS TABLE(
    is_valid BOOLEAN,
    admin_email TEXT,
    shop_name TEXT,
    whatsapp_number TEXT
) AS $$
BEGIN
    -- Vérifier les identifiants
    IF NOT is_admin(email_to_check, password_to_check) THEN
        RETURN QUERY SELECT FALSE, NULL, NULL, NULL;
        RETURN;
    END IF;
    
    -- Si les identifiants sont valides, retourner les infos de la boutique
    RETURN QUERY
    SELECT 
        TRUE,
        s.admin_email,
        s.shop_name,
        s.whatsapp_number
    FROM settings s
    WHERE s.admin_email = email_to_check
    LIMIT 1;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- INSÉRER LES DONNÉES INITIALES
-- ============================================

-- Insérer les paramètres par défaut
INSERT INTO settings (shop_name, whatsapp_number, currency, admin_email) 
VALUES ('Petal', '+2250701781701', 'FCFA', 'admin@petal.com');

-- Insérer les catégories
INSERT INTO categories (name, slug) VALUES
('Visage', 'visage'),
('Corps', 'corps'),
('Soins ciblés', 'soins-cibles'),
('Rituels & Coffrets', 'coffrets');

-- Insérer les sous-catégories pour Visage
INSERT INTO sub_categories (category_id, name, slug) VALUES
((SELECT id FROM categories WHERE slug = 'visage'), 'Lotions', 'lotions'),
((SELECT id FROM categories WHERE slug = 'visage'), 'Masques', 'masques'),
((SELECT id FROM categories WHERE slug = 'visage'), 'Gommages', 'gommages'),
((SELECT id FROM categories WHERE slug = 'visage'), 'Sérums', 'serums');

-- Insérer les sous-catégories pour Corps
INSERT INTO sub_categories (category_id, name, slug) VALUES
((SELECT id FROM categories WHERE slug = 'corps'), 'Savons solides', 'savons-solides'),
((SELECT id FROM categories WHERE slug = 'corps'), 'Gel douche', 'gel-douche'),
((SELECT id FROM categories WHERE slug = 'corps'), 'Gommages corps', 'gommages-corps'),
((SELECT id FROM categories WHERE slug = 'corps'), 'Crèmes & beurres', 'cremes-beurres'),
((SELECT id FROM categories WHERE slug = 'corps'), 'Huiles corporelles', 'huiles-corporelles');

-- Insérer les sous-catégories pour Soins ciblés
INSERT INTO sub_categories (category_id, name, slug) VALUES
((SELECT id FROM categories WHERE slug = 'soins-cibles'), 'Soins anti-taches', 'anti-taches'),
((SELECT id FROM categories WHERE slug = 'soins-cibles'), 'Éclat / Illuminateur', 'eclat'),
((SELECT id FROM categories WHERE slug = 'soins-cibles'), 'Clarifiant', 'clarifiant'),
((SELECT id FROM categories WHERE slug = 'soins-cibles'), 'Hydratants', 'hydratants');

-- Insérer les sous-catégories pour Rituels & Coffrets
INSERT INTO sub_categories (category_id, name, slug) VALUES
((SELECT id FROM categories WHERE slug = 'coffrets'), 'Kits visage (taches, acné)', 'kits-visage'),
((SELECT id FROM categories WHERE slug = 'coffrets'), 'Gamme Premium', 'gamme-premium'),
((SELECT id FROM categories WHERE slug = 'coffrets'), 'Gamme Middle', 'gamme-middle'),
((SELECT id FROM categories WHERE slug = 'coffrets'), 'Mini Gammes', 'mini-gammes'),
((SELECT id FROM categories WHERE slug = 'coffrets'), 'Coffrets cadeaux', 'coffrets-cadeaux');

-- ============================================
-- SÉCURITÉ (RLS - Row Level Security)
-- ============================================

-- Activer RLS sur toutes les tables
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE sub_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_config ENABLE ROW LEVEL SECURITY;

-- ============================================
-- POLITIQUES DE SÉCURITÉ
-- ============================================

-- 1. POLITIQUES POUR LE PUBLIC (lecture seule)
CREATE POLICY "Public can view categories" ON categories
    FOR SELECT USING (true);

CREATE POLICY "Public can view sub_categories" ON sub_categories
    FOR SELECT USING (true);

CREATE POLICY "Public can view products" ON products
    FOR SELECT USING (is_active = true);

CREATE POLICY "Public can view product_images" ON product_images
    FOR SELECT USING (true);

CREATE POLICY "Public can view shop settings" ON settings
    FOR SELECT USING (true);

-- 2. POLITIQUES POUR L'ADMIN (lecture/écriture)
-- Admin peut tout faire sur les catégories
CREATE POLICY "Admin full access to categories" ON categories
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM admin_config 
            WHERE is_active = true
            AND admin_email = current_setting('request.jwt.claims', true)::json->>'email'
        )
    );

-- Admin peut tout faire sur les sous-catégories
CREATE POLICY "Admin full access to sub_categories" ON sub_categories
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM admin_config 
            WHERE is_active = true
            AND admin_email = current_setting('request.jwt.claims', true)::json->>'email'
        )
    );

-- Admin peut tout faire sur les produits
CREATE POLICY "Admin full access to products" ON products
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM admin_config 
            WHERE is_active = true
            AND admin_email = current_setting('request.jwt.claims', true)::json->>'email'
        )
    );

-- Admin peut tout faire sur les images
CREATE POLICY "Admin full access to product_images" ON product_images
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM admin_config 
            WHERE is_active = true
            AND admin_email = current_setting('request.jwt.claims', true)::json->>'email'
        )
    );

-- Admin peut tout faire sur les paramètres
CREATE POLICY "Admin full access to settings" ON settings
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM admin_config 
            WHERE is_active = true
            AND admin_email = current_setting('request.jwt.claims', true)::json->>'email'
        )
    );

-- 3. POLITIQUE POUR admin_config (très restrictive)
-- Personne ne peut voir la table admin_config directement
CREATE POLICY "No direct access to admin_config" ON admin_config
    FOR ALL USING (false);

-- ============================================
-- SCRIPT POUR CRÉER LE PREMIER ADMIN
-- ============================================

-- Fonction pour créer/mettre à jour l'admin
CREATE OR REPLACE FUNCTION setup_admin(
    p_email TEXT DEFAULT 'admin@petal.com',
    p_password TEXT DEFAULT 'AdminPetal123!' -- À CHANGER IMMÉDIATEMENT
)
RETURNS TEXT AS $$
DECLARE
    salt TEXT;
    hash TEXT;
BEGIN
    -- Vérifier si l'extension pgcrypto est disponible
    BEGIN
        -- Générer un salt et hash avec bcrypt
        salt := gen_salt('bf', 10); -- 10 rounds de bcrypt
        hash := crypt(p_password, salt);
    EXCEPTION WHEN OTHERS THEN
        -- Fallback simple (pour développement uniquement)
        -- EN PRODUCTION, UTILISEZ pgcrypto !
        hash := encode(digest(p_password, 'sha256'), 'hex');
    END;
    
    -- Insérer ou mettre à jour l'admin
    INSERT INTO admin_config (admin_email, password_hash, is_active)
    VALUES (p_email, hash, true)
    ON CONFLICT (admin_email) 
    DO UPDATE SET 
        password_hash = EXCLUDED.password_hash,
        updated_at = NOW();
    
    -- Mettre à jour l'email admin dans les settings
    UPDATE settings 
    SET admin_email = p_email 
    WHERE admin_email IS NULL OR admin_email != p_email;
    
    RETURN 'Admin créé/mis à jour avec succès. Email: ' || p_email;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- EXÉCUTER LE SCRIPT D'INITIALISATION
-- ============================================

-- IMPORTANT: Exécutez cette commande SEULEMENT une fois après avoir créé les tables
-- SELECT setup_admin('votre_email@exemple.com', 'VotreMotDePasseSuperSecurise123!');

-- Pour le développement, vous pouvez utiliser (CHANGEZ LE MOT DE PASSE !):
-- SELECT setup_admin('admin@petal.com', 'AdminPetal123!');

-- ============================================
-- FONCTIONS UTILES POUR LA GESTION
-- ============================================

-- Fonction pour changer le mot de passe admin
CREATE OR REPLACE FUNCTION change_admin_password(
    current_password TEXT,
    new_password TEXT
)
RETURNS TEXT AS $$
DECLARE
    admin_email TEXT;
    current_hash TEXT;
    new_hash TEXT;
BEGIN
    -- Récupérer l'email admin des settings
    SELECT admin_email INTO admin_email FROM settings LIMIT 1;
    
    IF admin_email IS NULL THEN
        RETURN 'Erreur: Aucun admin configuré';
    END IF;
    
    -- Vérifier le mot de passe actuel
    SELECT password_hash INTO current_hash 
    FROM admin_config 
    WHERE admin_email = change_admin_password.admin_email;
    
    IF NOT (crypt(current_password, current_hash) = current_hash) THEN
        RETURN 'Erreur: Mot de passe actuel incorrect';
    END IF;
    
    -- Générer le nouveau hash
    BEGIN
        new_hash := crypt(new_password, gen_salt('bf', 10));
    EXCEPTION WHEN OTHERS THEN
        new_hash := encode(digest(new_password, 'sha256'), 'hex');
    END;
    
    -- Mettre à jour le mot de passe
    UPDATE admin_config 
    SET password_hash = new_hash, updated_at = NOW()
    WHERE admin_email = change_admin_password.admin_email;
    
    RETURN 'Mot de passe changé avec succès';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Fonction pour vérifier la connexion admin
CREATE OR REPLACE FUNCTION admin_login(
    p_email TEXT,
    p_password TEXT
)
RETURNS TABLE(
    success BOOLEAN,
    message TEXT,
    shop_name TEXT,
    whatsapp_number TEXT
) AS $$
DECLARE
    config_row admin_config%ROWTYPE;
    settings_row settings%ROWTYPE;
BEGIN
    -- Vérifier l'email
    SELECT * INTO config_row 
    FROM admin_config 
    WHERE admin_email = p_email 
    AND is_active = true;
    
    IF config_row.id IS NULL THEN
        RETURN QUERY SELECT FALSE, 'Email incorrect', NULL, NULL;
        RETURN;
    END IF;
    
    -- Vérifier le mot de passe
    IF NOT (crypt(p_password, config_row.password_hash) = config_row.password_hash) THEN
        -- Mettre à jour la date de dernier échec
        UPDATE admin_config 
        SET updated_at = NOW() 
        WHERE id = config_row.id;
        
        RETURN QUERY SELECT FALSE, 'Mot de passe incorrect', NULL, NULL;
        RETURN;
    END IF;
    
    -- Récupérer les infos de la boutique
    SELECT * INTO settings_row FROM settings LIMIT 1;
    
    -- Mettre à jour la date de dernière connexion
    UPDATE admin_config 
    SET last_login = NOW(), updated_at = NOW()
    WHERE id = config_row.id;
    
    -- Succès
    RETURN QUERY 
    SELECT TRUE, 'Connexion réussie', 
           settings_row.shop_name, 
           settings_row.whatsapp_number;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- FIN DE LA MIGRATION
-- ============================================

-- Message final
DO $$
BEGIN
    RAISE NOTICE '======================================';
    RAISE NOTICE 'MIGRATION TERMINÉE AVEC SUCCÈS';
    RAISE NOTICE '======================================';
    RAISE NOTICE 'Étapes suivantes :';
    RAISE NOTICE '1. Exécutez: SELECT setup_admin(''votre_email'', ''votre_mdp'');';
    RAISE NOTICE '2. Changez le mot de passe immédiatement';
    RAISE NOTICE '3. Testez la connexion admin';
    RAISE NOTICE '======================================';
END $$;