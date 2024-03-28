let des = document.getElementById().getContext()
let botaoVoltar = document.getElementById()


// let personagem = new personagem(225,600,50,80,'darkblue')
let personagem = new boneco(225,580,70,70,'./assets/img/assutado.png')
let comida1 = new Comida(25,150,50,50, './assets/img/hamburguer.png')
let comida2 = new Comida(225,50,50,50, './assets/img/maca.png')
let macaPodre = new boneco2(400,-50,50,50,'./assets/img/macapodre.png')//inimigo
let bananaEstragada = new boneco2(500,-290,50,50,'./assets/img/bananaestragada.png')//inimigo
let sushi = new boneco2(330,-100,50,50, './assets/img/sushi.png')
let t1 = new Text()
let t2 = new Text()
let t3 = new Text()
let t4 = new Text()
let t5 = new Text()


let fundo = new Audio('./assets/fundo.wav')
let mastigando = new Audio('./assets/mastigando.mp3')
fundo.volume = 0.5
fundo.loop = true
mastigando.volume = 0.9

let jogar = true

document.addEventListener('keydown', (e)=>{
    
})
document.addEventListener('keyup', (e)=>{

})
function game_over(){
    
}
function pontos(){
}
function colisao(){
    
}
function voltar(){
    
}
function desenha(){
    
}
function atualiza(){

}
function main(){
    des.clearRect(0,0,500,700)
    desenha()
    atualiza()
}
setInterval(main,10)