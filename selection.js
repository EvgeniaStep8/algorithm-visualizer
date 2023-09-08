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

export default sortArrayBySelection;