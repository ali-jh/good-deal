import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const usePersistStore = create(
  persist(
    (set, get) => ({
      firstName: "",
      lastName: "",
      setFirstName: (name) => set({ firstName: name }),
      setLastName: (name) => set({ lastName: name }),
    }),
    {
      name: "persist-storage", // unique name
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
export default usePersistStore;
