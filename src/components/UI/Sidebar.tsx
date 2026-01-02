import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  Wand2, 
  Eye, 
  LayoutDashboard,
  Info,
  Settings,
  Download,
  Save,
  Share2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Grid3X3,
  Ruler,
  Layers
} from 'lucide-react';
import { clsx } from 'clsx';
import { Button } from './Button';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const location = useLocation();

  const mainNavigation = [
    { name: 'Accueil', href: '/', icon: Home },
    { name: 'Générateur', href: '/generate', icon: Wand2 },
    { name: 'Visualiseur 3D', href: '/visualizer', icon: Eye },
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'À propos', href: '/about', icon: Info },
  ];

  const tools = [
    { name: 'Grille', icon: Grid3X3, action: () => console.log('Toggle grid') },
    { name: 'Mesurer', icon: Ruler, action: () => console.log('Measure tool') },
    { name: 'Calques', icon: Layers, action: () => console.log('Layers panel') },
  ];

  const viewControls = [
    { name: 'Zoom +', icon: ZoomIn, action: () => console.log('Zoom in') },
    { name: 'Zoom -', icon: ZoomOut, action: () => console.log('Zoom out') },
    { name: 'Rotation', icon: RotateCcw, action: () => console.log('Reset view') },
  ];

  const fileActions = [
    { name: 'Sauvegarder', icon: Save, action: () => console.log('Save project') },
    { name: 'Exporter', icon: Download, action: () => console.log('Export project') },
    { name: 'Partager', icon: Share2, action: () => console.log('Share project') },
  ];

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      className="fixed right-0 top-0 h-full w-80 bg-gray-900 border-l border-gray-700 z-50 flex flex-col"
    >
      {/* Header de la sidebar */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h2 className="text-lg font-semibold text-white">Outils</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="text-gray-400 hover:text-white"
        >
          ×
        </Button>
      </div>

      {/* Contenu scrollable */}
      <div className="flex-1 overflow-y-auto">
        {/* Navigation principale */}
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">
            Navigation
          </h3>
          <nav className="space-y-1">
            {mainNavigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={clsx(
                    'flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                    isActive
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  )}
                >
                  <Icon className="w-4 h-4 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Outils de dessin */}
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">
            Outils
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Button
                  key={tool.name}
                  variant="outline"
                  size="sm"
                  onClick={tool.action}
                  className="justify-start text-gray-300 border-gray-600 hover:bg-gray-800 hover:text-white"
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {tool.name}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Contrôles de vue */}
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">
            Vue
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {viewControls.map((control) => {
              const Icon = control.icon;
              return (
                <Button
                  key={control.name}
                  variant="outline"
                  size="sm"
                  onClick={control.action}
                  className="text-gray-300 border-gray-600 hover:bg-gray-800 hover:text-white"
                >
                  <Icon className="w-4 h-4" />
                </Button>
              );
            })}
          </div>
        </div>

        {/* Actions de fichier */}
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">
            Fichier
          </h3>
          <div className="space-y-2">
            {fileActions.map((action) => {
              const Icon = action.icon;
              return (
                <Button
                  key={action.name}
                  variant="outline"
                  size="sm"
                  onClick={action.action}
                  className="w-full justify-start text-gray-300 border-gray-600 hover:bg-gray-800 hover:text-white"
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {action.name}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Paramètres rapides */}
        <div className="p-4 border-t border-gray-700">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            <Settings className="w-4 h-4 mr-2" />
            Paramètres
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export { Sidebar };