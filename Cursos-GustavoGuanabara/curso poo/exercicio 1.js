class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' Já ligado')
            return
        }
    this.ligado = true;
    }

    desligar() {
        if ( !this.ligado ) {
            console.log(this.nome + " Já desligado")
        }
    this.ligado = false;
    }

}
    class SmartPhone extends DispositivoEletronico {
        constructor( nome, cor, modelo ){
            super( nome )
            this.cor = cor;
            this.modelo = modelo;
        }
    }

    class Tablet extends DispositivoEletronico {
        constructor(nome, polegada) {
            super( nome );
            this.polegada = polegada;
        }
    }

    let s1 = new SmartPhone('samsung', 'vermelho', 'S10');

    let t1 = new Tablet ('tablet1', '12p');
    console.log(t1);
