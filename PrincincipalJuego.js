class PrincipalJuego {
  constructor() {
      
      this.timer = 0;
    this.timerSeg = 0;
    this.enem = new enemigo(400, 400);
    this.personaje = new personaje(20, 300);

    this.enemi = [];
     for (let i=0; i<7; i++) {
      this.enemi[i] = new enemigo(535, 215+i*40);
    }
    
    this.tocaron = 0;
     this.terminoJuego = false;
  }
  


  colision(ex, ey, eal, ean, px, py, pan, pal) {
    return px > ex-ean/2 && py-pal/2>ey-eal && py+pal/2<ey+eal;
  }

  tocado() {
    for (let i=0; i<5; i++) {
      if (this.colision(this.enemi[i].posX, this.enemi[i].posY, 30, 30, this.personaje.posX, this.personaje.posY, 20, 20)&& this.enemi[i].vida) {
        this.enemi[i].posX=width+30;
        this.tocaron = 1;
      }
    }
  }

  reinicio() {
    this.timer = 0;
    this.timerSeg = 0;
    this.enem = new enemigo(400, 400);
    this.personaje = new personaje(20, 300);
    for (let i=0; i<5; i++) {
      this.enemi[i] = new enemigo(535, 215+i*40);
    }
    this.tocaron = 0;
  }

  

}
