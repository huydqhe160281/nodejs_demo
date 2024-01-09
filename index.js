import { Add, Sub, ShowData } from "./calc.js";

//array of objecy
const arrayData = [
  {
    id: 1,
    name: "A",
    age: 20,
    address: "Pune",
  },
  {
    id: 2,
    name: "B",
    age: 21,
    address: "Mumbai",
  },
  {
    id: 3,
    name: "C",
    age: 22,
    address: "Nagpur",
  },
  {},
];

//Show data of object

ShowData(arrayData);

console.log(Add(1, 3), Sub(1, 2));
