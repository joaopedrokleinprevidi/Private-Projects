class Lutador { 
    //atributos
    constructor( nome, nacionalidade, idade, altura, peso, vitorias, derrotas, empates ) {
        this._nome = nome;
        this._nacionalidade = nacionalidade;
        this._idade = idade;
        this._altura = altura;
        this._peso = peso;
        this._vitorias = vitorias;
        this._derrotas = derrotas;
        this._empates = empates;
        this.definirCategoria();
    }

    definirCategoria ( ) {
        if ( this._peso <= 53 ) {
            this._categoria = "Peso Mosca"
        }
        else if ( this._peso <= 71 ) {
            this._categoria = "Peso Pena"
        }
        else if ( this._peso <= 84 ) {
            this._categoria = "Peso Medio"
        }
        else if ( this._peso <= 120 ) {
            this._categoria = "Peso Pesado"
        }
        else {
            this._categoria = "Super Peso Pesado"
        }

    }

    //métodos
    apresentar () {
        console.log(`
        Eeeeeeeee vamoooo pra cimaa!!!!
        Hoje um dos nossos lutadores se chama: ${this._nome}
        Pesando ${this._peso}kg, da categoria ${this._categoria}
        Com um total de: ${this._vitorias} vitórias, ${this._derrotas} derrotas, e ${this._empates} empates!

        `)
    }

    ganharLuta () {
        return this._vitorias = this._vitorias + 1;
    }

    perderLuta () {
        return this._derrotas = this._derrotas + 1;
    }

    empatarLuta() {
        return this._empates = this._empates + 1;
    }


}

    const l1 = new Lutador('QuebraOsso', 'brasileiro', 20, 1.85, 120, 14, 2, 3);
    const l2 = new Lutador('Osvaldo', 'Chines', 18, 1.67, 125, 12, 5, 6);
    const l3 = new Lutador('Robertinho', 'Europeu', 32, 1.76, 95, 7, 1, 0);
    const l4 = new Lutador('Geraldão', 'Brasileiro', 18, 1.93, 95, 10, 0, 3);
    const l5 = new Lutador('Rodrigo', 'Japones', 22, 1.82, 60, 6, 3, 2);
    const l6 = new Lutador('Perereko', 'Gaucho', 21, 1.84, 60, 12, 4, 2);

    function n ( ) {
    var aleatorio = parseInt(Math.random() * 6);
    return aleatorio
}

    var array = [l1, l2, l3, l4, l5, l6];

    class Luta {

    }

    for (var i = 0; i <= 10; i++){
        if( n() == 0 ){
           
            
        }
    }





