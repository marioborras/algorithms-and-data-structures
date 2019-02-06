const printAllPairs = n => {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      console.log(i, j);
    }
  }
};

// printAllPairs(20);

const logAtLeast5 = n => {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
};

// logAtLeast5(1);

const newArray = Array(5);

console.log(newArray);
