// //1 vapros
// alert(5 % 2)

// //2 vapros
// alert(Math.random(${1, 10}))

// //3 vapros
// alert(Math.round(12.510))

//4 vapros  
// function chiqazish() {
//     for (let i = 0; i<10; i++) {
//         console.log("Mars It School");
//     }
// }
// chiqazish()

// //5 vapros
// function printMars() {
//     for (let i = 0; i < 10; i++) {
//       console.log("MARS IT SCHOOL");
//     }
//   }
//   printMars(); 


//6savol

// let harflar = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];


// let ismIndexlar = [
// harflar.indexOf("h"),
// harflar.indexOf("u"),
// harflar.indexOf("s"),
// harflar.indexOf("h"),
// harflar.indexOf("n"),
// harflar.indexOf("u"),
// harflar.indexOf("d"),
// harflar.indexOf("b"),
// harflar.indexOf("e"),
// harflar.indexOf("k")
// ];

// let ism = "";

// for (let i = 0; i < ismIndexlar.length; i++) {
// ism += harflar[ismIndexlar[i]];
// }

// console.log(ism);


//7 savol
// let rost = prompt(ВАМ СКОЛЬКО)
// if (rost > 18) {
// console.log("Вам больше 18 лет.");
// } else if (rost < 18) {
// console.log("Вам меньше 18 лет.");
// } else {
// console.log("Вам ровно 18 лет.");
// }

//8 savol
// let name = prompt("Введите ваше имя:");
// let reversedName = '';

// for (let i = name.length - 1; i >= 0; i--) {
// reversedName += name[i];
// }

// console.log(reversedName);


//9 savol

// let name = prompt("Введите ваше имя:");
// let age = prompt("Введите ваш возраст:");

// let outputDiv = document.getElementById("output");

// outputDiv.innerHTML = `
//   <h2>Ваше имя: ${name}</h2>
//   <p>Ваш возраст: ${age} лет</p>
// `;

//10 savol

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// let chetniySonlar = sonlar.filter(function(son) {
//   return son % 2 === 0;
// });

// chetniySonlar.forEach(function(son) {
//   console.log(son);
// });
