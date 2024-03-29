const car = {
  color: "red",
  doors: 4,
};

// console.log(car.color);

// console.log(car[color]);

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

// let usersById = groupById(users);

function exercise(usersArray) {
  return usersArray.reduce((obj, value) => {
    console.log("obj :>> ", obj);
    console.log("value :>> ", value);
    obj[value.id] = value;
    console.log("obj :>> ", obj);
    return obj;
  }, {});
}

const result = users.map((user) => {
  const key = user.id;
  const value = user;

  return { key, value };
});
console.log("result :>> ", result);
exercise(users);
