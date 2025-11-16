// ! Câu 1 
// ? Tính chu vi hình chữ nhật
var funcPerimeter = function () {
    var length = Number(window.prompt("Nhập chiều dài : "));
    var width = Number(window.prompt("Nhập chiều rộng : "));
    if (isNaN(length) || isNaN(width) || length < 0 || width < 0) {
        alert("Vui lòng nhập đúng định dạng số cho chiều dài và chiều rộng!");
        return 0;
    }
    return 2 * (length + width);
};
// ? Tính diện tích hình chữ nhật
var funcAcreage = function () {
    var length = Number(window.prompt("Nhập chiều dài : "));
    var width = Number(window.prompt("Nhập chiều rộng : "));
    if (isNaN(length) || isNaN(width) || length < 0 || width < 0) {
        alert("Vui lòng nhập đúng định dạng số cho chiều dài và chiều rộng!");
        return 0;
    }
    return length * width;
};
// ! Câu 2
// ? Chuyển đổi số giây thành số phút
var convertTime = function () {
    var numbers = Number(window.prompt("Nhập số giây cần chuyển đổi: "));
    if (isNaN(numbers) || numbers < 0) {
        alert("Vui lòng nhập đúng định dạng số cho giây!");
        return "Dữ liệu không hợp lệ";
    }
    var hour = Math.floor(numbers / 3600);
    var minute = Math.floor(numbers % 3600 / 60);
    var second = numbers % 60;
    return "Th\u1EDDi gian sau khi chuy\u1EC3n \u0111\u1ED5i: ".concat(hour, " gi\u1EDD, ").concat(minute, " ph\u00FAt, ").concat(second, " gi\u00E2y");
};
// ! Câu 3
// ? Tính lũy thừa
var calculateExponent = function () {
    var base = Number(window.prompt("Nhập số cơ sở: "));
    var exponent = Number(window.prompt("Nhập số mũ: "));
    if (isNaN(base) || isNaN(exponent) || base < 0 || exponent < 0) {
        alert("Vui lòng nhập đúng định dạng số cho cơ sở và số mũ!");
        return 0;
    }
    return Math.pow(base, exponent);
};
// ! Câu 4
// ? trung bình cộng của 3 số bất kỳ
var calculateAverage = function () {
    var num1 = Number(window.prompt("Nhập số thứ nhất: "));
    var num2 = Number(window.prompt("Nhập số thứ hai: "));
    var num3 = Number(window.prompt("Nhập số thứ ba: "));
    return (num1 + num2 + num3) / 3;
};
// ! Câu 5
// ? tính khoảng cách giữa 2 điểm trong mặt phẳng Oxy
var calculateDistance = function () {
    var x1 = Number(window.prompt("Nhập hoành độ điểm thứ nhất: "));
    var y1 = Number(window.prompt("Nhập tung độ điểm thứ nhất: "));
    var x2 = Number(window.prompt("Nhập hoành độ điểm thứ hai: "));
    var y2 = Number(window.prompt("Nhập tung độ điểm thứ hai: "));
    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        alert("Vui lòng nhập đúng định dạng số cho tọa độ điểm!");
        return 0;
    }
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
};
// ! Câu 6
// ? Kiểm tra số lớn nhất có phải là số thứ nhất không
var isNum1MaxValue = function () {
    var num1 = Number(window.prompt("Nhập số thứ nhất: "));
    var num2 = Number(window.prompt("Nhập số thứ hai: "));
    var num3 = Number(window.prompt("Nhập số thứ ba: "));
    return Math.max(num1, num2, num3) === num1 ? true : false;
};
// ! Câu 7
// ? so sánh hai chuỗi nhập từ người dùng và trả về true nếu chúng giống nhau, ngược lại trả về false
var isStringSame = function () {
    var str1 = window.prompt("Nhập chuỗi thứ nhất: ");
    var str2 = window.prompt("Nhập chuỗi thứ hai: ");
    return str1 === str2 ? true : false;
};
// ! Câu 8
// ? Kiêm tra số dương
var isPositiveNumber = function () {
    var number = Number(window.prompt("Nhập số cần kiểm tra: "));
    return number > 0 ? true : false;
};
// ! Câu 9
// ? kiểm tra năm nhuận
var isLeapYear = function () {
    var year = Number(window.prompt("Nhập năm cần kiểm tra: "));
    if (isNaN(year) || year < 0) {
        alert("Vui lòng nhập đúng định dạng số cho năm!");
        return false;
    }
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? true : false;
};
// ! Câu 10
// ? so sánh hai thời gian (giờ và phút) nhập từ người dùng và trả về true nếu thời gian thứ nhất muộn hơn thời gian thứ hai, ngược lại trả về false
var compareTime = function () {
    var hour1 = Number(window.prompt("Nhập giờ thứ nhất : "));
    var min1 = Number(window.prompt("Nhập phút thứ nhất : "));
    var hour2 = Number(window.prompt("Nhập giờ thứ hai : "));
    var min2 = Number(window.prompt("Nhập phút thứ hai : "));
    if (isNaN(hour1) || isNaN(min1) || isNaN(hour2) || isNaN(min2)) {
        alert("Vui lòng nhập đúng định dạng số cho giờ và phút!");
        return "Dữ liệu không hợp lệ";
    }
    if (hour1 > 24 || hour1 < 0 || hour2 > 24 || hour2 < 0 || min1 < 0 || min1 > 60 || min2 < 0 || min2 > 60) {
        alert("Vui lòng nhập đúng định dạng số cho giờ và phút!");
        return "Dữ liệu không hợp lệ";
    }
    if (hour1 < hour2 || (hour1 === hour2 && min1 < min2)) {
        return "Th\u1EDDi gian ".concat(hour1, " gi\u1EDD ").concat(min1, " ph\u00FAt nh\u1ECF h\u01A1n ").concat(hour2, " gi\u1EDD ").concat(min2, " ph\u00FAt");
    }
    return "Th\u1EDDi gian ".concat(hour1, " gi\u1EDD ").concat(min1, " ph\u00FAt l\u1EDBn h\u01A1n ").concat(hour2, " gi\u1EDD ").concat(min2, " ph\u00FAt");
};
console.log(funcAcreage());
