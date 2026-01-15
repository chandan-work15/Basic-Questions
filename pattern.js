let row = " ";
let space = " ";
for (let i = 0; i <= 3; i++) {
  row = row + space;
  for (let j = 0; j <= i; j++) {
    row = "*" + row;
    console.log(" " + row);
  }
}
