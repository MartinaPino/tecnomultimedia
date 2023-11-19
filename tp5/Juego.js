class Juego{
  
 constructor(){
  this.crearGotas();
  this.crearPersonaje();
  this.estaEnJuego = false;
  this.gotasAtrapadas = 0;
  this.gotasPerdidas = 0;
  }

 dibujar(){
   this.personaje.dibujar();
   
   this.gotas[0].dibujar();
   
   if(this.gotas[0].posY > height){
     this.crearGotas();
     this.gotas[0].dibujar();
     this.gotasPerdidas++;
   }
   
   if(this.fueAtrapado()){
     this.crearGotas();
     this.gotas[0].dibujar();
     this.gotasAtrapadas++;
   }
  
    this.mostrarTexto();
    
    this.chequearValores();
  
 }
 
 mostrarTexto(){
  fill(255);
  //contadores.
  text("Atrapadas " + this.gotasAtrapadas, 50, 50);
  text("Perdidas " + this.gotasPerdidas, 400, 50);
 }
 
 crearGotas(){
   this.gotas = [];
   this.gotas[0] = new Gota();
 }
 
 crearPersonaje(){
   this.personaje = new Personaje(80,60);
 }
 
 moverPersonaje(keyCode){
    this.personaje.mover(keyCode);
 }
 
 fueAtrapado() {

 // console.log("posicionXBarco",posicionXBarco);
  //console.log("posicionXSoldado",posicionXSoldado);
  if (this.personaje.posX > this.gotas[0].posX - this.gotas[0].ancho && this.personaje.posX < this.gotas[0].posX + this.gotas[0].ancho  && this.personaje.posY > this.gotas[0].posY && this.personaje.posY < this.gotas[0].posY + this.gotas[0].alto) {
    return true;
  } else {
    return false;
  }
}


  chequearValores(){
    
    if (this.gotasAtrapadas >= 5 ) {
      this.estaEnJuego = false;
    }

    if (this.gotasPerdidas >= 3 && this.gotasAtrapadas < 5) {
      this.estaEnJuego = false;
    }
    
  }
  
  mostrarPantallaFinal(){
    
    textSize(19);
   
    fill(255);
    
    text("Instrucciones:\n\La niña tiene que atrapar las gotas de lluvia\npara que vuelva a salir el sol \nmoviendose de derecha a izquierda", 150, 182);
    noStroke();
   

    textSize(25);
    
    if(this.gotasAtrapadas == 0 && this.gotasPerdidas == 0){
     
      fill(255);
       text("TODO EL VERANO EN UN DIA", 150, 70);
      fill(45, 173, 50);
      text("Comenzar", 240, 120);
      this.botonJugar(250, 290, 110, 40, 5);
      
    }else{
      
       fill (0, 75);
       rect (100, 70, 450, 280, 10);
      
       if (this.gotasAtrapadas >= 5 ) {
        fill(45, 173, 50);
        text("¡Ganaste!", 250, 120);
        this.botonReiniciar(250, 290, 110, 40, 5);
       }
  
      if (this.gotasPerdidas >= 3 && this.gotasAtrapadas < 5) {
        fill(255, 0, 0);
        text("Perdiste...", 250, 120);
        this.botonReiniciar(250, 290, 110, 40, 5);
      }
      
       
    
    }
    
    
  }
  
  
 botonReiniciar ( i, j, k, l, m) {
  stroke(100);
  fill(191, 169, 98);
  rect(i, j, k, l, m);
  noStroke();
  fill(255);
  textSize(20);
  text("Reiniciar", 265, 317);
 }

 botonJugar ( i, j, k, l, m) {
  stroke(100);
  fill(191, 169, 98);
  rect(i, j, k, l, m);
  noStroke();
  fill(255);
  textSize(20);
  text("Jugar", 265, 317);
 }

mouseBoton (x1, x2, y1, y2) {
  return(mouseX>x1 && mouseX< x2 && mouseY> y1 && mouseY<y2);
}
 
 
 reiniciarPuntaje(){
    this.gotasAtrapadas = 0;
    this.gotasPerdidas = 0;
 }
 
 //puede estar gano y perdio tambien
}
