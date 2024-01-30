function fibs(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  }

  const sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  
  return sequence;
}

function fibsRec(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    return fibsRec(n - 1).concat([fibsRec(n - 1).pop() + fibsRec(n - 2).pop()]);
  }
}

const number = 8;
console.log('Iterator:', fibs(number));
console.log('Recursion:', fibsRec(number));
