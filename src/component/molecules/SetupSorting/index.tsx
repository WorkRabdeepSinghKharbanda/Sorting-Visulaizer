import { useState } from "react";
import {
  EXISTING_SORTING_ALGO,
  MAX_SORING_SPEED,
  MAX_SORTING_STICK,
  MIN_SORING_SPEED,
  MIN_SORTING_STICK,
  SORTING_SPEED_IN_MS,
} from "../../../lib/constant";
import { makeRandomArray } from "../../../lib/helper";
import { useInitialData } from "../../../lib/hooks/useInitialData";
import Dropdown from "../../atom/Dropdown";
import RangeField from "../../atom/RangeField";
import TextField from "../../atom/TextField";
import style from "./style.module.scss";

const SetupSorting = () => {
  const [arrayBuffer, setArrayBuffer] = useState<string>("");

  const {
    isStartGame,
    sortingStick,
    sortingSpeedSlider,
    algorithms,
    setSortingStick,
    setSortingAlgorithm,
    setSortingSpeedSlider,
    setIsGameStart,
    setSortingArray,
  } = useInitialData();

  const handleStart = () => {
    if (arrayBuffer.length > 0) {
      const userArray = arrayBuffer
        .split(",")
        .map((value: string) => Number(value));
      setSortingArray(userArray);
      setSortingStick(userArray.length);
    } else {
      const randomNumberArray = makeRandomArray(sortingStick);
      setSortingArray(randomNumberArray);
    }
    setIsGameStart(true);
  };

  const handleReset = () => {
    setSortingStick(0);
    setSortingAlgorithm(EXISTING_SORTING_ALGO.SELECTION_SORT);
    setSortingSpeedSlider(SORTING_SPEED_IN_MS);
    setIsGameStart(false);
    setSortingArray([]);
    setArrayBuffer("");
  };

  return (
    <div className={`${style["setup-container"]}`}>
      <h1>Sorting Visualizer</h1>
      <div className="d-flex flex-column gap-4">
        <TextField
          label={"Add Input Size"}
          value={sortingStick.toString()}
          onChange={setSortingStick}
          placeHolder={"Add something"}
          isValid={true}
          type={"number"}
          validText={"Enter valid Number"}
          className={"d-flex flex-column mb-0"}
          min={`${MIN_SORTING_STICK}`}
          max={`${MAX_SORTING_STICK}`}
        />

        <p className="mb-0">OR </p>

        <TextField
          label={"Give your array by adding comma"}
          value={arrayBuffer}
          onChange={(passedArrayStirng: string) =>
            setArrayBuffer(passedArrayStirng)
          }
          placeHolder={"Add something"}
          type={"text"}
          isValid={true}
          validText={"Enter valid Number"}
          className={"d-flex flex-column"}
        />

        <Dropdown
          label={"Sorting Algo"}
          name={"algorithmn"}
          value={algorithms}
          options={Object.values(EXISTING_SORTING_ALGO)}
          onChange={(selectedAlgorithm: EXISTING_SORTING_ALGO) =>
            setSortingAlgorithm(selectedAlgorithm)
          }
          className={"d-flex flex-column"}
        />

        {/* Speed Range */}
        <RangeField
          className={"d-flex flex-column"}
          label={"Set Speed for sorting"}
          value={sortingSpeedSlider.toString()}
          onChange={(speedValue: string) =>
            setSortingSpeedSlider(Number(speedValue))
          }
          min={`${MIN_SORING_SPEED}`}
          max={`${MAX_SORING_SPEED}`}
        />
      </div>

      <button className={`btn btn-primary w-100 mb-4 ${style.start}`} onClick={handleStart} disabled={isStartGame}>
        START
      </button>

      <button className={`btn btn-danger w-100 ${style}`} onClick={handleReset} disabled={!isStartGame}>
        RESET
      </button>
    </div>
  );
};

export default SetupSorting;
