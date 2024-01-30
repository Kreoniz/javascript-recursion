function fibs(n) {
  const sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  
  return sequence;
}

function fibsRec(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    return fibsRec(n - 1).concat([fibsRec(n - 1).pop() + fibsRec(n - 2).pop()]);
  }
}

console.log('Iterator:', fibs(8));
console.log('Recursion:', fibsRec(8));
