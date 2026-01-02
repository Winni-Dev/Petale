import React from 'react';
import { motion } from 'framer-motion';
import { 
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Save,
  Moon,
  Sun
} from 'lucide-react';
// no Layout wrapper component; use fragment wrapper
import { Button } from '../components/UI/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/UI/Card';
import { Input } from '../components/UI/Input';
import { useAuthStore } from '../store/authStore';

const Settings: React.FC = () => {
  const { user, logout } = useAuthStore();
  const [darkMode, setDarkMode] = React.useState(
    document.documentElement.classList.contains('dark')
  );

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Paramètres
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Gérez vos préférences et votre compte
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Profil */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                Profil
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                label="Nom complet"
                defaultValue={user?.name || ''}
                placeholder="Votre nom"
              />
              <Input
                label="Email"
                type="email"
                defaultValue={user?.email || ''}
                placeholder="votre@email.com"
              />
              <Button>
                <Save className="w-4 h-4 mr-2" />
                Enregistrer les modifications
              </Button>
            </CardContent>
          </Card>

          {/* Apparence */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="w-5 h-5 mr-2" />
                Apparence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    Mode sombre
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Activez le thème sombre pour une meilleure expérience
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={toggleDarkMode}
                  className="flex items-center space-x-2"
                >
                  {darkMode ? (
                    <>
                      <Moon className="w-4 h-4" />
                      <span>Sombre</span>
                    </>
                  ) : (
                    <>
                      <Sun className="w-4 h-4" />
                      <span>Clair</span>
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    Notifications par email
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Recevez des notifications par email
                  </div>
                </div>
                <input type="checkbox" className="toggle" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    Notifications de projet
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Alertes pour vos projets
                  </div>
                </div>
                <input type="checkbox" className="toggle" defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Sécurité */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Sécurité
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                label="Nouveau mot de passe"
                type="password"
                placeholder="••••••••"
              />
              <Input
                label="Confirmer le mot de passe"
                type="password"
                placeholder="••••••••"
              />
              <Button variant="outline">
                <Save className="w-4 h-4 mr-2" />
                Changer le mot de passe
              </Button>
            </CardContent>
          </Card>

          {/* Langue */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Langue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <select className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-800">
                <option value="fr">Français</option>
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </CardContent>
          </Card>

          {/* Déconnexion */}
          <Card>
            <CardContent className="pt-6">
              <Button
                variant="outline"
                className="w-full text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                onClick={logout}
              >
                Se déconnecter
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Settings;

