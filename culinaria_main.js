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
    window.history.back()
}
function desenha(){
    t1.des_text('Pontos: ',360,24,'black','28px Times')
    t2.des_text(personagem.pts,460,24,'black','28px Times')
    t3.des_text('Vida: ',40,24,'black','28px Times')
    t4.des_text(personagem.vida,100,24,'black','28px Times')

    if(jogar){
        macaPodre.des_img()
        bananaEstragada.des_img()
        sushi.des_img()
        personagem.des_img()
        comida1.des_comida()
        comida2.des_comida()
    }else{
        
        t5.des_text('Game Over ',150,350,'rgba(14, 13, 13, 0.904)','40px Georgia', 'font-weight: bolder')
    }  
}
function atualiza(){
    if(jogar){//atualiza
        macaPodre.atual_boneco2()
        bananaEstragada.atual_boneco2()
        sushi.atual_boneco2()
        personagem.atual_boneco()
        comida1.atual_comida()
        comida2.atual_comida()
        personagem.anim('assutado_')
        pontos()
        colisao()
        game_over()
    }
}
function main(){
    des.clearRect(0,0,500,700)
    desenha()
    atualiza()
}
setInterval(main,10)