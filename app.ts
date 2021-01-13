class Die{

    static dieSum: number = 0;
    static diceList: Die[] = []

    value: number;
    div: JQuery<HTMLDivElement>

    constructor(){ 
        this.div = $('<div></div>');
        this.div.appendTo('.dieContainer')
        this.value = this.roll();
        this.divProperties(); 
        $(this.div).click(() => {
            this.value = this.roll();
            this.div.text(this.value)
        })
        Die.diceList.push(this)
        $(this.div).dblclick(() => {
            this.div.remove(); 
            let diceIndex = Die.diceList.indexOf(this)
            Die.diceList.splice(diceIndex, 1)
        })
    }

    divProperties(){
        this.div.attr('class', 'square')
        this.div.text(this.value);  
          
    }

    roll(){
        return Math.floor((Math.random() * 6) + 1);
    }

    reroll(){
        this.value = this.roll();
        this.div.text(this.value);
    }
}


$('#addDieBtn').click(() => new Die())

$('#rollNew').click(() => {
    Die.diceList.forEach((die) => {
        die.reroll();
    })

});

$('#sumDie').click(() => {
    Die.diceList.forEach(die => Die.dieSum += die.value)
    alert(Die.dieSum);
    Die.dieSum = 0; 
});