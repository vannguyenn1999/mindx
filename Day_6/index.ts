

// ! Câu 1 
// ? Tính chu vi hình chữ nhật
const funcPerimeter = (): number => {
    const length = Number(window.prompt("Nhập chiều dài : "));
    const width = Number(window.prompt("Nhập chiều rộng : "));
    if (isNaN(length) || isNaN(width) || length < 0 || width < 0) {
        alert("Vui lòng nhập đúng định dạng số cho chiều dài và chiều rộng!");
        return 0;
    }
    return 2 * (length + width);
}

// ? Tính diện tích hình chữ nhật
const funcAcreage = (): number => {
    const length = Number(window.prompt("Nhập chiều dài : "));
    const width = Number(window.prompt("Nhập chiều rộng : "));
    if (isNaN(length) || isNaN(width) || length < 0 || width < 0) {
        alert("Vui lòng nhập đúng định dạng số cho chiều dài và chiều rộng!");
        return 0;
    }
    return length * width;
}

// ! Câu 2
// ? Chuyển đổi số giây thành số phút
const convertTime = (): string => {
    const numbers = Number(window.prompt("Nhập số giây cần chuyển đổi: "));
    if (isNaN(numbers) || numbers < 0) {
        alert("Vui lòng nhập đúng định dạng số cho giây!");
        return "Dữ liệu không hợp lệ";
    }
    const hour = Math.floor(numbers / 3600);
    const minute = Math.floor(numbers % 3600 / 60);
    const second = numbers % 60;
    return `Thời gian sau khi chuyển đổi: ${hour} giờ, ${minute} phút, ${second} giây`
}

// ! Câu 3
// ? Tính lũy thừa
const calculateExponent = (): number => {

    const base = Number(window.prompt("Nhập số cơ sở: "));
    const exponent = Number(window.prompt("Nhập số mũ: "));

    if (isNaN(base) || isNaN(exponent) || base < 0 || exponent < 0) {
        alert("Vui lòng nhập đúng định dạng số cho cơ sở và số mũ!");
        return 0;
    }

    return base ** exponent;
}

// ! Câu 4
// ? trung bình cộng của 3 số bất kỳ
const calculateAverage = (): number => {
    const num1 = Number(window.prompt("Nhập số thứ nhất: "));
    const num2 = Number(window.prompt("Nhập số thứ hai: "));
    const num3 = Number(window.prompt("Nhập số thứ ba: "));
    return (num1 + num2 + num3) / 3;
}

// ! Câu 5
// ? tính khoảng cách giữa 2 điểm trong mặt phẳng Oxy
const calculateDistance = (): number => {
    const x1 = Number(window.prompt("Nhập hoành độ điểm thứ nhất: "));
    const y1 = Number(window.prompt("Nhập tung độ điểm thứ nhất: "));
    const x2 = Number(window.prompt("Nhập hoành độ điểm thứ hai: "));
    const y2 = Number(window.prompt("Nhập tung độ điểm thứ hai: "));

    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        alert("Vui lòng nhập đúng định dạng số cho tọa độ điểm!");
        return 0;
    }

    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

// ! Câu 6
// ? Kiểm tra số lớn nhất có phải là số thứ nhất không
const isNum1MaxValue = (): boolean => {
    const num1 = Number(window.prompt("Nhập số thứ nhất: "));
    const num2 = Number(window.prompt("Nhập số thứ hai: "));
    const num3 = Number(window.prompt("Nhập số thứ ba: "));
    return Math.max(num1, num2, num3) === num1 ? true : false;
}

// ! Câu 7
// ? so sánh hai chuỗi nhập từ người dùng và trả về true nếu chúng giống nhau, ngược lại trả về false
const isStringSame = (): boolean => {
    const str1 = window.prompt("Nhập chuỗi thứ nhất: ");
    const str2 = window.prompt("Nhập chuỗi thứ hai: ");
    return str1 === str2 ? true : false;
}

// ! Câu 8
// ? Kiêm tra số dương
const isPositiveNumber = (): boolean => {
    const number = Number(window.prompt("Nhập số cần kiểm tra: "));
    return number > 0 ? true : false;
}


// ! Câu 9
// ? kiểm tra năm nhuận
const isLeapYear = (): boolean => {
    const year = Number(window.prompt("Nhập năm cần kiểm tra: "));
    if (isNaN(year) || year < 0) {
        alert("Vui lòng nhập đúng định dạng số cho năm!");
        return false
    }
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? true : false;
}

// ! Câu 10
// ? so sánh hai thời gian (giờ và phút) nhập từ người dùng và trả về true nếu thời gian thứ nhất muộn hơn thời gian thứ hai, ngược lại trả về false
const compareTime = (): string => {
    const hour1 = Number(window.prompt("Nhập giờ thứ nhất : "));
    const min1 = Number(window.prompt("Nhập phút thứ nhất : "));

    const hour2 = Number(window.prompt("Nhập giờ thứ hai : "));
    const min2 = Number(window.prompt("Nhập phút thứ hai : "));

    if (isNaN(hour1) || isNaN(min1) || isNaN(hour2) || isNaN(min2)) {
        alert("Vui lòng nhập đúng định dạng số cho giờ và phút!");
        return "Dữ liệu không hợp lệ";
    }

    if (hour1 > 24 || hour1 < 0 || hour2 > 24 || hour2 < 0 || min1 < 0 || min1 > 60 || min2 < 0 || min2 > 60) {
        alert("Vui lòng nhập đúng định dạng số cho giờ và phút!");
        return "Dữ liệu không hợp lệ";
    }

    if (hour1 < hour2 || (hour1 === hour2 && min1 < min2)) {
        return `Thời gian ${hour1} giờ ${min1} phút nhỏ hơn ${hour2} giờ ${min2} phút`;
    }

    return `Thời gian ${hour1} giờ ${min1} phút lớn hơn ${hour2} giờ ${min2} phút`;

}


console.log(funcAcreage())