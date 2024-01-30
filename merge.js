function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const middle = array.length / 2;

    const leftHalf = mergeSort(array.slice(0, middle));
    const rightHalf = mergeSort(array.slice(middle));

    let leftPointer = 0;
    let rightPointer = 0;

    const sortedArray = [];

    while (leftPointer + rightPointer < array.length) {
      if (leftPointer === leftHalf.length) {
        return sortedArray.concat(rightHalf.slice(rightPointer));
      } else if (rightPointer === rightHalf.length) {
        return sortedArray.concat(leftHalf.slice(leftPointer));
      }

      const left = leftHalf[leftPointer];
      const right = rightHalf[rightPointer];

      if (left <= right) {
        sortedArray.push(left);
        leftPointer++;
      } else {
        sortedArray.push(right);
        rightPointer++;
      }
    }
  }
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
