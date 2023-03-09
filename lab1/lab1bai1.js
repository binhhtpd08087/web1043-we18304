// Nhập vào 2 số nguyên a, b từ bàn phím
var a = parseInt(prompt("Nhập số nguyên a:"));
var b = parseInt(prompt("Nhập số nguyên b:"));

// Tính tổng c của a và b
var c = a + b;

// In ra kết quả đồng thời bằng 2 cách
document.write("Kết quả của " + a + " + " + b + " = " + c + "<br>");
console.log("Kết quả của " + a + " + " + b + " = " + c);

// Nhập vào 1 số nguyên d từ bàn phím
var d = parseInt(prompt("Nhập số nguyên d:"));

// Tính tổng result của c và d
var result = c + d;

// In ra kết quả đồng thời bằng 2 cách
alert("Kết quả của " + c + " + " + d + " = " + result);
console.log("Kết quả của " + c + " + " + d + " = " + result);