//sintaxe suggar
//classes são templates de objetos no javascript

class Carro {
    constructor ( nome, ano ) {
        this._nome = nome;
        this._ano = ano;
    }
}

let c1 = new Carro('toyota', '1995');
console.log(c1);