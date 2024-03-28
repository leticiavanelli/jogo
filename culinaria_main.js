let des = document.getElementById().getContext()
let botaoVoltar = document.getElementById()
let jogar = true

document.addEventListener('keydown', (e)=>{
    console.log(e.key)
    fundo.play()
    if(e.key === 'a' || e.key === 'ArrowLeft'){
        personagem.dirX -= 10
    }
    else if(e.key === 'd' || e.key === 'ArrowRight'){
        personagem.dirX += 10
    }
    else if(e.key === 'w' || e.key === 'ArrowUp'){
        personagem.dirY -= 10
    }
    else if(e.key === 's' || e.key === 'ArrowDown'){
        personagem.dirY += 10
    }
})
document.addEventListener('keyup', (e)=>{
    console.log(e.key)
    if(e.key === 'a'  || e.key === 'ArrowLeft'){
        personagem.dirX = 0
    }
    else if(e.key === 'd' || e.key === 'ArrowRight'){
        personagem.dirX = 0
    }
    else if(e.key === 'w' || e.key === 'ArrowUp'){
        personagem.dirY = 0
    }
    else if(e.key === 's' || e.key === 'ArrowDown'){
        personagem.dirY = 0
    }
})
function game_over(){
    if(personagem.vida <=0){
        jogar = false
        mastigando.pause()
        fundo.pause()
        botaoVoltar.style.display = 'flex'
        // música com o jogo parado
    }
}
function pontos(){
    if(personagem.point(macaPodre)){
        personagem.pts += 0
    }else if(personagem.point(bananaEstragada)){
        personagem.pts += 0
    }
}
function colisao(){
    if(personagem.colid(macaPodre)){
        personagem.vida -= 1
        macaPodre.recomeca()
        mastigando.play()
    }else if(personagem.colid(bananaEstragada)){
        personagem.vida -= 1
        bananaEstragada.recomeca()
        mastigando.play()
    }else if(personagem.colid(sushi)){
        personagem.pts += 1
        sushi.recomeca()
        mastigando.play()
    }if(personagem.colid(comida1)){
        console.log('comeu')
        personagem.pts += 1
        mastigando.play()
        comida1.comidaRecomeca()
    }
    else if(personagem.colid(comida2)){
        console.log('comeu')
        personagem.pts += 1
        comida2.comidaRecomeca()
        mastigando.play()
    }
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