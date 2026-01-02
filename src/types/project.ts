export interface ProjectFormData {
  description: string;
  style?: 'modern' | 'classic' | 'minimalist' | 'traditional';
  budget?: number;
  rooms?: number;
  surface?: number;
}

export interface Project {
  id: string;
  description: string;
  style?: string;
  budget?: number;
  rooms?: number;
  surface?: number;
  estimation?: {
    materials: string[];
    totalCost?: number;
    surface?: number;
    cost?: number;
    duration?: string;
  };
  plan2D?: string;
  created_at?: string;
}

