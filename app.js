// const date = new Date();

// const year = date.getFullYear();
// const month = date.toLocaleString("default", {month: "long"});
// const day = date.getDate();
// const hour = date.getHours();
// const minut = date.getMinutes();
// const second = date.getSeconds();
// const dayOfWeek = date.getDay();

// console.log(date);
// console.log(day, month, year);
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minut);
// console.log(second);
// console.log(dayOfWeek);


function soatYangilash() {
    let hozir = new Date();
    let soat = hozir.getHours();
    let minut = hozir.getMinutes();
    let sekund = hozir.getSeconds();
    console.clear();
    console.log(`${soat}:${minut}:${sekund}`);
}

setInterval(soatYangilash, 1000);
soatYangilash();