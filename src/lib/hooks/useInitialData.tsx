import { create } from "zustand";
import {  EXISTING_SORTING_ALGO, SORTING_ALGORITHMS_ARRAY } from "../constant";

interface INITIAL_SETUP_TYPE {
  sortingStick: number;
  sortingSpeedSlider: number;
  algorithms: string;
  isStartGame: boolean;
  sortingArray: number[];

  setSortingStick: (passedStick: number) => void;
  setSortingSpeedSlider: (passedSpeedInMs: number) => void;
  setIsGameStart: (passedState: boolean) => void;
  setSortingArray: (passedNumberArray: number[]) => void;
  setSortingAlgorithm: (passedAlgo: EXISTING_SORTING_ALGO) => void;
}

export const useInitialData = create<INITIAL_SETUP_TYPE>((set) => ({
  sortingStick: 0,
  sortingSpeedSlider: 500,
  algorithms: SORTING_ALGORITHMS_ARRAY[0],
  isStartGame: false,
  sortingArray: [],
  setSortingStick: (passedStick: number) => set({ sortingStick: passedStick }),
  setSortingSpeedSlider: (passedSpeedInMs: number) =>
    set({ sortingSpeedSlider: passedSpeedInMs }),
  setIsGameStart: (passedState: boolean) => set({ isStartGame: passedState }),
  setSortingArray: (passedNumberArray: number[]) =>
    set({ sortingArray: passedNumberArray }),
  setSortingAlgorithm: (passedAlgo: EXISTING_SORTING_ALGO) =>
    set({ algorithms: passedAlgo }),
}));
