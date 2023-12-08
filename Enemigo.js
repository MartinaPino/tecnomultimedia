class enemigo {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.colorenemigo = color(0, 255, 0);
    this.vel = random(0.5, 1.5);
    this.vida = true;
    this.carga();
}

  carga(){
   this.enemigo = loadImage("data/fondo5.png");
 }
  
  
  
  
  dibujarEnemigo() {
    push();
    imageMode(CENTER);
    image(this.enemigo, this.posX, this.posY, 30, 50);
    pop(); 
    if (this.vida) {
      rectMode(CENTER);
      fill(this.colorenemigo);
      //rect(this.posX, this.posY, 30, 30);
      this.mover();
    }
  }

  mover() {
    this.posX -= this.vel;
    if (this.posX < 0) {
      this.posX = 530;
    }
  }
}
