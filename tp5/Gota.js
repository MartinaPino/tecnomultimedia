class Gota{
  
 constructor(){
   this.ancho = 40;
   this.alto = 40;
   this.posX = random(0, width - this.ancho/2);
   this.posY = random(-100, -10);
   this.miColor = color(0, 255, 0);
   this.velocidad = random(3, 4);
   this.imagenGota = loadImage("data/gota3.png");
 }
 
  dibujar(){
    image(this.imagenGota,this.posX,this.posY,this.ancho,this.alto)

    this.posY += this.velocidad;
 }
}
