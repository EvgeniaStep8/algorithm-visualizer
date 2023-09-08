const sortArrayByCombAlgorithm = async (array) => {
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

export default sortArrayByCombAlgorithm;