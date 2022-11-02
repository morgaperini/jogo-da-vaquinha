//variaveis do Ator
let yAtor = 368;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(vaquinha, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yAtor += 3;
    }
  }
}

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao) {
      voltaAtorPosicaoInicial();
      somColisao.play();
      if (meusPontos > 0) {
        meusPontos -= 1;
      }
    }
  }
}
function voltaAtorPosicaoInicial() {
  yAtor = 368;
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 40));
  text(meusPontos, width / 5, 25);
}

function marcaPonto() {
  if (yAtor < 15) {
    meusPontos++;
    somPontos.play();
    voltaAtorPosicaoInicial();
  }
}

function podeSeMover() {
  return yAtor < 368;
}