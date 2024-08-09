/* eslint-disable no-unused-vars */
import {create} from 'zustand'

const showInput = (set) => ({
  input: false, 
  noneInput: () => set((status) => ({input: false})),
  showInput: () => set((status) => ({input: true}))
})

export const useInput  = create(showInput)