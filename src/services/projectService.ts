import { Project, ProjectFormData } from '../types/project';

export const projectService = {
  async generatePlan(data: ProjectFormData): Promise<Project> {
    // Simulation - à remplacer par un vrai service
    return {
      id: Date.now().toString(),
      ...data,
      estimation: {
        materials: ['Matériau 1', 'Matériau 2'],
        totalCost: data.budget || 0
      }
    };
  },

  async getAll(): Promise<Project[]> {
    return [];
  },

  async getById(_id: string): Promise<Project | null> {
    return null;
  },

  async update(id: string, data: Partial<Project>): Promise<Project> {
    return { id, ...data } as Project;
  },

  async delete(_id: string): Promise<void> {
    // Simulation
  },

  // Aliases pour compatibilité
  async generateProject(data: ProjectFormData): Promise<Project> {
    return this.generatePlan(data);
  },

  async getProjects(): Promise<Project[]> {
    return this.getAll();
  },

  async getProject(id: string): Promise<Project | null> {
    return this.getById(id);
  },

  async updateProject(id: string, data: Partial<Project>): Promise<Project> {
    return this.update(id, data);
  },

  async deleteProject(id: string): Promise<void> {
    return this.delete(id);
  }
};

