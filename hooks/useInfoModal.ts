import { create } from 'zustand';

export interface ModatalStoreInterface {
  movieId?: string;
  isOpen: boolean;
  openModal: (movieId: string) => void;
  closeModal: () => void;
}

const useInfoModal = create<ModatalStoreInterface>((set) => ({
  movieId: undefined,
  isOpen: false,
  openModal: (movieId: string) => set({ isOpen: true, movieId }),
  closeModal: () => set({ isOpen: false, movieId: undefined }),
}));

export default useInfoModal;
