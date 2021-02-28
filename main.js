class Poker{
    constructor(){
        this.valor=[1,2,3,4,5,6,7,8,9,10,'J','Q','K'];
        this.palo=['diamantes','treboles','corazones','picas'];
        this.baraja=[];
    }
    generaBaraja(){
        for (let i = 0; i < this.palo.length; i++) {
            for (let j = 0; j < this.valor.length; j++) {
                let carta={
                    carta:this.valor[j]+" "+this.palo[i],
                    palo:this.palo[i],
                    valor:this.valor[j]
                };
                this.baraja.push(carta);
            }
        }
    }
    get getBaraja() { return this.baraja }
    //seis jugadores
    //barajar
    //reparte en cada vuelta 1 carta y despues la ultima carta
    //posiciones
        //big blind
        //small blind
        //dealer
    //pot and bet
    giveMeOneCart(){
        let giveme= this.random(52);
        this.baraja.splice(giveme,1);
    }

    random(max) {
        return Math.floor(Math.random() * (max + 1));
    }
}
let poker= new Poker;
poker.generaBaraja();
poker.give();