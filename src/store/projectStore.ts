import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Project, ProjectFormData } from '../types/project';
import { projectService } from '../services/projectService';
import { toast } from 'sonner';

interface ProjectState {
  // State
  projects: Project[];
  currentProject: Project | null;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  generatePlan: (data: ProjectFormData) => Promise<void>;
  fetchProjects: () => Promise<void>;
  fetchProject: (id: string) => Promise<void>;
  updateProject: (id: string, data: Partial<Project>) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
  setCurrentProject: (project: Project | null) => void;
  clearError: () => void;
}

export const useProjectStore = create<ProjectState>()(
  devtools(
    (set: any, _get: any) => ({
      // Initial state
      projects: [],
      currentProject: null,
      isLoading: false,
      error: null,

      // Generate a new project
      generatePlan: async (data: ProjectFormData) => {
        set({ isLoading: true, error: null });
        
        try {
          const project = await projectService.generateProject(data);
          
          set((state: any) => ({
            currentProject: project,
            projects: [project, ...state.projects],
            isLoading: false,
          }));

          toast.success('Projet généré avec succès !', {
            description: 'Votre plan architectural est prêt.',
          });
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Erreur lors de la génération';
          set({ error: errorMessage, isLoading: false });
          
          toast.error('Erreur de génération', {
            description: errorMessage,
          });
        }
      },

      // Fetch all projects
      fetchProjects: async () => {
        set({ isLoading: true });
        
        try {
          const response = await projectService.getProjects();
          set({ projects: response, isLoading: false });
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Erreur lors du chargement';
          set({ error: errorMessage, isLoading: false });
        }
      },

      // Fetch single project
      fetchProject: async (id: string) => {
        set({ isLoading: true });
        
        try {
          const project = await projectService.getProject(id);
          set({ currentProject: project, isLoading: false });
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Erreur lors du chargement';
          set({ error: errorMessage, isLoading: false });
        }
      },

      // Update project
      updateProject: async (id: string, data: Partial<Project>) => {
        try {
          const updatedProject = await projectService.updateProject(id, data);
          
          set((state: any) => ({
            currentProject: state.currentProject?.id === id ? updatedProject : state.currentProject,
            projects: state.projects.map((p: any) => 
              p.id === id ? updatedProject : p
            ),
          }));

          toast.success('Projet mis à jour');
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Erreur lors de la mise à jour';
          set({ error: errorMessage });
        }
      },

      // Delete project
      deleteProject: async (id: string) => {
        try {
          await projectService.deleteProject(id);
          
          set((state: any) => ({
            projects: state.projects.filter((p: any) => p.id !== id),
            currentProject: state.currentProject?.id === id ? null : state.currentProject,
          }));

          toast.success('Projet supprimé');
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Erreur lors de la suppression';
          set({ error: errorMessage });
        }
      },

      // Set current project
      setCurrentProject: (project: Project | null) => {
        set({ currentProject: project });
      },

      // Clear error
      clearError: () => {
        set({ error: null });
      },
    }),
    {
      name: 'project-store',
    }
  )
);