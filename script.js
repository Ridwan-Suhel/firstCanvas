let can = document.querySelector(".myCanvas");
let contxt = can.getContext("2d");



contxt.lineWidth = 2;
contxt.strokeRect(2,2,416, 226);
contxt.strokeStyle = "black";
contxt.fillStyle = "green";
contxt.fillRect(2,2,416, 226)


let centerX = can.width / 2;
let centerY = can.height / 2;

contxt.beginPath();
contxt.arc(centerX,centerY,70,0,2*Math.PI,false);
contxt.fillStyle = "red";
contxt.fill();
contxt.stroke();


let cName = "Bangladesh";

document.querySelector("h2").innerHTML = `Country Name is ${cName}.`;


const add = (x,y) => {
    let sum = x + y;
    document.querySelector("h3").innerHTML = sum;
}
add(20,30)