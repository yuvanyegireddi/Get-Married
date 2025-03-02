import { create } from 'zustand';

const useStore = create((set) => ({
  user: {},
  setUser: (newUser) => set((state) => ({
    user: { ...state.user, ...newUser }, 
  })),
}));

export default useStore;
