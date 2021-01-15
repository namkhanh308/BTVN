// //bài 1
// var input = Number(prompt("Vui long nhap vao so muon doi: "));
// var n;
// var c = 0;
// while (input > 0) {
//   n = input % 10;
//   c = c * 10 + n;
//   input = parseInt(input / 10);
// }
// console.log(c);

// //bai 2
// var input = Number(prompt("Moi nhap vao so kilomet: ")); // parseInt
// if (input > 0) { // validate
//   if (input > 0 && input <= 50) {
//     console.log("Tien ban phai tra la: " + input + "$");
//   } else if (input > 50 && input <= 100) {
//     console.log("Tien ban phai tra la: " + (50 * 1 + (input - 50) * 1.5) + "$");
//   } else if (input >= 100) {
//     console.log(
//       "tien ban phai tra la: " + (50 * 1 + 50 * 1.5 + (input - 100) * 2) + "$"
//     );
//   }
// } else {
//   console.log("dinh an gian a");
// }

// // bai 3
// var input = Number(prompt("nhap tuoi cua ban gai ban: "));
// var me = 2000;
// var namsinh = 2020 - input;
// if (namsinh - me < 5 && namsinh % 4 == 0 && namsinh % 100 != 0) {
//   console.log("Hợp tuổi quá. Đặt tên con đi em");
// } else {
//   console.log("Hy vọng em tìm được tình yêu mới");
// }
