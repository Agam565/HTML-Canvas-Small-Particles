export default class Particle{
    constructor(){
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() *3 - 1.5
    this.speedY = Math.random() *3 - 1.5
    }
    update(){
    this.x += this.speedX;
    this.y += this.speedY;
    }
    draw(){
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(this.x,this.y,50,0,Math.PI * 2);
        ctx.fill()
    }
    }