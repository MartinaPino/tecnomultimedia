//Pino Martina
//tp3 comision1
// https://youtu.be/6n8wfGjfmTE

int estados;
PImage [] imagenes = new PImage [12];

String [] textos = new String [12];

void setup() {
  size(600, 600);
  rectMode(CENTER); //centro rectangulos de fondo al texto
  
  textAlign(CENTER); //lo mismo pero con el texto


  for (int i = 0; i < imagenes.length; i++) {
    imagenes[i] = loadImage("imagen" + (i + 1) + ".jpg");
  }
  
textos[0] = "Todo el Verano\n en un Dia"; //inicio 0
textos[1] ="En el planeta de Venus ha estado\n lloviendo durante siete años"; //1
textos[2] ="Los niños estan ansiosos por ver\n el Sol luego de años de espera"; //2 
textos[3] ="Ellos envidiaban a Margot por haber\n estado en la Tierra mas tiempo"; //3 letra mas chica
textos[4] ="El dia que se anunciaba la salida del Sol ellos..."; //4 me lleva a la 7 o 5
textos[5] ="Tras ridiculizarla y luego salen\n a disfrutar del tan esperado calido dia"; //5
textos[6] ="al salir al exterior..."; //6
textos[7] ="Incluyen a Margot, preguntandole\n sus experiencias con el Sol";//7 letra mas chica
textos[8] ="Y aprovechan al maximo las dos\n horas de Sol que iban a haber";//8
textos[9] ="Los chicos caen desplomados al\n suelo tras el impacto que el Sol les generó";//9
textos[10] ="Sin tener en cuenta que Margot seguia alli,\n avergonzados le abrieron la puerta,\n ellla no emitió palabra";//10
textos[11] ="Estudiante: Martina Pino\n Autor: Ray Bradbury";//11

}

void draw() {


 /* println("X:");
  println(mouseX);
  println("Y:");
  println(mouseY);*/
  println(estados);



  if (estados==0) { //pantallas
    image(imagenes[0], 0, 0, 600, 600);
    botón(450, 450, 125, 75, 5); //con el ultimo 5 le doy forma redondeada
    fill (0, 75);
    noStroke();
    rect (300, 100, 270, 130, 10);
    textSize (40);
    fill(255);
    text(textos[0],300,100,270,130);
    
  } else if (estados==1) {
    image(imagenes[1], 0, 0, 600, 600);
    botón(450, 450, 125, 75, 5); //botonrectangular para continuar (arreglar medidas)
     fill (0, 75);
    noStroke();
    rect (260, 100, 580, 130, 10);//fondo texto
    textSize (40);
     fill(255);
    text(textos[1],273, 100, 580, 130);
 
} else if (estados==2) {
    image(imagenes[2], 0, 0, 600, 600);
    botón(450, 450, 125, 75, 5);
     fill (0, 75);
    noStroke();
    rect (260, 100, 580, 130, 10);
   textSize (40);
    fill(255);
    text(textos[2],273, 100, 580, 130);
    
} else if (estados ==3) {
    image(imagenes[3], 0, 0, 600, 600);
    botón(450, 450, 125, 75, 5);
    fill (0, 75);
    noStroke();
   rect (260, 100, 580, 130, 10);
    textSize (35);
     fill(255);
    text(textos[3],273, 100, 580, 130);
  
} else if (estados==4) {
    image(imagenes[4], 0, 0, 600, 600);
    opción(150, 450, 125, 75, 5); //opcion1
    opción(450, 450, 125, 75, 5);// opcion2
     fill (0, 75);
    noStroke();
    rect (260, 100, 580, 130, 10); 
    fill (0);
    textSize (20);
    text (" dejan de lado\n sus celos ", 150, 448); //opcion izq
    text (" la encierran en\n un armario ", 450, 448);//opcion der
    textSize (40);
     fill(255);
    text(textos[4],273, 100, 580, 130);
 
} else if (estados==5) {
    image(imagenes[5], 0, 0, 600, 600);
    botón(450, 450, 125, 75, 5);
     fill (0, 75);
    noStroke();
    rect (260, 100, 580, 130, 10);
        textSize (35);
         fill(255);
    text(textos[5],273, 100, 580, 130);
  
} else if (estados==6) {
    image(imagenes[6], 0, 0, 600, 600);
    opción(150, 450, 125, 75, 5);
    opción (450, 450, 125, 75, 5);
    fill (0, 75);
    noStroke();
    rect (260, 100, 580, 130, 10);
     fill (0);
    textSize (17);
    text (" disfrutan de\n el Sol ", 150, 448);//izq
    text (" se queman\n hasta calcinarse ", 450, 448);//der
        textSize (40);
         fill(255);
    text(textos[6],273, 100, 580, 130);
 
} else if (estados==7) {
    image(imagenes[7], 0, 0, 600, 600);
    botón(450, 450, 125, 75, 5);
     fill (0, 75);
    noStroke();
    rect (260, 100, 580, 130, 10);
        textSize (30);
         fill(255);
    text(textos[7],273, 100, 580, 130);
  
} else if (estados==8) {
    image(imagenes[8], 0, 0, 600, 600);
    botón(450, 450, 125, 75, 5);
     fill (0, 75);
    noStroke();
   rect (260, 100, 580, 130, 10);
       textSize (40);
        fill(255);
    text(textos[8],273, 100, 580, 130);
  
} else if (estados==9) {
    image(imagenes[9], 0, 0, 600, 600);
    botón(450, 450, 125, 75, 5);
    fill (0, 75);
    noStroke();
    rect (260, 100, 580, 130, 10);
        textSize (40);
         fill(255);
    text(textos[9],273, 100, 580, 130);
  
} else if (estados==10) {
    image(imagenes[10], 0, 0, 600, 600);
    botón(450, 450, 125, 75, 5);
    fill(0, 75);
   rect (260, 100, 580, 130, 10);
       textSize (30);
        fill(255);
    text(textos[10],273, 100, 580, 130);
  
} else if (estados==11) {
    image(imagenes[11], 0, 0, 600, 600);
    botón(450, 450, 125, 75, 5);
     fill (0, 75);
    noStroke();
  rect (300, 90, 369, 130, 10);
       textSize (30);
        fill(255);
    text(textos[11],273, 100, 580, 130);
   
  }
}

