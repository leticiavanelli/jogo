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