export const getRandomNumber = (minRange: number, maxRange: number): number => {
  return Math.floor(Math.random() * (maxRange - minRange + 1)) + 10;
};

export const makeRandomArray = (arrayNumber: number): number[] => {
  const resultArray = [];
  for (let i = 1; i <= arrayNumber; i++) {
    resultArray.push(getRandomNumber(1, 100));
  }
  return resultArray;
};

export const swap = (
  arrayNumber: number[],
  first: number,
  second: number
): number[] => {
  const firstValue = arrayNumber[first];
  const secondValue = arrayNumber[second];

  arrayNumber[first] = secondValue;
  arrayNumber[second] = firstValue;

  return JSON.parse(JSON.stringify(arrayNumber));
};

export const updateArray = (
  arrayNumber: number[],
  index: number,
  value: number
): number[] => {
  arrayNumber[index] = value;
  return JSON.parse(JSON.stringify(arrayNumber));
};



export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};


export const customHeightFormula = (maxValue:number,passedValue:number) => {
    return ((100/maxValue) * passedValue);
}