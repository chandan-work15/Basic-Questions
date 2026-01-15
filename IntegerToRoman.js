let num = 44;
let rem;
let que;
let rom;
let I = 1;
let IV = 4;
let V = 5;
let X = 10;
let XL = 40;
let L = 50;
let C = 100;
let CD = 400;
let D = 500;
let M = 1000;
let arr = [I, IV, V, X, XL, L, C, CD, D, M];

if (num.length == 2) {
  rem = num % 10;
  que = (num / 10) * 10;

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == que) {
      rom = arr[i];
      console.log(rom);
    }
    if(arr[i]==rem){
        rom= rom+arr[i];
    }
  }
}
console.log(rom);
