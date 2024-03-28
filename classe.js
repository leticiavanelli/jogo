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
    }
    
    atual_boneco(){

    }
    point(){

    }
    colid(){

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