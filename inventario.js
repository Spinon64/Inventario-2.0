class Producto {

    constructor(nombre, codigo, cantidad, costo) {

        this.nombre = nombre;
        this.costo = costo;
        this.codigo = codigo;
        this.cantidad = cantidad;

    }

    info(){
        return `Nombre = ${this.nombre}, codigo = ${this.codigo}, cantidad = ${this.cantidad}, costo = ${this.costo}`;
    }
    
}





class Inventario{
    constructor(){
        this.lista = new Array();
    }

//Codigo agregar productos

agregar(producto){ 
    if(this.lista.length == o) {
        this.lista.push(producto);
    } else {
        for(let i = 0; i < this.lista.length; i++){
            if( producto.codigo < this.lista[i].codigo){
                this.lista.length = this.lista.length + 1;
                for(let j = this.lista.length; j > i; j--){
                    this.list[j-1] = this.lista[j-2];
                }
                this.lista[i] = producto;
                return true;
            } else if (i == this.lista.length - 1){
                this.lista.push(producto);
                return true;
            }
        }
    }


}   
   
//Codigo eliminar productos

eliminar(codigo){ 
   
    let producto = this.buscar(codigo);

        if (producto != null) {
            for (let i = 0; i < this.lista.length; i++) {
                if (this.lista[i].codigo == codigo) {
                    for (let j = i; j < this.lista.length; j++) {
                        this.lista[j] = this.lista[j + 1];
                    }
                }
            }

            this.lista.pop();
            return true;
        }
     }

//Codigo buscar productos

buscar(codigo){ 
    
    for(let i = 0; i < this.lista.length; i++){
        if(this.lista[i].codigo === codigo){
            return this.lista[i];
        }
    }
    return null;
}


//Codigo listar productos

listar(){   
    
    let listar = "";
        for (let i = 0; i < this.lista.length; i++) {
                listar += `Producto ${i+1} informacion del producto: ${this.lista[i].info()}`;
        }
        return listar;
    }

//Codigo listar inverso

listarInverso(){

    let listadoInverso= "";
        for (let i = this.lista.length-1; i >=0; i--) {
           listadoInverso += `Producto ${i+1} informacion del producto: ${this.lista[i].info()}`;
    }
        return listadoInverso;
    
    
    }
} 




