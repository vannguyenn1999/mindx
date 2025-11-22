// ? Câu 1 : Thêm thuộc tính mới vào đối tượng
const student = { name: "John", age: 20 };
student.major = "Computer Science";
console.log(student);

// ? Câu 2 : Xóa thuộc tính khỏi đối tượng
const person = { name: "Alice", age: 25, job: "Designer" };
delete person.job;
console.log(person);

// ? ư Câu 3 : Đếm số lượng thuộc tính trong đối tượng
const car = { brand: "Toyota", model: "Camry", year: 2020 };
console.log(Object.keys(car).length);

// ? Câu 4 : Chuyển đổi đối tượng thành mảng các cặp key-value
const product = { name: "Laptop", price: 1000 };
console.log(Object.entries(product));

// ? Câu 5 : Tìm kiếm đối tượng có name là "Camera" trong mảng sản phẩm
const products = [
  { name: "Phone", price: 500 },
  { name: "Camera", price: 300 },
  { name: "Tablet", price: 700 },
];
const cameraProduct = products.find((product) => product.name === "Camera");
console.log(cameraProduct);

// ? Câu 6 : Lọc ra các sản phẩm có giá lớn hơn 100
const products_2 = [
  { name: "Phone", price: 50 },
  { name: "Camera", price: 300 },
  { name: "Tablet", price: 700 },
];
console.log(products_2.filter((item) => item.price > 100));

// ? Câu 7 : Cập nhật giá trị thuộc tính trong đối tượng
const person_2 = { name: "Bob", age: 25, job: "Developer" };
person_2.age = 30;
console.log(person_2);

// ? Câu 8 : Gộp hai đối tượng lại với nhau
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// ? Câu 9 : Duyệt qua đối tượng và in ra key-value
const animal = { type: "Dog", name: "Buddy", age: 3 };
for (const key in animal) {
  console.log(`${key}: ${animal[key]}`);
}

// ? Câu 10 : Kiểm tra đối tượng có chứa thuộc tính color không
const car_2 = { brand: "BMW", model: "X5" };
console.log(car_2.hasOwnProperty("color"));
