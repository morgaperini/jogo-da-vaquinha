//imagens do jogo
let estrada;
let carroUm;
let carroDois;
let carroTres;
let vaquinha;

// sons do jogo
let somColisao;
let somPontos;
let somTrilha;

function preload() {
  estrada = loadImage("estrada.png");
  carroUm = loadImage("carro-1.png");
  carroDois = loadImage("carro-2.png");
  carroTres = loadImage("carro-3.png");
  vaquinha = loadImage("ator-1.png");
  imagemCarros = [carroUm, carroDois, carroTres, carroUm, carroDois, carroTres];

  somTrilha = loadSound("sons/trilha.mp3");
  somPontos = loadSound("sons/pontos.wav");
  somColisao = loadSound("sons/colidiu.mp3");
}
