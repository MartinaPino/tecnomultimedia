class Principal {
  constructor() {
    this.estado = "inicio";
    this.objJuego = new PrincipalJuego();
    this.fondo = [];
    this.fondoHistoria = [];
    this.carga();
  }
  dibujar() {
    if (this.estado == "inicio") {
      this.inicio();
    } else if (this.estado == "creditos") {
      this.creditos();
    } else if (this.estado == "pantalla1") {
      this.pantalla1();
    } else if (this.estado == "pantalla2") {
      this.pantalla2();
    } else if (this.estado == "pantalla3") {
      this.pantalla3();
    } else if (this.estado == "pantalla4") {
      this.pantalla4();
    } else if (this.estado == "prejuego") {
      this.prejuego();
    } else if (this.estado == "juego1") {
      this.juego1();
    } else if (this.estado == "juego2") {
      this.juego2();
    } else if (this.estado == "ganastejuego") {
      this.pantallaBuena();
    } else if (this.estado == "perdistejuego") {
      this.pantallaMala();
    } else if (this.estado == "pantalla5") {
      this.pantalla5();
    } else if (this.estado == "opcionA") {
      this.opcionA();
    } else if (this.estado == "fin2") {
      this.fin2();
    } else if (this.estado == "fin1") {
      this.fin1();
    }
  }

  inicio() {
    push();
    background(0);
    image(this.fondoHistoria[0], 0, 0, 500, 400);
    push();
    fill(129, 11, 5, 150);
    rect(140, 130, 220, 85);
    textAlign(CENTER);
    textSize(20);
    fill(255);
    text("El ruido de un trueno", 250, 160 );
    text("El ruido de un trueno", 250, 161 );
    text("Ray Bradbury", 250, 180 );
    text("Ray Bradbury", 250, 181 );
    pop();
    fill(129, 11, 5, 100);
    rect(290, 325, 170, 40);
    rect(40, 325, 125, 40);
    textAlign(CENTER);
    fill(255);
    text("derecha para los creditos", 370, 350 );
    text("derecha para los creditos", 370, 351 );
    text("enter para continuar", 100, 350 );
    text("enter para continuar", 100, 351 );
    pop();
  }
  creditos() {
    push();
    background(0);
    image(this.fondoHistoria[1], 0, 0, 500, 400);
    fill(129, 11, 5, 100);
    rect(155, 180, 200, 30);
    rect(170, 325, 170, 40);
    fill(255);
    textAlign(CENTER);
    text("Pino Martina y Pratto Priscila", 250, 200 );
    text("Pino Martina y Pratto Priscila", 250, 201);
    text("izquierda para volver", 250, 350 );
    text("izquierda para volver", 250, 351 );
    pop();
  }

  pantalla1() {
    push();
    background(0);
    image(this.fondoHistoria[2], 0, 0, 500, 400);
    fill(0, 147, 60, 150);
    rect(10, 150, 290, 80);
    rect(290, 325, 180, 40);
    textAlign(CENTER);
    textSize(13);
    fill(255);
    text("Eckels se une a una expedición que permite\n a los cazadores viajar al pasado\n y cazar dinosaurios ", 150, 180 );
    text("Eckels se une a una expedición que permite\n a los cazadores viajar al pasado\n y cazar dinosaurios ", 150, 181 );
    text("enter para continuar", 370, 350 );
    text("enter para continuar", 370, 351 );
    pop();
  }
  

  pantalla2() {
    push();
    background(0);
    image(this.fondoHistoria[3], 0, 0, 500, 400);
    fill(3, 88, 23, 150);
    rect(80, 150, 340, 100);
    rect(170, 325, 170, 40);
    textAlign(CENTER);
    fill(255);
    text("Antes de emprender en el viaje les advierten que deben seguir\n estrictamente el camino trazado para evitar alterar el tiempo", 250, 200 );
    text("Antes de emprender en el viaje les advierten que deben seguir\n estrictamente el camino trazado para evitar alterar el tiempo", 250, 201 );
    text("enter para continuar", 250, 350 );
    text("enter para continuar", 250, 351 );
    pop();
  }

  pantalla3() {
    push();
    background(0);
    image(this.fondoHistoria[4], 0, 0, 500, 400);
    fill(0, 147, 60, 150);
    rect(250, 25, 230, 50);
    rect(290, 335, 160, 40);
     rect(20, 335, 160, 40);
    textAlign(CENTER);
    fill(255);
    text("En el camino te encontras con una\n  mariposa prehistorica hermosa", 360, 50 );
    text("izquierda para \n seguir a la mariposa", 100, 350 );
    text("derecha para\n seguir con tu camino", 365, 350 );
    pop();
  }

  pantalla4() {
    push();
    background(0);
    image(this.fondoHistoria[5], 0, 0, 500, 400);
    fill(0, 147, 60, 150);
    rect(153, 180, 200, 30);
    rect(167, 325, 170, 40);
    textAlign(CENTER);
    fill(255);
    text("La mariposa te adentra al bosque", 250, 200 );
    text("enter para continuar", 250, 350 );
    pop();
  }
  prejuego() {
    push();
    background(0);
    image(this.fondoHistoria[10], 0, 0, 500, 400);
    fill(0, 0, 0, 150);
    rect(130, 150, 240, 50);
    rect(167, 325, 170, 40);
    textAlign(CENTER);
    fill(255);
    text("En el camino ves una erupción volcanica.\nTienes que llegar a la maquina del tiempo", 250, 170 );
    text("enter para continuar", 250, 350 );
    pop();
  }


  pantalla5() {
    push();
    background(0);
    image(this.fondoHistoria[6], 0, 0, 500, 400);
    fill(0, 0, 0, 150);
    rect(140, 75, 220, 50);
    rect(330, 330, 160, 45);
    rect(34, 330, 128, 45);
    textAlign(CENTER);
    fill(255);
    text("La mariposa se queda quieta,\n sientes el deseo de tocarla", 260, 100 );
    text("izquierda para\n tocar a la mariposa", 90, 350 );
    text("derecha para\n volver con tu camino", 390, 350 );
    pop();
  }
  opcionA() {
    push();
    background(0);
    image(this.fondoHistoria[7], 0, 0, 500, 400);
    fill(129, 11, 5, 100);
    rect(120, 180, 255, 30);
    rect(170, 325, 170, 40);
    textAlign(CENTER);
    fill(255);
    text("La mariposa se pone agresiva debes defederte", 250, 200 );
    text("enter para continuar", 260, 350 );
    pop();
  }

  fin2() {
    push();
    background(0);
    image(this.fondoHistoria[9], 0, 0, 500, 400);
    fill(0, 0, 0, 150);
    rect(130, 200, 230, 50);
    rect(165, 325, 170, 40);
    textAlign(CENTER);
    fill(255);
    text("Terminas de hacer tu mision",245, 230 );
    text("enter para volver al inicio", 245, 350 );
    pop();
  }

  fin1() {
    push();
    background(0);
    image(this.fondoHistoria[8], 0, 0, 500, 400);
    fill(0, 0, 0, 150);
    rect(130, 20, 230, 50);
    rect(167, 325, 170, 40);
    textAlign(CENTER);
    fill(255);
    text("Te das cuenta que alteraste todo\n el futuro matandola ", 240, 35 );
    text("enter para volver al inicio", 250, 350 );
    pop();
  }

  juego1() { // estado 1
    //push();
    background(0);
    image(this.fondo[4], 0, 0, 500, 400);
    push();
    textAlign(CENTER);
    textSize(20);
    fill(5, 5, 5);
    text("OBJETIVO", 250, 200);
    text("OBJETIVO", 250, 202);
    pop();
    push();
    fill(5, 5, 5);
    textAlign(CENTER);
    textSize(15);
    text("debemos esquivar las piedras volcanicas,CUIDADO!!!\n si una de estas nos toca perderemos. Debemos llegar a la\n nave en un periodo de 20 segundos ", 250, 220);
    text("debemos esquivar las piedras volcanicas,CUIDADO!!!\n si una de estas nos toca perderemos. Debemos llegar a la\n nave en un periodo de 20 segundos ", 250, 221);
    pop();
    //pop();
  }

  juego2() {
    push();
    image(this.fondo[0], 0, -100, 500, 530);
    this.objJuego.tocado();
    this.objJuego.timer++;
    if (this.objJuego.timer >= 60) {
      this.objJuego.timerSeg++;
      this.objJuego.timer = 0;
    }
    text("tiempo: "+this.objJuego.timerSeg, 25, 10);
    this.objJuego.personaje.dibujar();
    for (let i=0; i<5; i++) {
      this.objJuego.enemi[i].dibujarEnemigo();
    }
    this.objJuego.tocado();
    if (this.objJuego.tocaron == 1) {
      this.estado = "perdistejuego";
    }
    if (this.objJuego.timerSeg==20) {
      this.estado = "ganastejuego";
    }
    pop();
  }

  pantallaBuena() { // estado 3
    push();
    background(0);
    image(this.fondo[2], 0, 0, 500, 400);
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text("Llegaste a la maquina del tiempo", 250, 200);
    text("presione Enter", 250, 230);
    pop();
    this.objJuego.reinicio();
  }
  pantallaMala() { // estado 4
    push();
    background(0);
    image(this.fondo[4], 0, 0, 500, 400);
    fill(5, 5, 5);
    textAlign(CENTER);
    textSize(20);
    text("No llegaste a tiempo", 250, 200);
    text("presione Enter", 250, 230);
    pop();
    this.objJuego.reinicio();
  }


  teclaPresionada(keyCode) {
    this.objJuego.personaje.teclaPresionada(keyCode);

    if (keyCode == ENTER && this.estado == "inicio") {
      this.estado = "pantalla1";
    } else if (keyCode == RIGHT_ARROW && this.estado == "inicio") {
      this.estado = "creditos";
    } else if (keyCode == LEFT_ARROW && this.estado == "creditos") {
      this.estado = "inicio";
    } else if (keyCode == ENTER && this.estado == "pantalla1") {
      this.estado = "pantalla2";
    } else if (keyCode == ENTER && this.estado == "pantalla2") {
      this.estado = "pantalla3";
    } else if (keyCode == LEFT_ARROW && this.estado == "pantalla3") {
      this.estado = "pantalla4";
    } else if (keyCode == RIGHT_ARROW && this.estado == "pantalla3") {
      this.estado = "prejuego";
    } else if (keyCode == ENTER && this.estado == "pantalla4") {
      this.estado = "pantalla5";
    } else if (keyCode == LEFT_ARROW && this.estado == "pantalla5") {
      this.estado = "opcionA";
    } else if (keyCode == RIGHT_ARROW && this.estado == "pantalla5") {
      this.estado = "fin2";
    } else if (keyCode == ENTER && this.estado == "fin2") {
      this.estado = "inicio";
    } else if (keyCode == ENTER && this.estado == "opcionA") {
      this.estado = "fin1";
    } else if (keyCode == ENTER && this.estado == "fin1") {
      this.estado = "inicio";
    } else if (keyCode == ENTER && this.estado == "prejuego") {
      this.estado = "juego1"
    } else if (keyCode == ENTER && this.estado == "juego1") {
      this.estado = "juego2";
    } else if (keyCode == ENTER && this.estado == "ganastejuego") {
      this.estado = "inicio";
    } else if (keyCode == ENTER && this.estado == "perdistejuego") {
      this.estado = "inicio";
    }
  }

  carga() {
    for (let i=0; i<5; i++) {
      this.fondo.push(loadImage('data/fondo' +i+ '.png'));
    }
    for (let i=0; i<11; i++) {
      this.fondoHistoria.push(loadImage('data/fondoHistoria' +i+ '.jpeg'));
    }
  }
}
