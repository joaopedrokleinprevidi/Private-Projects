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

/* 
peso mosca 53kg
peso pena 71kg
peso medio 84kg
peso pesado 120kg
else super peso pesado
*/


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
}

    const l = new Lutador('QuebraOsso', 'brasileiro', 20, 1.85, 120, 14, 2, 3);


    console.log(l)
    console.log('----------------------------------')
    console.log(l.apresentar());


