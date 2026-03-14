let n = 5;

for (let i = n - 1; i >= 0; i--) {
  let row = "";

  // leading spaces
  for (let s = 0; s < n - i - 1; s++) {
    row += " ";
  }

  let num = 1;

  for (let j = 0; j <= i; j++) {
    row += num;
    if (j < i) row += " "; // space between numbers
    num = num * (i - j) / (j + 1);
  }

  console.log(row);
}
