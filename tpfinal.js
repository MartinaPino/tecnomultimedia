//Pino Martina, Pratto Priscila
//tpfinal, comision 1


let p;

function setup() {
  createCanvas(500,400);
  p = new Principal();

}

function draw() {
   background(8, 3, 3);
    p.dibujar();

}

function keyPressed() {
  p.teclaPresionada(keyCode);
}
