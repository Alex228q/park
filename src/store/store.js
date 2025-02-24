import { create } from "zustand";

const useStore = create((set) => ({
  isSwap: false,
  toggleSwap: () =>
    set((state) => ({
      isSwap: !state.isSwap, // Переключаем isSwap
      deepMazut: ["E-327", "E-328", "E-329", "E-330", "E-331"], // Сбрасываем deepMazut
      pstMazut: [
        "E-322",
        "E-323",
        "E-324",
        "E-325",
        "E-326",
        "E-332",
        "E-333",
        "E-334",
      ], // Сбрасываем pstMazut
      selectedReck: null, // Сбрасываем selectedReck
      selectedTank: null, // Сбрасываем selectedTank
      selectedPumps: [], // Сбрасываем selectedPumps
      selectedPumps115: [], // Сбрасываем selectedPumps115
    })),
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
    set((state) => {
      // Если выбранная эстакада уже равна itemId, снимаем выбор
      if (state.selectedReck === itemId) {
        return {
          selectedReck: null,
          selectedPumps: [], // Очищаем массив насосов при снятии выбора эстакады
          selectedPumps115: [], // Очищаем массив насосов при снятии выбора эстакады
        };
      }
      // Иначе выбираем новую эстакаду
      return {
        selectedReck: itemId,
        selectedPumps: [],
        selectedPumps115: [], // Очищаем массив насосов при смене эстакады
      };
    }),
  selectedTank: null,

  setSelectedTank: (itemId) =>
    set(() => ({
      selectedTank: itemId,
      selectedPumps: [],
      selectedPumps115: [],
    })),

  selectedPumps: [],
  selectedPumps115: [], // Массив для хранения выбранных насосов
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

  setSelectedPump115: (itemId) =>
    set((state) => {
      //Если насос уже выбран, удаляем его
      if (state.selectedPumps115.includes(itemId)) {
        return {
          selectedPumps115: state.selectedPumps115.filter(
            (pump) => pump !== itemId
          ),
        };
      }

      //Если в массиве уже два насоса, заменяем последний
      if (state.selectedPumps115.length === 3) {
        const updatedPumps = [...state.selectedPumps115];
        updatedPumps[1] = itemId; // Заменяем последний насос
        return { selectedPumps115: updatedPumps };
      }

      // Если в массиве меньше двух насосов, просто добавляем новый
      return { selectedPumps115: [...state.selectedPumps115, itemId] };
    }),
}));

export default useStore;
