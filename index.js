const container = document.querySelector(".container");
const button = document.querySelector(".button");
let isRunning = false;
const array = [
  18, 56, 4, 31, 47, 6, 9, 25, 36, 2, 43, 8, 39, 14, 27, 51, 29, 22, 33, 40, 3,
  15, 45, 12, 38, 42, 10, 30, 7, 11, 34, 49, 13, 21, 44, 17, 28, 5, 48, 1, 35,
  50, 37, 16, 19, 46, 20, 26, 41, 32, 24,
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const renderArray = (array, container) => {
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

const sortArrayBySelection = async (array) => {
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

const handleStartClick = (() => {
  let firstCall = true;
  return () => {
    isRunning = !isRunning;

    if (firstCall) {
      firstCall = false;
      sortArrayBySelection(array);
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
