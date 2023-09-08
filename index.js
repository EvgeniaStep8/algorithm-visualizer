const container = document.querySelector(".container");
const button = document.querySelector(".button");
const mashButton = document.querySelector(".mash-up");
const select = document.querySelector("#algorithm");
const description = document.querySelector(".info");
let isRunning = false;
let newAlgorithm = false;
const array = [
  18, 56, 4, 31, 47, 6, 9, 25, 36, 2, 43, 8, 39, 14, 27, 51, 29, 22, 33, 40, 3,
  15, 45, 12, 38, 42, 10, 30, 7, 11, 34, 49, 13, 21, 44, 17, 28, 5, 48, 1, 35,
  50, 37, 16, 19, 46, 20, 26, 41, 32, 24,
];

const renderArray = (array, container) => {
  container.innerHTML = "";
  array.forEach((num, index) => {
    const column = createArrayColumn(num, index);
    container.append(column);
  });
};

const createArrayColumn = (num, index) => {
  const column = document.createElement("li");

  column.id = index;
  column.textContent = num;
  column.classList.add("item");
  column.style.height = `${num * 5}px`;

  return column;
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const exchangeColumns = (index1, index2) => {
  const column1 = document.getElementById(index1);
  const columnNum1 = +column1.textContent;
  const column2 = document.getElementById(index2);
  const columnNum2 = +column2.textContent;

  column1.textContent = columnNum2;
  column1.style.height = `${columnNum2 * 5}px`;

  column2.textContent = columnNum1;
  column2.style.height = `${columnNum1 * 5}px`;
};

const lightUpColumn = (index, color) => {
  const column = document.getElementById(index);

  column.style.background = color;
};

const lightDownColumn = (index) => {
  const column = document.getElementById(index);

  column.style.background = "rgb(80, 170, 234)";
};

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
      await delay(500);
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
      lightUpColumn(i, "green");
      lightUpColumn(j, "green");
      if (array[i] > array[j]) {
        [array[i], array[j]] = [array[j], array[i]];
        exchangeColumns(i, j);
        await delay(500);
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
    while (!isRunning) {
      await delay(100);
    }
    min = i;
    lightUpColumn(min, "red");
    for (let j = i + 1; j < array.length; j++) {
      while (!isRunning) {
        await delay(100);
      }
      lightUpColumn(j, "green");
      await delay(200);
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
    cur = array[i];
    lightUpColumn(i, "red");
    await delay(500);
    lightUpColumn(i, "orange");
    j = i - 1;
    while (j >= 0 && array[j] > cur) {
      lightUpColumn(j, "red");
      [array[j + 1], array[j]] = [array[j], array[j + 1]];
      exchangeColumns(j, j + 1);
      await delay(500);
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
      lightUpColumn(i, "green");
      await delay(100);
      if (pivot > array[i]) {
        let j = i;
        lightUpColumn(j, "red");
        while (j !== pivotIndex) {
          await delay(100);
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

const getSortFunction = () => {
  const value = select.value;
  let func;

  switch (value) {
    case "quick":
      func = quickSort;
      break;
    case "selection":
      func = selectionSort;
      break;
    case "comb":
      func = combSort;
      break;
    case "insertion":
      func = insertionSort;
      break;
    default:
      func = bubbleSort;
  }

  return func;
};

const getSordDescription = () => {
  const value = select.value;
  let description;

  switch (value) {
    case "quick":
      description = info.quick;
      break;
    case "selection":
      description = info.selection;
      break;
    case "comb":
      description = info.comb;
      break;
    case "insertion":
      description = info.insertion;
      break;
    default:
      description = info.bubble;
  }

  return description;
};

const handleStartClick = (() => {
  let firstCall = true;

  return () => {
    const func = getSortFunction();
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

renderArray(array, container);

button.addEventListener("click", handleStartClick);
select.addEventListener("change", () => {
  description.textContent = getSordDescription();
  if (isRunning) {
    newAlgorithm = true;
    button.textContent = "Старт";
    isRunning = false;
  }
});

mashButton.addEventListener("click", () => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  renderArray(array, container);
});
