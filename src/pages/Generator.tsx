import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { 
  Wand2, 
  Download,
  Settings,
  Grid3X3,
  Ruler
} from 'lucide-react';
// no Layout wrapper component; use fragment wrapper
import { Button } from '../components/UI/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/UI/Card';
import { Textarea } from '../components/UI/Textarea';
import { Input } from '../components/UI/Input';
import { LoadingSpinner } from '../components/UI/LoadingSpinner';
import { useProjectStore } from '../store/projectStore';
import { ProjectFormData } from '../types/project';
import { toast } from 'sonner';

const projectSchema = z.object({
  description: z.string().min(10, 'La description doit contenir au moins 10 caractères'),
  style: z.enum(['modern', 'classic', 'minimalist', 'traditional']).optional(),
  budget: z.number().min(0).optional(),
  rooms: z.number().min(1).max(20).optional(),
  surface: z.number().min(10).max(1000).optional(),
});

const Generator: React.FC = () => {
  const { generatePlan, currentProject, isLoading } = useProjectStore();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      style: 'modern',
    },
  });

  const onSubmit = async (data: ProjectFormData) => {
    try {
      await generatePlan(data);
      toast.success('Plan généré avec succès !');
    } catch (error) {
      // Error handling is done in the store
    }
  };

  return (
    <>
      <div className="h-screen flex flex-col">
        {/* Barre d'outils supérieure */}
        <div className="flex items-center justify-between px-6 py-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              Générateur de Plans
            </h1>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Grid3X3 className="w-4 h-4 mr-2" />
                Grille
              </Button>
              <Button variant="outline" size="sm">
                <Ruler className="w-4 h-4 mr-2" />
                Mesurer
              </Button>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Paramètres
            </Button>
            {currentProject && (
              <Button size="sm">
                <Download className="w-4 h-4 mr-2" />
                Exporter
              </Button>
            )}
          </div>
        </div>

        {/* Contenu principal */}
        <div className="flex-1 flex overflow-hidden">
          {/* Panneau de contrôle gauche */}
          <div className="w-96 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
            <div className="p-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wand2 className="w-5 h-5 mr-2 text-purple-600" />
                    Description du Projet
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <Textarea
                      label="Description détaillée"
                      placeholder="Ex: Je veux une maison moderne de 120m² avec 3 chambres, un salon ouvert, une cuisine américaine et un grand jardin..."
                      rows={4}
                      error={errors.description?.message}
                      {...register('description')}
                    />

                    <div className="grid grid-cols-2 gap-3">
                      <Input
                        label="Surface (m²)"
                        type="number"
                        error={errors.surface?.message}
                        {...register('surface', { valueAsNumber: true })}
                      />
                      
                      <Input
                        label="Pièces"
                        type="number"
                        error={errors.rooms?.message}
                        {...register('rooms', { valueAsNumber: true })}
                      />
                    </div>

                    <Input
                      label="Budget (€)"
                      type="number"
                      error={errors.budget?.message}
                      {...register('budget', { valueAsNumber: true })}
                    />

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Style architectural
                      </label>
                      <select
                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-800"
                        {...register('style')}
                      >
                        <option value="modern">Moderne</option>
                        <option value="classic">Classique</option>
                        <option value="minimalist">Minimaliste</option>
                        <option value="traditional">Traditionnel</option>
                      </select>
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full"
                    >
                      {isLoading ? (
                        <>
                          <LoadingSpinner className="mr-2" />
                          Génération en cours...
                        </>
                      ) : (
                        <>
                          <Wand2 className="w-4 h-4 mr-2" />
                          Générer le Plan
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Estimation */}
              {currentProject?.estimation && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Estimation</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Surface</span>
                        <span className="font-semibold">
                          {currentProject.estimation.surface} m²
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Coût estimé</span>
                        <span className="font-semibold">
                          {currentProject.estimation.cost?.toLocaleString() || '0'} €
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Durée</span>
                        <span className="font-semibold">{currentProject.estimation.duration}</span>
                      </div>
                      <div>
                        <span className="text-gray-600 dark:text-gray-300 block mb-2">Matériaux</span>
                        <div className="flex flex-wrap gap-1">
                          {currentProject.estimation.materials.map((material: any, index: number) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs"
                            >
                              {material}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>
          </div>

          {/* Zone de visualisation centrale */}
          <div className="flex-1 bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-8">
            {currentProject ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full h-full bg-white dark:bg-gray-900 rounded-xl shadow-lg flex items-center justify-center"
              >
                {currentProject.plan2D ? (
                  <img
                    src={currentProject.plan2D}
                    alt="Plan généré"
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div className="text-center text-gray-500">
                    <Wand2 className="w-16 h-16 mx-auto mb-4 text-purple-500" />
                    <p className="text-lg font-semibold">Plan Généré</p>
                    <p className="text-sm mt-2">Visualisation du plan architectural</p>
                  </div>
                )}
              </motion.div>
            ) : (
              <div className="text-center text-gray-500">
                <Wand2 className="w-24 h-24 mx-auto mb-6 text-gray-400" />
                <h3 className="text-xl font-semibold mb-2">Aucun plan généré</h3>
                <p className="max-w-md">
                  Remplissez le formulaire à gauche et cliquez sur "Générer le Plan" 
                  pour créer votre projet architectural.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Generator;