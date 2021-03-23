class Poker{
    constructor(){
        this.value=[2,3,4,5,6,7,8,9,10,11,12,13,1];
        this.suit=['diamonds','clubs','hearts','spades'];
        this.drawValue=[2,3,4,5,6,7,8,9,'T','J','Q','K','A'];
        this.drawSuit=['♦️','♣️','♥️','♠️']
        this.deck=[];
        this.players=[];
        this.player={
            "money":0,
            "position":0
        };
    }
    generateDeck(){
        //let tmpDeck= pa poner nuestro deck
        //mezclarlo con fl y getcard
        for (let i = 0; i < this.suit.length; i++) {
            for (let j = 0; j < this.value.length; j++) {
                let card={
                    card:`${this.value[j]} ${this.suit[i]}`,
                    cardSuit:`${this.suit[i]}`,
                    cardValue:`${this.value[j]}`,
                    cardSuitD:`${this.drawSuit[i]}`,
                    cardValueD:`${this.drawValue[j]}`,
                }
                this.deck.push(card);
            }
        }

    }
    get getCard(){
        return this.deck.splice(this.random(this.deck.length),1);
    }
    fl(){
        let arrDeck={};
        for (let i = 0; i < 52; i++) {
            arrDeck[i]=this.getCard[0]
            //arrDeck.push(this.getCard);
        }
        console.log(arrDeck);
    }
    
    handRanking(players){
        // RoyalFlush
        // StraightFlush
        // FourOfAKind
        // FullHouse
        // Flush
        // Straight
        // ThreeOfAKind
        // One Pair
        // High Card
        // pasar por parametros los jugadores
        // y comprobar quien tiene la carta mas alta
        let highCard= function(){
            for (let i = 0; i < players.length; i++) {
                
            }
        }


    }

    random(n) {return Math.floor(Math.random()*n)}

    startGame(){
        this.generateDeck();
        //console.log(this.deck)
        this.fl();
    }
}
let poker= new Poker;
poker.startGame();
