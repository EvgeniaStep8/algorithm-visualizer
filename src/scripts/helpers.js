// функция, генерирующая задержку
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// функция для обмена колонок местами
const exchangeColumns = (index1, index2) => {
  const column1 = document.getElementById(index1);
  const columnNum1 = +column1.querySelector(".item-text").textContent;
  const column2 = document.getElementById(index2);
  const columnNum2 = +column2.querySelector(".item-text").textContent;

  column1.querySelector(".item-text").textContent = columnNum2;
  column1.style.height = `${columnNum2 * 5}px`;

  column2.querySelector(".item-text").textContent = columnNum1;
  column2.style.height = `${columnNum1 * 5}px`;
};

// функция подсветки колонок
const lightUpColumn = (index, color) => {
  const column = document.getElementById(index);

  column.style.background = color;
};

// функция, убирающая подсветку с колонок
const lightDownColumn = (index) => {
  const column = document.getElementById(index);

  column.style.background = "rgb(80, 170, 234)";
};

// функция получения функции сортировки по значению селекта
const getSortFunction = (quickSort, selectionSort, combSort, insertionSort, bubbleSort, value) => {
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

// функция получения описания метода сортировки по значению селекта
const getSortAlgorithmDescription = (info, value) => {
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

export { delay, exchangeColumns, lightUpColumn, lightDownColumn, getSortAlgorithmDescription, getSortFunction };