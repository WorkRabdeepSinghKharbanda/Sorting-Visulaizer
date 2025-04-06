/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { EXISTING_SORTING_ALGO } from "../../../lib/constant";
import { useInitialData } from "../../../lib/hooks/useInitialData";
import { customHeightFormula, delay, swap, updateArray } from "../../../lib/helper";
import style from "./style.module.scss";

const SortingVisualizer = () => {
  const {
    isStartGame,
    sortingSpeedSlider,
    algorithms,
    sortingArray,
    setSortingArray,
  } = useInitialData();

  const [maxValue, setMaxValue] = useState<number>(-1);

  useEffect(() => {
    if (sortingArray.length > 0) {
      let max = sortingArray[0];
      sortingArray.forEach((passedValue: number) => {
        max = passedValue > max ? passedValue : max;
      });
      setMaxValue(max);
    }
  }, [isStartGame]);

  const selectionSort = async () => {
    const tempArray = JSON.parse(JSON.stringify(sortingArray));
    const n = tempArray.length;

    for (let i = 0; i < n - 1; i++) {
      let lower = i;
      for (let j = i + 1; j < n; j++) {
        if (tempArray[lower] > tempArray[j]) {
          lower = j;
        }
      }
      await delay(sortingSpeedSlider);
      console.log("CURRENT ->", tempArray);
      const swappedArray = swap(tempArray, lower, i);
      console.log("SWAPPED ->", tempArray);
      setSortingArray(swappedArray);
    }
  };

  const bubbleSort = async () => {
    const tempArray = JSON.parse(JSON.stringify(sortingArray));
    const n = tempArray.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i + 1; j++) {
        if (tempArray[j] > tempArray[j + 1]) {
          await delay(sortingSpeedSlider);
          const swappedArray = swap(tempArray, j, j + 1);
          setSortingArray(swappedArray);
        }
      }
    }
  };

  const insertionSort = async () => {
    const tempArray = JSON.parse(JSON.stringify(sortingArray));
    const n = tempArray.length;
    for(let i = 1;i<n;i++) {

      const key = tempArray[i];
      let j = i - 1;
  
      while(j>=0 && tempArray[j] > key) {
        tempArray[j+1] = tempArray[j];
        await delay(sortingSpeedSlider);
        const swappedArray = updateArray(tempArray, j+1, tempArray[j]);
        setSortingArray(swappedArray);
        j = j - 1;
      }

      await delay(sortingSpeedSlider);
      const swappedArray = updateArray(tempArray, j+1, key);
      setSortingArray(swappedArray);
    }
  };

  useEffect(() => {
    if (isStartGame) {
      switch (algorithms) {
        case EXISTING_SORTING_ALGO.SELECTION_SORT:
          selectionSort();
          break;
        case EXISTING_SORTING_ALGO.BUBBLE_SORT:
          bubbleSort();
          break;
        case EXISTING_SORTING_ALGO.INSERTION_SORT:
          insertionSort();
          break;
      }
    }
  }, [isStartGame]);

  return (
    <div className={`${style["bars-container"]}`}>
      {sortingArray.map((passedNumber: number, key: number) => (
        <div
          key={key}
          className={`bg-primary text-light px-2 ${style["bar"]} ${key == 1 ? 'ms-1': ''}`}
          style={{ height: `${customHeightFormula(maxValue, passedNumber)}%` }}
        >
          {passedNumber}
        </div>
      ))}
    </div>
  );
};

export default SortingVisualizer;
