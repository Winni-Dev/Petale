import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface UIState {
  // State
  isSidebarOpen: boolean;
  theme: 'light' | 'dark';
  modals: {
    [key: string]: boolean;
  };
  
  // Actions
  toggleSidebar: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
  openModal: (modalId: string) => void;
  closeModal: (modalId: string) => void;
}

export const useUIStore = create<UIState>()(
  devtools(
    (set: any) => ({
      // Initial state
      isSidebarOpen: false,
      theme: 'light',
      modals: {},

      // Toggle sidebar
      toggleSidebar: () => {
        set((state: any) => ({ isSidebarOpen: !state.isSidebarOpen }));
      },

      // Set theme
      setTheme: (theme: 'light' | 'dark') => {
        set({ theme });
        document.documentElement.classList.toggle('dark', theme === 'dark');
      },

      // Modal management
      openModal: (modalId: string) => {
        set((state: any) => ({
          modals: { ...state.modals, [modalId]: true }
        }));
      },

      closeModal: (modalId: string) => {
        set((state: any) => ({
          modals: { ...state.modals, [modalId]: false }
        }));
      },
    }),
    {
      name: 'ui-store',
    }
  )
);