//Pino Giles Martina
//tp0 comision 1

PImage paisaje;
paisaje = loadImage("paisaje.jpg");
image(paisaje, 0, 0, 400, 400);
size(800, 400);
background(127, 162, 220);
image(paisaje, 0, 0, 400, 400);
noStroke();

//agua
fill(100, 167, 215);//abajo de todo
rect(400, 300, 800, 200);
fill(100, 167, 200);//agua mas oscura
quad(400, 300, 400, 240, 713, 240, 1110, 300);
//montañas
fill(155);
triangle(410, 240, 500, 80, 600, 240);//triangulo medio izquierdo//poner color mas oscuro
triangle(560, 240, 650, 60, 740, 240);//mas oscuro
fill(165);
triangle(440, 240, 540, 45, 650, 240);//el que le sigue
triangle(570, 240, 726, 50, 870, 256);//derecha
fill(164);
quad(400, 240, 400, 15, 450, 48, 550, 240);//montaña izquierda
triangle(460, 240, 590, 77, 720, 240);//del medio
//invertidos
fill(127, 162, 185);
quad(400, 240, 400, 410, 450, 377, 550, 240);
triangle(440, 240, 540, 360, 650, 250);
triangle(470, 240, 600, 326, 720, 247);
triangle(570, 240, 726, 360, 870, 259);
//pinos adelante
fill(12, 88, 4);
triangle(770, 250, 790, 70, 810, 253);//sombra
triangle(700, 247, 727, 55, 732, 249);//sombra
triangle(745, 250, 765, 60, 800, 253);//distinto tono pero no de sombra
fill(97, 142, 93);
triangle(765, 250, 780, 45, 800, 253);
fill(80, 139, 73);
triangle(730, 249, 750, 60, 770, 250);//distinto pero no de sombra
fill(80, 139, 73);
triangle(680, 246, 690, 110, 714, 247);//oscuro
triangle(670, 246, 680, 120, 690, 247);//oscuro
fill(108, 162, 85);
triangle(710, 247, 737, 55, 754, 251);//mas clarito
triangle(690, 246, 714, 40, 725, 249);//clarito
//pinos fondo
fill(108, 162, 85);
triangle(632, 243, 639, 202, 645, 244);
triangle(610, 242, 619, 194, 627, 243);
triangle(647, 244, 652, 203, 658, 244);
triangle(585, 240, 595, 205, 600, 241);
triangle(595, 241, 600, 203, 605, 241);
fill(126, 167, 66);//pinos chicos de izq a der
triangle(655, 244, 660, 204, 665, 245);//claritos
triangle(638, 243, 647, 200, 650, 244);
triangle(624, 242, 634, 196, 639, 243);
triangle(616, 242, 626, 195, 634, 243);
triangle(606, 242, 611, 195, 619, 242);
triangle(600, 241, 605, 200, 610, 242);
triangle(580, 240, 587, 208, 590, 240);
fill(58, 82, 22);
triangle(660, 245, 670, 168, 680, 247);//practicamente negro
fill(44, 88, 39);//toda la parte izquierda
triangle(575, 240, 580, 210, 583, 240);
triangle(555, 240, 560, 212, 565, 240);
triangle(540, 240, 545, 212, 550, 240);
triangle(490, 240, 502, 190, 509, 240);
triangle(430, 240, 436, 178, 445, 240);
triangle(400, 240, 400, 163, 418, 240);
triangle(475, 240, 480, 194, 485, 240);
triangle(412, 240, 423, 170, 430, 240);
fill(12, 88, 4);
triangle(525, 240, 530, 201, 535, 240);
triangle(455, 240, 462, 181, 470, 240);
triangle(570, 240, 575, 202, 580, 240);
fill(54, 103, 48);
triangle(565, 240, 570, 211, 575, 240);
triangle(560, 240, 565, 198, 570, 240);
triangle(550, 240, 555, 202, 560, 240);
triangle(545, 240, 550, 207, 555, 240);
triangle(535, 240, 540, 205, 545, 240);
triangle(530, 240, 535, 196, 540, 240);
triangle(520, 240, 525, 199, 530, 240);
triangle(515, 240, 520, 195, 525, 240);
triangle(508, 240, 515, 199, 520, 240);
triangle(500, 240, 507, 195, 515, 240);
triangle(485, 240, 493, 197, 500, 240);
triangle(480, 240, 485, 195, 493, 240);
triangle(467, 240, 475, 188, 480, 240);
triangle(460, 240, 470, 190, 475, 240);
triangle(450, 240, 456, 190, 462, 240);
triangle(445, 240, 450, 185, 456, 240);
triangle(440, 240, 445, 183, 450, 240);
triangle(423, 240, 430, 175, 436, 240);
triangle(400, 240, 414, 167, 425, 240);
fill(159, 173, 159);
triangle(400, 240, 400, 320, 583, 240);
triangle(661, 245, 790, 450, 823, 253);
fill(162, 175, 147);
triangle(580, 240, 621, 280, 660, 245);
fill(142, 117, 93);//marron
ellipse(810, 285, 200, 55);//fogata
stroke(142, 117, 93);
strokeWeight(8);
strokeCap(PROJECT);
line(669, 245, 720, 248);
line(733, 249, 790, 251);
stroke(124, 98, 74);//marron oscuro
line(733, 277, 790, 267);
line(733, 292, 790, 303);
stroke(150);//gris piedra
ellipse(778, 285, 10, 5);
ellipse(792, 280, 10, 5);
ellipse(792, 290, 10, 5);
