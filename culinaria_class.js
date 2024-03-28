class Obj{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }
    des_obj(){
        des.fillStyle = this.a
        des.fillRect(this.x,this.y,this.w,this.h,this.a)
    }

    des_img(){//imagens
        let img = new Image()
        img.src = this.a
        des.drawImage(img,this.x, this.y, this.w, this.h)
    }
}
class boneco extends Obj{
    dirX = 0
    dirY = 0
    pts = 0
    vida = 0
    frame = 0
    tempo = 0

    anim(nome){
        this.tempo +=1
        if(this.tempo > 12){
            this.tempo = 0
            this.frame += 1
        }
        if(this.frame>4){
            this.frame = 1
        }
        this.a = "assets/img/"+nome+this.frame+".png"
    }
    
    atual_boneco(){
        //atualiza boneco
        this.x += this.dirX
        this.y += this.dirY

        // console.log(this.x + ' | ' + this.dirX)
        // console.log(this.y + ' | ' + this.dirY)

        if(this.x <=2){
            this.x = 2
        }if(this.x >= 416){
            this.x = 416
        }if(this.y >= 600){
            this.y = 600
        }if(this.y <=300){
            this.y = 300  
    }
    }
    point(){
        //pontos
        if((objeto.y>=400)&&(objeto.y <= 500)){
            return true
        }else{
            false
        }
    }
    colid(){
        //colisão
        if((this.x < objeto.x + objeto.w)&&
          (this.x + this.w > objeto.x)&&
          (this.y < objeto.y + objeto.h)&&
          (this.y + this.h > objeto.y)){
                return true
            }else{
                false
            }
    }
}
class boneco2 extends boneco{
    vel = 3
    atual_boneco2(){
        this.y += this.vel
        if(this.y >= 780){
            this.recomeca()
        }
        if(personagem.pts >= 10){
            console.log('era pra ir mais rapido')
            this.vel = 3.5
            
            this.y += this.vel
        }
        if(personagem.pts >= 20){
            this.vel = 4
            this.y += this.vel
        }
        if(personagem.pts >= 30){
            this.vel = 4.5
            this.y += this.vel
        }
    }
    recomeca(){
        this.y = -100
        this.x = Math.floor(Math.random() * ((416 - 2 + 1) + 2)) // quando o alimento sair da tela
    }
}
class Campo extends Obj{
    des_campo(){
        des.fillStyle = this.a
        des.fillRect(this.x,this.y,this.w,this.h)
    }

    mov_campo(){
        this.y += 4
        if(this.y >= 780){
            this.y = -100
        }
    }
}
class Text{
    des_text(text,x,y,cor,font){
        
    }
}
class Comida extends Obj{
    des_comida(){
            let img = new Image()
            img.src = this.a
            des.drawImage(img,this.x, this.y, this.w, this.h)
        }
    atual_comida(){
        this.y += 3
        if(this.y >= 780){
            this.y = -100
            this.x = Math.floor(Math.random() * ((416 - 2 + 1) + 2)) 
        }
        if(personagem.pts >= 10){
            console.log('era pra ir mais rapido')
            this.vel = 3.5
            
            this.y += this.vel
        }
        if(personagem.pts >= 20){
            this.vel = 4
            this.y += this.vel
        }
        if(personagem.pts >= 30){
            this.vel = 4.5
            this.y += this.vel
        }
    }
    comidaRecomeca(){
        this.y = -100
        this.x = Math.floor(Math.random() * ((416 - 2 + 1) + 2)) 
    }
}