import { create } from "zustand";

const useStore = create((set) => ({
	count: true,
	cambiar: () => set((state) => ({ count: !state.count })),
}));

export default useStore;
