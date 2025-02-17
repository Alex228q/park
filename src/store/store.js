import { create } from "zustand";

const useStore = create((set) => ({
  deepMazut: ["E-327", "E-328", "E-329", "E-330", "E-331"],
  pstMazut: [
    "E-322",
    "E-323",
    "E-324",
    "E-325",
    "E-326",
    "E-332",
    "E-333",
    "E-334",
  ],
  moveTankBetweenLists: (itemId) =>
    set((state) => {
      const isInDeepMazut = state.deepMazut.includes(itemId);
      const isInPstMazut = state.pstMazut.includes(itemId);

      if (isInDeepMazut) {
        return {
          deepMazut: state.deepMazut.filter((tank) => tank !== itemId),
          pstMazut: [...state.pstMazut, itemId],
        };
      } else if (isInPstMazut) {
        return {
          pstMazut: state.pstMazut.filter((tank) => tank !== itemId),
          deepMazut: [...state.deepMazut, itemId],
        };
      }

      // Если резервуар не найден в обоих списках, ничего не делаем
      return state;
    }),
  selectedReck: null,
  setSelectedReck: (itemId) =>
    set({
      selectedPumps: [],
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
