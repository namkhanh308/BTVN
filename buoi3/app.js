// var k = 10;
// // var x = (k > 10) ? 2 : 3 ;
// k > 10 ? console.log(2) : console.log(3);

// var array = [5, "5", NaN, undefined];
// var array2 = [];
// console.log("array truoc khi push " + array);
// console.log("so phan tu trong mang la: " + array);
// array.push("abc");
// array.push(15);
// console.log("array sau khi push " + array);
// //lay phan tu o cuoi
// console.log("lay phan tu o cuoi mang " + array[array.length - 1]);
// // xoa 1 phan tu cuoi cung trong bang.
// var last = array.pop();
// console.log("Gia tri da pop ra la " + last);
// console.log("array sau khi pop " + array);

//b1: Cho một mảng rỗng và nhét lần lượt tên(họ , tên đệm, tên) của bạn vào
// trong mạng ấy rối log ra màn hình
// var c = [];
// var ho = prompt("nhap vao ho");
// c.push(ho);
// var tendem = prompt("nhap vap ten dem");
// c.push(tendem);
// var ten = prompt("nhap vao ten");
// c.push(ten);
// console.log(c);

// lay nhung mat
// var c = [];
// c.push(fullName.pop());
// c.push("khong khi");
// console.log(c);
// lay nhung khong mat
// console.log(fullName[fullName.length - 1] + " khong khi");

// in ra ho va ten va mang thanh rong[]
// var ten = fullName.pop();
// var tendem = fullName.pop();
// var ho = fullName.pop();

// console.log(ten + " " + tendem + " " + ho);
// console.log(fullName);
// var fullName = [];
// fullName.push("Do");
// fullName.push("Nam");
// fullName.push("Khanh");

// var c = "";
// for (var i = 0; i < fullName.length; i++) {
//   c = c + fullName[i] + " ";
// }
// console.log(c);

// var numbers = [3, 4, 5, 6, 7, 8, 9];
// for (var i = 0; i <= numbers.length - 1; i++) {
//   numbers[i] = numbers[i] + 5;
// }
// console.log(numbers);

// var i = 0;
// while (i < numbers.length) {
//   numbers[i] = numbers[i] + 5;
//   i++;
// }
// console.log(numbers);

// baitap: dem so luong so chan trong mang
// var numbers = [3, 4, 5, 6, 7, 8, 9, 10];
// var d = [];
// var c = 0;
// var k = 0;
// for (var i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 0) {
//     d.push(numbers[i]);
//     c += 1;
//   } else {
//     k += 1;
//   }
// }
// console.log(d);
// console.log("so luong phan tu le la = " + k);
// console.log("so luong phan tu chan la = " + c);
