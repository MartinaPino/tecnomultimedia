class Personaje{
 constructor(ancho,alto){
   this.ancho = ancho;
   this.alto = alto;
   this.posX = width/2;
   this.posY = height - this.alto;
   this.miColor = color(255, 0, 0);
   this.imagenPersonaje = loadImage("data/personaje.png");
 }

 dibujar(){
    image(this.imagenPersonaje,this.posX,this.posY,this.ancho,this.alto)
 }
 
 
 mover(keyCode){
   
    if (keyCode=== RIGHT_ARROW && this.posX<width - this.ancho) {
      this.posX+=23;
    }
    if (keyCode=== LEFT_ARROW && this.posX > 0) {
      this.posX-=23;
    }
   
 }
 
}
