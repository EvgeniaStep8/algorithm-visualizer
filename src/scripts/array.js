const container = document.querySelector(".container");

// функция для отрисоки массива на странице
const renderArray = (array, container) => {
  container.innerHTML = "";
  array.forEach((num, index) => {
    const withoutText = array.length > 50;
    const column = createArrayColumn(num, index, withoutText);
    container.append(column);
  });
};

// функция для создания колонки массива, пропорциональной его величине
const createArrayColumn = (num, index, withoutText) => {
  const column = document.createElement("li");
  const columnText = document.createElement("p");

  column.id = index;

  column.classList.add("item");
  column.style.height = `${num * 7}px`;

  columnText.textContent = num;
  columnText.classList.add("item-text");

  if (withoutText) {
    columnText.classList.add("item-text-hidden");
  }

  column.append(columnText);

  return column;
};

// функция для перемешивания массива
const mashUpArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  renderArray(array, container);
}

export { renderArray, mashUpArray, container };