void mousePressed() { //funcionamiento de botón
  if (estados==0 && mouseBotón(387, 511, 414, 490)) { // OPCION A
    estados=1;
  } else if (estados==1 && mouseBotón(387, 510, 415, 490)) {// OPCION B
    estados=2;
  } else if (estados==2 && mouseBotón(387, 510, 415, 490)) {
    estados=3;
  } else if (estados==3 && mouseBotón(387, 510, 415, 490)) {// OPCION B
    estados=4;
  } else if (estados==4 && mouseBotón (87, 212, 415, 490)) { 
    estados=7;
  } else if (estados==4 && mouseBotón(387, 510, 415, 490)) { 
    estados=5;
  } else if (estados==5 && mouseBotón(387, 510, 415, 490)) { 
    estados=6;
  } else if (estados==7 && mouseBotón(387, 510, 415, 490)) { 
    estados=0;
  } else if (estados==6 && mouseBotón(387, 510, 415, 490)) { //2
    estados=9;
  } else if (estados==6 && mouseBotón(87, 212, 415, 490)) { //1
    estados=8;
  } else if (estados==8 && mouseBotón(387, 510, 415, 490)) {
    estados=10;
  } else if (estados==10 && mouseBotón(387, 510, 415, 490)) {
    estados=11;
  } else if (estados==11 && mouseBotón(387, 510, 415, 490)) {
    estados=0;
  } else if (estados==9 && mouseBotón(387, 510, 415, 490)) {
    estados=0;
  }
  
  
} //termina el void mousepressed


boolean mouseBotón ( int x1, int x2, int y1, int y2) {// boton nuevo
  return(mouseX>x1 && mouseX< x2 && mouseY> y1 && mouseY<y2);
}




void botón (int i, int j, int k, int l, int m) { //funcion propia que no retorna un valor
  stroke(100);
  fill(255,0,0);
  rect(i, j, k, l, m);
}

void opción (int i, int j, int k, int l, int m) {
  stroke(100);
  fill(255,0,0);
  rect(i, j, k, l, m);
}
