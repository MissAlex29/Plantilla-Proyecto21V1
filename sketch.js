var bg,sleep, brush, gym, eat, bath, move;
var astronauta;

function preload(){
  //Cargar imágenes y animaciones 
  bg= loadImage("images/iss.png");
  
 
}

function setup() {
  createCanvas(400, 400);
  
  //Sprite astronauta
  astronauta = createSprite(300,230);
  
}

function draw() {
  //fondo de pantalla para la rutina del astronauta
  background(bg);

  textSize(30);
  fill(255);
  text("Instrucciones:",10,100);
  
  //texto para mostrar instrucciones sobre cómo ejecutar el juego
  textSize(17);
  fill(255);
  text("Flecha hacía arriba: cepillarse",10,130);
 
  // rebota del astronauta en los bordes
  edges= createEdgeSprites();
  astronauta.bounceOff(edges);
  
  //código para hacer que el astronauta se cepille
  if (keyDown(UP_ARROW)){
    astronauta.addAnimation(brush);
    astronauta.changeAnimation(brush);
    astronauta.y = 350;
    astronauta.velocityX = 0;
    astronauta.velocityY = 0;
  }
  
  drawSprites();
}