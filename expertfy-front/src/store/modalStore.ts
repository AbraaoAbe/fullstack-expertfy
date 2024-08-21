import { create } from 'zustand';




interface modalState {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const useModalStore = create<modalState>((set) => ({
  open: true,
  setOpen: (open) => set({ open }),
}));

export default useModalStore;
