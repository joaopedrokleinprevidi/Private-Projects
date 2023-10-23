class ContaBanco {
    constructor(saldo, status) {
        //atributos
        this.saldo = 0;
        this.status = 0;
    }

    //metodos
   setNumConta(n) {
    this.numConta = n;
   }
   getNumConta() {
    return this.numConta;
   }
   setTipo(t){
    this.tipo = t;
   }
   getTipo(){
    return this.tipo
   }

}

p1 = new ContaBanco;
console.log(p1.tipo("CC"));