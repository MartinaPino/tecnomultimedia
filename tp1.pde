//Pino Martina
//tp1 comision 1

PImage imagen;
PImage imagen2;
PImage imagen3;
PFont t;

int movimiento;
int segundos;
int contador;
int sumacontador;

int posX;
int posY;
int ancho;
int alto;

void setup() {
  size(640, 480);
  segundos = 0;
  movimiento = 490;
  contador = 0;
  sumacontador = 1;

  t = loadFont("miletra.vlw");
  textFont(t, 40);
  textAlign(CENTER);
  imagen = loadImage("imagen.jpg");
  imagen2 = loadImage("imagen2.jpeg");
  imagen3 = loadImage("imagen3.jpg");

  posX = 580;
  posY = 400;
  ancho = 90;
  alto = 80;
}

void draw() {
  background(0);
  contador = contador + sumacontador;
  if (contador%60==0) {
    segundos++;
  }
  if (segundos<=3) { //estado 1
    movimiento = contador/2;
    fill(255);

    println(movimiento);
    image(imagen, 0, 0, width, height);
    textSize(40);
    text("San Carlos de Bariloche", width/2, movimiento);
  }
  else if (segundos >3 && segundos <=6) { //estado 2
    movimiento = contador/2;
    fill(255);
    image(imagen2, 0, 0, width, height);
    textSize(40);
    text("Bariloche es el destino mas visitado\n de la Patagonia y uno de los destinos\n mas visitados de la Argentina.", width/2, movimiento);
  }
  else { //estado 3
    movimiento = contador/2;
    fill(255);
    image(imagen3, 0, 0, width, height);
    textSize(40);
    text("Recibe alrededor de dos millones\n de turistas anualmente, principalmente\n en temporada invernal.", width/2, movimiento);

  fill(255,0,0);//boton
    ellipse(posX, posY, ancho, alto);
    fill(0);
    textSize(24);
    textAlign(CENTER,CENTER);
    text("reiniciar", posX, posY);
  }
}


void mousePressed() {
  segundos = 0;
  movimiento = 300;
  contador = 0;
  sumacontador = 1;


  if (segundos== 3) {
  }

  if (segundos == 3 && mouseX >= posX && mouseX <= posX + ancho && mouseY >= posY && mouseY <= posY + alto) {
  }
}
