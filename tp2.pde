//Pino Giles Martina
//tp2 comision 1
//linkvideo

PImage imagen;
void setup() {
  size(800, 400);
  imagen = loadImage("imagen.jpg");
  background(255);
}

void draw() {

  image(imagen, 0, 0, 400, 400);

  //Bloque de diagonales 1
  lineaDiagonal(420, 0, width, 56, 19, true);

  //Bloque de verticales 1
  lineaVertical(58, 125);

  //Bloque de diagonales 2
  lineaDiagonal(400, 136, width, 260, 19, false);

  //Bloque de verticales 2
  lineaVertical(267, 326);

  //Bloque de diagonales 3
  lineaDiagonal(420, 333, width, height, 19, true);
}

void lineaDiagonal(int inicioX, int inicioY, int finX, int finY, int espacio, boolean diagonalIzq) {//esta variable es la que va a manejar con los numeros si la linea se empieza a generar desde izquierda a derecha, o de derecha a izquierda
  int sumaDirec = 0;


  if (diagonalIzq == true) {
    //si diagonalIzq es true, va a ser un numero positivo, y va a hacer que las lineas se vayan generando desde arriba y hacia la derecha
    sumaDirec = espacio;
  } else {
    //si es false entra al else, y hace que las lienas se generen desde abajo hacia arriba
    sumaDirec = -espacio;
  }

  //ancho de la linea
  strokeWeight(5);
  //forma de la linea
  strokeCap(SQUARE);

  //el ciclo FOR arranca a ejecutarse con x = inicioX y termina cuando X es menor o igual a finX
     //Despues le suma el valor de espacio a X para ir recorriendo el eje X
  for (int x=inicioX; x <= finX; x+=espacio) {
    //En el segundo for es exactamente lo mismo, pero para recorrer el eje Y
    for (int y=inicioY; y <= finY; y+=espacio) {

   //Sumadirec tiene el mismo valor que espacio, pero positivo o negativo segun el lado que quieras que vaya
   // Si el valor de increment es positivo, hacemos que el segundo punto vaya mas atras del primero, entonces haces que la diagonal se genere para el otro lado. Por ejemplo, en la primer vuelta el primer punto es en x=420 y=0, y el segundo en x=401 y=19
   //Si el valor de increment es negativo,tecnicamente va a sumar porque - por - es +. Entonces, el primer punto va a estar atras del segundo. Para darte un ejemplo, en la primer vuelta del ciclo for, el primer punto es en x=420 y=0, y el segundo x=439 y=19

      line(x, y, x-sumaDirec, y+espacio);
    }
  }
}


void lineaVertical(int inicio, int fin) {  //donde arranca y termina Y para ir separando el bloque de diagonales de las rectas

  //ancho de la linea
  strokeWeight(10); //no esta con strokeCap porque ya si se ejecuta una vez todas las lineas toman el mismo estilo.

  //recorremos el eje X desde 400, hasta el final de la pantalla. X va saltando de 19 en 19, entonces se genera la separación de las lineas
  for (int x = 400; x <= width; x += 19) {
    //recorremos el eje Y. De nuevo, con inicio y fin elegimos donde empieza y donde termina
    for (int y = inicio; y <= fin; y += 19) {
      // Dibuja una línea vertical desde (x, y) hasta (x, y + 19)
      line(x, y, x, y + 19);
    }
  }
}

void keyPressed() { //cambio de colores al azar en la pantalla 

  float r = randomColor();
  float g = randomColor();
  float b = randomColor();

  if (keyCode==LEFT) {
    background(r, g, b);
  }

  if (keyCode==RIGHT) { //vuelve a su estado inicial
    background(255);
  }
}

float randomColor() {

  return random(255);
}
