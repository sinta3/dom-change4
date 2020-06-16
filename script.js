let img = document.getElementById("img");
img.innerHTML = `<img src="./img.jpg" alt='resep'>`;

let container = document.getElementById("container");

let resep = document.getElementById("Resep");
resep.innerHTML = `<h1>Resep Dalgona Coffee</h1>`;

let content = document.getElementById("content");
let bahan = [
    "2 sendok makan kopi instan tanpa ampas",
    "2 sendok makan air panas",
    "1 cangkir susu",
    "2 sendok makan gula pasir",
];

bahan.forEach((e) => {
    let list = document.createElement("li");
    let item = document.createTextNode(e);
    content.appendChild(list);
    list.appendChild(item);
});

document.body.style.fontFamily = "Balsamiq Sans, cursive";
container.style.textAlign = "center";
container.style.marginTop = "50px";
