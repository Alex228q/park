// import { create } from "zustand";

// const useStore = create((set) => ({
//   selectedTank: null,
//   setSelectedTank: (itemId) => set({ selectedTank: itemId }),
//   //-------------------
//   selectedPump: null,
//   setSelectedPump: (itemId) => set({ selectedPump: itemId }),
// }));

// export default useStore;

import { create } from "zustand";

const useStore = create((set) => ({
  selectedReck: null,
  setSelectedReck: (itemId) =>
    set({
      selectedReck: itemId,
    }),
  selectedTank: null,
  // setSelectedTank: (itemId) => set({ selectedTank: itemId }),
  setSelectedTank: (itemId) =>
    set(() => ({
      selectedTank: itemId,
      selectedPumps: [], // Очищаем массив насосов при смене резервуара
    })),
  //-------------------
  selectedPumps: [], // Массив для хранения выбранных насосов
  setSelectedPump: (itemId) =>
    set((state) => {
      //Если насос уже выбран, удаляем его
      if (state.selectedPumps.includes(itemId)) {
        return {
          selectedPumps: state.selectedPumps.filter((pump) => pump !== itemId),
        };
      }

      //Если в массиве уже два насоса, заменяем последний
      if (state.selectedPumps.length === 2) {
        const updatedPumps = [...state.selectedPumps];
        updatedPumps[1] = itemId; // Заменяем последний насос
        return { selectedPumps: updatedPumps };
      }

      // Если в массиве меньше двух насосов, просто добавляем новый
      return { selectedPumps: [...state.selectedPumps, itemId] };
    }),
}));

export default useStore;
