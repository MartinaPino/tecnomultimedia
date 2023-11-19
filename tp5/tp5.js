//Pino Martina
//tp5 comision1
//video

let objJuego;
let fondo;

function setup() {
  createCanvas(600, 400);
  objJuego = new Juego();

}


function draw() {
  background(0);
  image(fondo, 0, 0,600,400);
  
  if(objJuego.estaEnJuego){
    objJuego.dibujar();
  }else{
    objJuego.mostrarPantallaFinal();
  }

}

function keyPressed(){
  objJuego.moverPersonaje(keyCode); 
}

function mousePressed() {

   console.log('mouseX',mouseX);
   console.log('mouseY',mouseY); 

  //console.log('entro al mp',mouseBoton(248,330,286 ,340))
  if (!objJuego.estaEnJuego && mouseBoton(248, 360, 286, 340)) {
     objJuego.reiniciarPuntaje();
    objJuego.dibujar();
    objJuego.estaEnJuego = !objJuego.estaEnJuego;
  }
}

function mouseBoton (x1, x2, y1, y2) {
  return(mouseX>x1 && mouseX< x2 && mouseY> y1 && mouseY<y2);
}

function preload(){
 fondo = loadImage ("data/paisaje2.avif");
 }
