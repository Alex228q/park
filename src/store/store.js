import { create } from "zustand";

const useStore = create((set) => ({
  selectedTank: null,
  setSelectedTank: (itemId) => set({ selectedTank: itemId }),
  //-------------------
  selectedPump: null,
  setSelectedPump: (itemId) => set({ selectedPump: itemId }),
}));

export default useStore;
