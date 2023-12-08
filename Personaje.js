class personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.colorpersonaje = color(255, 0, 0);
    this.vida  = 1;
   this.carga();
}

  carga(){
   this.personaje = loadImage("data/fondo6.png");
 }
  
  
  
  dibujar() {
   push();
    imageMode(CENTER);
    image(this.personaje, this.posX, this.posY, 50, 50);
    pop();
    
   
    rectMode(CENTER);
    fill(this.colorpersonaje);
    //rect(this.posX, this.posY, 20, 20);
   
  }

  teclaPresionada(keyCode) {
    if (keyCode == UP_ARROW) {
      this.moverArriba();
    } else if (keyCode == DOWN_ARROW) {
      this.moverAbajo();
    }
  }

  moverAbajo() {
    this.posY += 10;
    if (this.posY > height) {
      this.posY = height/2-25;
    } 
  }

  moverArriba() {
    this.posY -= 10;
    if (this.posY<height/2) {
      this.posY = height+25;
    }
  }
}
