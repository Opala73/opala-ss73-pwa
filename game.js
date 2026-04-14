const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let rpm = 1000;
let speed = 0;

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#444";
    ctx.fillRect(0,200,800,100);

    ctx.fillStyle = "orange";
    ctx.fillRect(350,150,100,40);

    ctx.beginPath();
    ctx.arc(370,200,15,0,Math.PI*2);
    ctx.arc(430,200,15,0,Math.PI*2);
    ctx.fillStyle="#000";
    ctx.fill();

    let rpmNorm = Math.min(rpm / 7500, 1);
    ctx.fillStyle = "#0f0";
    ctx.fillRect(50,50, rpmNorm*300, 20);

    ctx.strokeStyle="#fff";
    ctx.strokeRect(50,50,300,20);

    ctx.fillStyle="#fff";
    ctx.fillText("RPM", 50,40);
    ctx.fillText("Velocidade: " + Math.floor(speed) + " km/h", 50,100);

    requestAnimationFrame(draw);
}

function accelerate() {
    rpm += 500;
    if (rpm > 7500) rpm = 1300;
    speed = rpm * 0.02;
}

draw();
