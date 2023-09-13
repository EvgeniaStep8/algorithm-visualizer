import { delay, exchangeColumns, lightDownColumn, lightUpColumn, getSortFunction, getSortAlgorithmDescription } from "./helpers.js";
import { info, selectSort, selectSpeed, button, baseDelayTime, container } from "./constants.js";
import { description, initialArray } from "./constants.js";
import { renderArray } from "./array.js";
let array = initialArray;
let isRunning = false;
let newAlgorithm = false;
let delayTime = baseDelayTime;

const bubbleSort = async (array) => {
  let change;
  do {
    change = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (newAlgorithm) {
        return;
      }
      while (!isRunning) {
        await delay(100);
      }
      lightUpColumn(i, "green");
      lightUpColumn(i + 1, "green");
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        change = true;
        exchangeColumns(i, i + 1);
      }
      await delay(delayTime);
      lightDownColumn(i);
      lightDownColumn(i + 1);
    }
  } while (change);
};

const combSort = async (array) => {
  const factor = 1.247;
  let gapFactor = array.length / factor;

  while (gapFactor > 1) {
    const gap = Math.round(gapFactor);
    for (let i = 0, j = gap; j < array.length; i++, j++) {
      if (newAlgorithm) {
        return;
      }
      while (!isRunning) {
        await delay(100);
      }
      lightUpColumn(i, "green");
      lightUpColumn(j, "green");
      if (array[i] > array[j]) {
        [array[i], array[j]] = [array[j], array[i]];
        exchangeColumns(i, j);
        await delay(delayTime);
      }
      lightDownColumn(i);
      lightDownColumn(j);
    }
    gapFactor = gapFactor / factor;
  }
};

const selectionSort = async (array) => {
  let min;
  for (let i = 0; i < array.length - 1; i++) {
    if (newAlgorithm) {
      return;
    }
    while (!isRunning) {
      await delay(100);
    }
    min = i;
    lightUpColumn(min, "red");
    for (let j = i + 1; j < array.length; j++) {
      while (!isRunning) {
        await delay(delayTime);
      }
      lightUpColumn(j, "green");
      await delay(delayTime);
      if (array[min] > array[j]) {
        lightDownColumn(min);
        min = j;
        lightUpColumn(min, "red");
      } else {
        lightDownColumn(j);
      }
    }
    [array[i], array[min]] = [array[min], array[i]];
    exchangeColumns(i, min);
    lightDownColumn(min);
    lightUpColumn(i, "orange");
  }
  lightUpColumn(array.length - 1, "orange");
};

const insertionSort = async (array) => {
  let cur, j;
  for (let i = 0; i < array.length; i++) {
    if (newAlgorithm) {
      return;
    }
    while (!isRunning) {
      await delay(100);
    }
    cur = array[i];
    lightUpColumn(i, "red");
    await delay(delayTime);
    lightUpColumn(i, "orange");
    j = i - 1;
    while (j >= 0 && array[j] > cur) {
      lightUpColumn(j, "red");
      [array[j + 1], array[j]] = [array[j], array[j + 1]];
      exchangeColumns(j, j + 1);
      await delay(delayTime);
      lightUpColumn(j, "orange");
      j--;
    }
  }
};

const quickSort = async (array) => {
  await swap(array, 0, array.length);
};

const swap = async (array, start, end) => {
  for (let i = start; i < end; i++) {
    lightDownColumn(i);
  }
  let pivotIndex = start;
  let pivot = array[start];
  lightUpColumn(pivotIndex, "orange");
  if (start - end !== 0) {
    let left = [];
    let right = [];
    for (let i = start + 1; i < end; i++) {
      if (newAlgorithm) {
        return;
      }
      while (!isRunning) {
        await delay(100);
      }
      lightUpColumn(i, "green");
      await delay(delayTime);
      if (pivot > array[i]) {
        let j = i;
        lightUpColumn(j, "red");
        while (j !== pivotIndex) {
          await delay(delayTime);
          exchangeColumns(j, j - 1);
          [array[j], array[j - 1]] = [array[j - 1], array[j]];
          if (j !== pivotIndex + 1) {
            lightUpColumn(j, "violet");
          }
          j--;
          lightUpColumn(j, "red");
        }
        pivotIndex = j + 1;
        lightUpColumn(pivotIndex, "orange");
        left.push(array[i]);
      } else {
        lightUpColumn(i, "violet");
        right.push(array[i]);
        await delay(100);
      }
    }
    await swap(array, start, pivotIndex);
    await swap(array, pivotIndex + 1, end);
  }
};

const startSort = (() => {
  let firstCall = true;

  return () => {
    const func = getSortFunction(quickSort, selectionSort, combSort, insertionSort, bubbleSort, selectSort.value);
    isRunning = !isRunning;

    if (newAlgorithm) {
      firstCall = true;
    }

    if (firstCall) {
      firstCall = false;
      func(array);
    }

    if (isRunning) {
      button.textContent = "Пауза";
    } else {
      button.textContent = "Старт";
    }
  };
})();

const changeSortAlgorithmDescription = () => {
  description.textContent = getSortAlgorithmDescription(info, selectSort.value);
  if (isRunning) {
    newAlgorithm = true;
    button.textContent = "Старт";
    isRunning = false;
  }
};

const changeSpeedOfSort = () => {
  const k = +selectSpeed.value;
  delayTime = baseDelayTime / k;
}

const changeArrayForSort = (arr) => {
  array = arr;
  renderArray(array, container);
}

const changeArrayLength = (length) => {
  array = initialArray;
  array = array.slice(0, length);
  renderArray(array, container);
}

export { startSort, changeSortAlgorithmDescription, changeSpeedOfSort, changeArrayForSort, changeArrayLength, array };