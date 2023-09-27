class Carro{
    constructor(marca,cor,tipo){
        this.marca = marca;
        this.cor = cor;
        this.tipo = tipo;
    }
}

var Carro0 = new Carro('Fiat','Preto','1.0');
var Carro1 = new Carro('Chevrolet','Vermelho','2.0');

var Carros = [Carro0,Carro1];
var teste = [0,1];

function random(min = 0, max = 2) {
    return Math.floor(Math.random());
}
console.log(random(Carros));



