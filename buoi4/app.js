// var input = [5, 4, 5, 9, 4, "#", 45, 5, 6, 8, 9];
// var viTriDauT = 0;

// for (var index = 0; index < input.length; index++) {
//   if (input[index] == "#") {
//     viTriDauT = index;
//   }
// }
// var KHOBAU1 = 0;
// for (var i = 0; i < viTriDauT; i++) {
//   KHOBAU1 += input[i];
// }
// console.log(KHOBAU1);

// var KHOBAU2 =0 ;
//  for(var i = viTriDauT+1 ; i< input.length; i++){
//    KHOBAU2 += input[index];
//  }
//  console.log(KHOBAU2);

// var input = [5, 4, 5, 9, 4, "#", 45, 5, 6, 8, 9];
// console.log(input.shift()); // xóa đi phần từ đầu tiên và trả về nó
// console.log(input.pop()); // xóa đi phần từ cuối cùng và trả về nó
// console.log(input);
// input.unshift(15);// chèn phần tử vào mảng
// console.log(input);

//
// var input = [5, 4, 5, 9, 4, "#", 45, 5, 6, 8, 9];

// var viTriDauT = input.indexOf("#"); // tim vi tri cua phan tu trong mang
// // console.log(viTriDauT);
// // var viTriDauT = 0;
// // for (var index = 0; index < input.length; index++) {
// //   if (input[index] == "#") {
// //     viTriDauT = index;
// //   }
// // }
// var KHOBAU1 = 0;
// for (var i = 0; i < viTriDauT; i++) {
//   KHOBAU1 += input[i];
// }
// console.log(KHOBAU1);

// var KHOBAU2 = 0;
// for (var i = viTriDauT + 1; i < input.length; i++) {
//   KHOBAU2 += input[index];
// }
// console.log(KHOBAU2);

// tim min/max
// mang da chieu
// vong lap lồng nhau
// thuật toán sắp xếp

//1 tim min
// var number = [-1, -100, 0, 4, 2, 1, 54];
// var min = number[0];
// for (let index = 1; index < array.length; index++) {
//   if (min > number[i]) {
//     min = number[i];
//   }
// }
// console.log(min);

// var max = number[0];
// for (let index = 1; index < array.length; index++) {
//   if (max > number[i]) {
//     max = number[i];
//   }
// }
// console.log(max);

// for lồng nhau
// var hinhTamGiac = "";
// for (var i = 0; i < 3; i++) {
//   var hangNgang = "";
//   for (var j = 0; j < i + 1; j++) {
//     hangNgang += "-";
//   }
//   hangNgang += "\n";
//   hinhTamGiac += hangNgang;
// }
// console.log(hinhTamGiac);

// cho 1 mảng [4,5,6,7,8,99]
// yêu cầu lấy từng thành phần + với tất cả các thành phần còn lại

// var input = [4, 5, 6, 7, 8, 99];
// for (i = 0; i < input.length; i++) {
//   var c = 0;
//   for (j = 0; j < input.length; j++) {
//     if (j != i) {
//       c += input[j];
//     }
//   }
//   console.log(c);
// }

// thuat toan noi bot
// var input = [8, 10, 9, 2, 4, 1];
// for (let i = 0; i < input.length; i++) {
//   for (let j = 0; j < input.length; j++) {
//     if (input[j] > input[j + 1]) {
//       var c = input[j];
//       input[j] = input[j + 1];
//       input[j + 1] = c;
//     }
//   }
// }
// console.log(input);
