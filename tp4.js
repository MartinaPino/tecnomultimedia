//Pino Martina
//tp4 comision1
//https://youtu.be/qUj3jheR_wc

let barcoX, barcoY, anchoBarco, altoBarco; // variables del barco
let  soldadoAncho, soldadoAlto; // variables del soldado

let listaSoldadosX = [];
let listaSoldadosY = [];
let velocidadSoldadosX = [];

let estaEnJuego = true;

let cant = 1; //soldados en pantalla

let rescatados = 0;
let ahogados = 0;

let img;

function setup() {
  createCanvas(600, 400);

  //Medidas del barco
  anchoBarco = 40; 
  altoBarco = 40;

  //posicion del barco
  posicionarBarco();

  //Medidas del soldado
  soldadoAncho = 40;
  soldadoAlto = 40;

  for (let i=0; i<cant; i++) {
    //Genera la posicion donde va a aparecer el soldado
    listaSoldadosX[i] = random(0, width - soldadoAncho/2);
    listaSoldadosY[i] = random(-100, -10);

    velocidadSoldadosX[i] = random(3, 4);
  }
  textSize(25);
}


function draw() {
  background(123, 188, 183);
  image(img, 0, 0,width,height);

  if (estaEnJuego) {

    generarBarco(barcoX, barcoY, anchoBarco, altoBarco);

    for (let i=0; i<cant; i++) {
      generarSoldado(listaSoldadosX[i], listaSoldadosY[i], soldadoAncho, soldadoAlto);

      listaSoldadosY[i] += velocidadSoldadosX[i];

      if (listaSoldadosY[i]>height) {
        //reinicia la posicion X e Y del soldado en valores negativos random, para hacer que aparezcan como afuera de la pantalla en distintas posiciones.
        listaSoldadosX[i] = random(0, width - soldadoAncho/2);
        listaSoldadosY[i] = random(-100, -10);
        ahogados++;
      }
      if (fueRescatado(barcoX, barcoY, listaSoldadosX[i], listaSoldadosY[i], soldadoAncho, soldadoAlto)) {
        listaSoldadosX[i] = random(0, width - soldadoAncho/2);
        listaSoldadosY[i] = random(-100, -10)
          rescatados++;
      }
    }

    if (rescatados >= 5 ) {
      estaEnJuego = false;
    }

    if (ahogados >= 3 && rescatados < 5) {
      estaEnJuego = false;
    }
  } else {
    textSize(19);
    text("CREDITOS:\n\nEstudiante: Martina Pino\nComision: 1", 200, 182);
    noStroke();
    fill (0, 75);
    rect (165, 70, 270, 290, 10);

    textSize(25);
    if (rescatados >= 5 ) {
      fill(45, 173, 50);
      text("¡Ganaste!", 250, 120);
      boton(250, 290, 110, 40, 5);
    }

    if (ahogados >= 3 && rescatados < 5) {
      fill(255, 0, 0);
      text("Perdiste...", 250, 120);
      boton(250, 290, 110, 40, 5);
    }
  }

  fill(255);

  //contadores.
  text("Atrapados "+rescatados, 50, 50);
  text("Ahogados " + ahogados, 400, 50);
}

function generarSoldado(x, y, ancho, alto) {
  fill(248, 237, 227);
  noStroke();
  rectMode(CORNER);
  rect(x, y, ancho, alto);
}

function generarBarco(x, y, diam) {
  fill(0);
  noStroke();
  rectMode(CORNER);
  rect(x, y, anchoBarco, altoBarco);
}

function fueRescatado(posicionXBarco, posicionYBarco, posicionXSoldado, posicionYSoldado, anchoSoldado, altoSoldado) {

 // console.log("posicionXBarco",posicionXBarco);
  //console.log("posicionXSoldado",posicionXSoldado);
  if (posicionXBarco > posicionXSoldado - anchoSoldado && posicionXBarco < posicionXSoldado + anchoSoldado  && posicionYBarco>posicionYSoldado && posicionYBarco < posicionYSoldado+altoSoldado) {
    return true;
  } else {
    return false;
  }
}

function keyPressed() {

  
  if (keyCode=== RIGHT_ARROW && barcoX<width-anchoBarco) {
    barcoX+=23;
  }
  if (keyCode=== LEFT_ARROW && barcoX > 0) {
    barcoX-=23;
  }
}

function mousePressed() {

   console.log('mouseX',mouseX);
   console.log('mouseY',mouseY); 

  //console.log('entro al mp',mouseBoton(248,330,286 ,340))
  if (!estaEnJuego && mouseBoton(248, 360, 286, 340)) {
    rescatados = 0;
    ahogados = 0;
    posicionarBarco();
    estaEnJuego = true;
  }
}

function boton ( i, j, k, l, m) {
  stroke(100);
  fill(191, 169, 98);
  rect(i, j, k, l, m);
  noStroke();
  fill(255);
  textSize(20);
  text("Reiniciar", 265, 317);
}

function mouseBoton (x1, x2, y1, y2) {
  return(mouseX>x1 && mouseX< x2 && mouseY> y1 && mouseY<y2);
}

function posicionarBarco() {
  barcoX = width/2;
  barcoY = height-altoBarco;
}

function preload(){
 img= loadImage ("data/imagenp.jpeg");
 }
