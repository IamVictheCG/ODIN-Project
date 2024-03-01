let s = new String("Hello World")
let x = s;

// x = s.substring(7)

// x = s.substring(-11, 5)

// x = s.substring((s.length -5), s.length)

// x = s.slice(-11, 5)

// x = "                  ssssssfer"
// x = x.trim()

// x = s.replace("World", "Victor")

// x = s.includes("Hell")

// x = s.valueOf()

// x = s.split("")
// x = s.split(" ")

// console.log(x);

// let str = "victor"
// let y;
// y = str.charAt(0).toLocaleUpperCase() + str.substring(1);
// // OR
// y = str[0].toLocaleUpperCase() + str.slice(1);
// console.log(y);

// ======================NUMBERS================================

// const num = new Number(5.7345);
// x = num.toString();

// x = num.toString().length;

// x = num.toFixed(2);

// x = num.toPrecision(3);
// x = num.toExponential(2);

// x = num.toPrecision(3);

// x = num.toLocaleString('ar-EG')

// console.log(num, typeof(x));

//=========================Math Object===========================

// x = Math.sqrt(9)

// x = Math.abs(-8);

// x = Math.round(34.782);

// x = Math.ceil(4.2);

// x = Math.floor(4.92);

// x = Math.pow(2, 3);

// x = Math.min(3, 9, 5);

// x = Math.max(3, 9, 5);

// x = Math.random();

// x = Math.random() * 10 + 1;
// console.log(x);

//=======================Date and Time===========================
// let d = new Date();

// x = d.toString();

// x = d.getTime();

// x = d.valueOf();

// x = d.getFullYear();

// x = d.getMonth();
// x = d.getMonth() + 1;

// x = d.getMinutes();

// x = d.getDate();

// x = d.getDay();

// x = `${d.getFullYear()}-${d.getMonth() +1}-${d.getDate()}`

// x = Intl.DateTimeFormat("en-US").format(d);
// x = Intl.DateTimeFormat("en-UK").format(d);
// x = Intl.DateTimeFormat("default").format(d);

// x = Intl.DateTimeFormat("default", {month: "long"}).format(d);
// x = Intl.DateTimeFormat("default", {month: "short"}).format(d);

// console.log(x);

//=============================================Array================================
//Array Literal
const arr = [12, 44, 23, 55, 5];


arr.push(40);

arr.pop();

arr.unshift(65);

arr.shift();

arr.reverse();

x = arr.includes(55);

x = arr.indexOf(5)

x = arr.slice(1, 4);

x = arr.splice(3, 1)

// console.log(arr);
// console.log(x, arr);
console.log(x);

//Array Constructor
const fruits = new Array("Apple", "Mango", "Orange", "Melon", "Pawpaw");
const berries = new Array("strawberry", "blueberry", "raspberry", "blackberry");

// fruits.push(berries)
fruits.push(...berries);

x = Array.isArray(fruits);

x = Array.from('victor')

const a = 2;
const b = 3;
const c = 4;

x = Array.of(a, b, c);



// console.log(fruits);
console.log(x);
//============================
//Challenge 1)
const arrX1 = [1, 2, 3, 4, 5];
arrX1.reverse();
arrX1.push(0);
arrX1.unshift(6);

console.log(arrX1);

//Challenge 2)
const arrX2_1 = [1, 2, 3, 4, 5];
const arrX2_2 = [5, 6, 7, 8, 9, 10];

const arrX2_3 = arrX2_1.concat(arrX2_2);
arrX2_3.splice(4, 1)
console.log(arrX2_3);
//===========================

