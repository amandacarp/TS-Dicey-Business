"use strict";
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.div = $('<div></div>');
        this.div.appendTo('.dieContainer');
        this.value = this.roll();
        this.divProperties();
        $(this.div).click(function () {
            _this.value = _this.roll();
            _this.div.text(_this.value);
        });
        Die.diceList.push(this);
        $(this.div).dblclick(function () {
            _this.div.remove();
            var diceIndex = Die.diceList.indexOf(_this);
            Die.diceList.splice(diceIndex, 1);
        });
    }
    Die.prototype.divProperties = function () {
        this.div.attr('class', 'square');
        this.div.text(this.value);
    };
    Die.prototype.roll = function () {
        return Math.floor((Math.random() * 6) + 1);
    };
    Die.prototype.reroll = function () {
        this.value = this.roll();
        this.div.text(this.value);
    };
    Die.dieSum = 0;
    Die.diceList = [];
    return Die;
}());
$('#addDieBtn').click(function () { return new Die(); });
$('#rollNew').click(function () {
    Die.diceList.forEach(function (die) {
        die.reroll();
    });
});
$('#sumDie').click(function () {
    Die.diceList.forEach(function (die) { return Die.dieSum += die.value; });
    alert(Die.dieSum);
    Die.dieSum = 0;
});
