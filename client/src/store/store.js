import { create } from "zustand";

// Create a Zustand store with localStorage persistence
const useSheetStore = create((set) => ({
  sheetName: localStorage.getItem("sheetName") || "Untitled Spreadsheet",

  setSheetName: (name) => {
    localStorage.setItem("sheetName", name);
    set({ sheetName: name });
  },
}));

export default useSheetStore;
