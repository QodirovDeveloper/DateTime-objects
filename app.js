const date = new Date();

const year = date.getFullYear();
const month = date.toLocaleString("default", {month: "long"});
const day = date.getDate();
const hour = date.getHours();
const minut = date.getMinutes();
const second = date.getSeconds();
const dayOfWeek = date.getDay();

console.log(date);
console.log(day, month, year);
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minut);
console.log(second);
console.log(dayOfWeek);

