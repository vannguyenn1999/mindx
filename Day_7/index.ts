// ! Câu 1
// ? Tổng các số từ 1 đến 100
const Cau1 = (): number => {
    let sum = 0
    for (let i = 1; i <= 100; i++) {
        sum += i
    }
    return sum
}

// ! Câu 2
// ? In ra các số chia hết cho 3 và 5
const Cau2 = () => {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(i)
        }
    }
}


// ! Câu 3
// ? Tính giai thừa của 1 số nhập từ bàn phím

const Cau3 = (): number => {
    const number = Number(window.prompt("Nhập số : "));
    if (isNaN(number)) {
        return 1
    }
    let result = 1
    for (let i = 1; i <= number; i++) {
        result *= i
    }
    return result
}

// ! Câu 4
// ? In ra bảng của chương từ 2 đến 9
const Cau4 = () => {
    for (let i = 2; i <= 9; i++) {
        console.log(`Bảng cửu chương của ${i}`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = ${i * j}`)
        }
    }

}

// ! Câu 5
// ? Chuyển đổi 1 số nguyên sang dạng nhị phân
const Cau5 = (): string => {
    let number = Number(window.prompt("Nhập số : "));
    if (isNaN(number) || number === 0) {
        return ""
    }
    let result = ""
    while (number > 0) {
        let remainder = number % 2
        result = remainder + result
        number = Math.floor(number / 2)
    }


    return result
}

// ! Câu 6
// ? Tính
const Cau6 = (): number => {
    const number = Number(window.prompt("Nhập số : "));
    if (isNaN(number) || number == 0) {
        return 1
    }
    let result = 1
    for (let i = 1; i <= number; i++) {
        result = Math.sqrt(i + result)
    }
    return result
}
console.log(Cau4());
