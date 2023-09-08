const sortArrayByQuickAlgorithm = (array) => {
  if (array.length < 2) {
    return array;
  }

  let pivot = array[0];
  const left = [];
  const right = [];
  for (let i = 1; i < array.length; i++) {
    if (pivot > array[i]) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }

    console.log(array);
  }
  return sortArrayByQuickAlgorithm(left).concat(pivot, sortArrayByQuickAlgorithm(right));
}