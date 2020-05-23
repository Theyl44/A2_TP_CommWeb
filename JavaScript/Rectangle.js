function Rectangle(w,h){
    this.w = w ;
    this.h = h;
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.getWidth = function(){
    return this.w;
}
Rectangle.prototype.getH = function(){
    return this.h;
}
Rectangle.prototype.draw = function(ctx){
    console.log("dessin de rectangle");
    ctx.beginPath();
    ctx.rect(this.getCenter().getX(),this.getCenter().getY(), this.w, this.h);
    ctx.stroke();
}