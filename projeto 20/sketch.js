var cat1, cat2
var mouse1, mouse2
var bgImg

function preload() {
  //carregue as imagens aqui

  bgImg = loadImage('garden.png')
  cat1 = loadImage('images/cat1.png')
  cat2 = loadImage('cat2.png, cat3.png, cat4.png')
  mouse1 = loadImage('images/mouse1.png')
  mouse2 = loadImage('mouse2.png, mouse3.png, mouse4.png,')
}

function setup() {
  createCanvas(1000, 800)
  //crie os sprites de gato e rato aqui

  bgImg.addImage('garden.png', garden)

  cat = createSprite(870, 600)
  cat.addAnimation('cat1.png', cat1)
  cat.scale = 0.2

  mouse = createSprite(400, 300)
  mouse.addAnimation('mouse1.png', mouse1)
  mouse.scale = 0.2
}

function draw() {
  background(255)
  //Escreva a condição aqui para avaliar se o gato e o rato colidem
  if (cat.x - mouse.x < (cat.width - mouse.width) / 2) {
    cat.velocityX = 0
    cat.addAnimation('cat3.png', cat3)
    cat.changeAnimation('cat4.png')
    cat.x = 300
    cat.scale = 0.2
  }
  drawSprites()
}

function keyPressed() {
  //Para mover e alterar a animação, escreva o código aqui

  if (keyCode === LEFT_ARROW) {
    mouse.addAnimation('mouse4.png', mouse2)
    mouse.changeAnimation('mouse4.png')
    mouse.frameDelay = 25

    cat.velocityX = -5
  }
}
