import { create } from 'zustand'

const useLoaderStore = create((set) => ({
    loading: false,
    setLoading: (loading: boolean) => set({loading})
}))

export default useLoaderStore