// var, let and const
// hoisting

// hof -> higher order function -> any fn which accept another fn as a param
// or returns a fn is called hof

// factory fn
// map, filter, sort, reduce, forEach,

// const nums = [1, 2, 3, 4, 5];
// const doubled = nums.map((num) => num * 2);
// vasanthMap
// const doubled = nums.vasanthMap((num) => num * 2);
// [2, 4, 6, 8, 10]

// console.log(Array.isArray({ name: 1 }));

// const nums = [1, 2, 3];
// nums[100] = 100;
// nums["name"] = "vasanth";
// // console.log(nums);

// whenever a function calls another fn -> a new execution context is created

// const display = () => {
//   console.log(this);
// };

// display();

// object literal -> {}

// class Person {
//   constructor(name) {
//     // this.name = name;
//   }
// }

// const vasanth = new Person("vasanth");
// console.log(vasanth);

// factory -> generates object
// function createPerson(name, age) {
//   return {
//     name,
//     age,
//     display: function () {
//       console.log(`My name is ${this.name} and my age is ${this.age}`);
//     },
//   };
// }

// const vasanth = createPerson("vasanth", 10);
// const virat = createPerson("virat", 18);
// console.log(vasanth);
// console.log(virat);

// constructor method

// class Person {
//   constructor(name, age) {
//     // console.log(this);
//     this.name = name;
//     this.age = age;
//   }
//   display() {
//     console.log(`My name is ${this.name} and my age is ${this.age}`);
//   }
// }

// const vasanth = new Person("vasanth", 10);
// const manish = new Person("manish", 20);
// vasanth.display();

const mishra = {
  name: "mishra",
  age: 10,
};

const shaurya = {
  name: "shaurya",
  age: 20,
};

function display(place, country) {
  console.log(
    `My name is ${this.name} and my age is ${this.age}. I'm from ${place}, ${country}`
  );
}

// function borrowing methods -> call, apply, bind
// display.call(mishra, "chennai", "Bharat");
// display.call(shaurya, "Washington", "Pakistan");
// display.apply(shaurya, ["Washington", "Pakistan"]);

// const mishraFn = display.bind(mishra, "chennai", "Bharat");
// mishraFn();

// rest and spread
// ...display, {...display}

// add numbers
// function add(name, ...nums) {
//   let total = 0;
//   for (let num of nums) {
//     total += num;
//   }
//   return total;
// }

// console.log(add(10, 15));
// console.log(add(10));
// console.log(add());
// console.log(add(10, 20, 30));
// console.log(add(10, 20, 30, 10, 20, 30));

// const nums = [1, 2, 3];
// let copy = [...nums];
// console.log(nums);
// console.log(copy);
// copy[0] = 100;
// nums[1] = 200;
// console.log(nums);
// console.log(copy);

// for (let i = 0; i < 5; i++) {
//   // let div = document.createElement("div");
//   // let p = document.createElement("p");
//   // div.appendChild(p);
//   <div>
//     <p></p>
//   </div>;
// }

// body.appendChild(div);

// React -> is a library
// Virtual DOM -> React DOM

// Notes:
// 1. whenever a parent renders(changes) my child is also will re-render
// 2. If the child changes, parent is not affected
// 3. Each component will return a single node
