var cat1, cat2, cat3
var mouse1, mouse2, mouse3
var bgImg

function preload() {
  //carregue as imagens aqui

  bgImg = loadAnimation('garden.png')
  cat1 = loadAnimation('images/cat1.png')
  cat2 = loadAnimation('images/cat2.png', 'images/cat3.png')
  cat3 = loadAnimation('images/cat4.png')
  mouse1 = loadAnimation('images/mouse1.png')
  mouse2 = loadAnimation('images/mouse2.png', 'images/mouse3.png')
  mouse3 = loadAnimation('images/mouse4.png')
}

function setup() {
  var canvas = createCanvas(1000, 800)
  //crie os sprites de gato e rato aqui

  bgImg.addImage('garden.png', garden)

  cat = createSprite(870, 600)
  cat.addAnimation('imagemGato', cat1)
  cat.scale = 0.2

  mouse = createSprite(400, 300)
  mouse.addAnimation('imagemRato', mouse1)
  mouse.scale = 0.2
}

function draw() {
  background(255)
  //Escreva a condição aqui para avaliar se o gato e o rato colidem
  if (cat.x - mouse.x < (cat.width - mouse.width) / 2) {
    cat.velocityX = 0
    cat.addAnimation('cat3.png', cat3)
    cat.changeAnimation('cat4.png', cat3)
    cat.x = 300
    cat.scale = 0.2

    mouse.addAnimation("imagemRato", mouse4)
    mouse.changeAnimation("imagemRato", mouse4)
  }
  drawSprites()
}

function keyPressed() {
  //Para mover e alterar a animação, escreva o código aqui

  if (keyCode === LEFT_ARROW) {
    mouse.addAnimation('imagemRato', mouse2)
    mouse.changeAnimation('imagemRato', mouse2)
    mouse.frameDelay = 25

    cat.velocityX = -5
    cat.addAnimation('imagemGato', cat2)
    cat.changeAnimation('imagemGato', cat2)
  }
}
