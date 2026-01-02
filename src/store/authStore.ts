import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { toast } from 'sonner';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, name: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email: string, password: string) => {
        set({ isLoading: true });
        
        // Simulation d'authentification (à remplacer par un vrai appel API)
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Pour la démo, accepte n'importe quel email/password
        if (email && password) {
          const user: User = {
            id: '1',
            email,
            name: email.split('@')[0],
          };
          
          set({ 
            user, 
            isAuthenticated: true, 
            isLoading: false 
          });
          
          toast.success('Connexion réussie', {
            description: `Bienvenue ${user.name}`,
          });
        } else {
          set({ isLoading: false });
          toast.error('Erreur de connexion', {
            description: 'Email et mot de passe requis',
          });
        }
      },

      register: async (email: string, password: string, name: string) => {
        set({ isLoading: true });
        
        // Simulation d'inscription
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        if (email && password && name) {
          const user: User = {
            id: Date.now().toString(),
            email,
            name,
          };
          
          set({ 
            user, 
            isAuthenticated: true, 
            isLoading: false 
          });
          
          toast.success('Inscription réussie', {
            description: `Bienvenue ${name}`,
          });
        } else {
          set({ isLoading: false });
          toast.error('Erreur d\'inscription', {
            description: 'Tous les champs sont requis',
          });
        }
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
        toast.success('Déconnexion réussie');
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);

