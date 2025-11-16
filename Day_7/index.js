// ! Câu 1
// ? Tổng các số từ 1 đến 100
var Cau1 = function () {
    var sum = 0;
    for (var i = 1; i <= 100; i++) {
        sum += i;
    }
    return sum;
};
// ! Câu 2
// ? In ra các số chia hết cho 3 và 5
var Cau2 = function () {
    for (var i = 0; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(i);
        }
    }
};
// ! Câu 3
// ? Tính giai thừa của 1 số nhập từ bàn phím
var Cau3 = function () {
    var number = Number(window.prompt("Nhập số : "));
    if (isNaN(number)) {
        return 1;
    }
    var result = 1;
    for (var i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
};
// ! Câu 4
// ? Chuyển đổi 1 số nguyên sang dạng nhị phân
var Cau4 = function () {
    var number = Number(window.prompt("Nhập số : "));
    if (isNaN(number) || number === 0) {
        return "";
    }
    var result = "";
    while (number > 0) {
        var remainder = number % 2;
        result = remainder + result;
        number = Math.floor(number / 2);
    }
    return result;
};
console.log(Cau4());
