let name = "Dragon"
let age = 175

class classeHeroi{
    constructor(tipo){
        this.tipo = tipo
    }
    atacar() {
        let golpe
        switch (this.tipo) {
            case 'guerreiro':
                golpe = 'Espada'
                break;
            case 'mago':
                golpe = 'Magia'
                break;
            case 'monge':
                golpe = 'Artes Marciais'
                break;
            case 'ninja':
                golpe = 'Shuriken'
                break;
            default:
                console.log('Classe não definida')
        }
        console.log(`o ${this.tipo} atacou usando ${golpe}`)
    }
}
let heroi = new classeHeroi("monge")
heroi.atacar()