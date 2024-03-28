class Obj{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }
    des_obj(){

    }
    des_img(){
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
    atual_boneco2(){
        
    }
    recomeca(){
    }
}
class Estrada extends Obj{
    des_estrada(){

    }

    mov_est(){
       
    }
}
class Text{
    des_text(text,x,y,cor,font){
        
    }
}
class Comida extends Obj{
    des_comida(){
        
    }
    atual_comida(){
        
    }
    comidaRecomeca(){
       
    }
}