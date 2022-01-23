function bubbleSort(arr) {
  let temp;
  let swap;
  for (let i = arr.length - 1; i > 0; i--) {
    swap = false;
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = true;
      }
    }

    if (swap === false) {
      break;
    }
  }
  return arr;
}

console.log(bubbleSort([1, 2, 3, 4, 4, 8, 7]));
