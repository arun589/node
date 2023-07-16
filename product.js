const product=[];
module.exports=class products{
    constructor(t){
        this.title=t;
    }
    save(){
        product.push(this.title);
    }
    static fetchAll(){
        return product;
    }
}