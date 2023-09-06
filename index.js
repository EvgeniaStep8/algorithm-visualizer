const container = document.querySelector(".container");
const array = [
  18, 56, 4, 
];

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
  column.style.height = `${num * 15}px`;

  return column;
};

const sortArrayByBubbleAlgorithm = (array) => {
  let change;
  do {
    change = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        change = true;
        exchangeColumns(i);
      }
    }
  } while (change);

  console.log(array);
};

const exchangeColumns = (index) => {
  const column = document.getElementById(index);
  const columnNum = +column.textContent;
  const nextColumn = document.getElementById(index + 1);
  const nextColumnNum = +nextColumn.textContent;

  column.textContent = nextColumnNum;
  column.style.height = `${nextColumnNum * 15}px`;
  
  nextColumn.textContent = columnNum;
  nextColumn.style.height = `${columnNum * 15}px`;

  column.id = index + 1;
  nextColumn.id = index;;
};

renderArray(array, container);
sortArrayByBubbleAlgorithm(array);
