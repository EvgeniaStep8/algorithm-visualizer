const sortArrayByBubbleAlgorithm = async (array) => {
  if (isRunning) {
    let change;
    do {
      change = false;
      for (let i = 0; i < array.length - 1; i++) {
        while (!isRunning) {
          await delay(100);
        }
        await delay(500);
        lightUpColumns(i, array.length - 2);
        if (array[i] > array[i + 1]) {
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
          change = true;
          exchangeColumns(i, i + 1);
        }
      }
    } while (change);
  }
};

const lightUpColumns = (index, maxIndex) => {
  const column = document.getElementById(index);
  const nextColumn = document.getElementById(index + 1);

  if (index === 0) {
    column.classList.add("item_active");

    document.getElementById(maxIndex).classList.remove("item_active");
    document.getElementById(maxIndex + 1).classList.remove("item_active");
  } else {
    document.getElementById(index - 1).classList.remove("item_active");
  }

  nextColumn.classList.add("item_active");
};
