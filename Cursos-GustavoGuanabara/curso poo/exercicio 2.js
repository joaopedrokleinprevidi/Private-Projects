class Person {
    constructor(nome) {
        this._nome = this._capitalize(nome)
    }

    //entidade privadas recem underline na frente, como acime em _nome
    //para evitar a recursão infinita e coloquemos o underline ao nome na classe para usar a propriedade privada _nome.

    set nome(string){
        this._nome = this._capitalize(string);
    }

    get nome() {
        return this._nome
    }

    _capitalize(string) {
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
    }

    walk() {
        return `${this.nome} está andando.`
    }
}

var person1 = new Person('pedro');

console.log(person1);