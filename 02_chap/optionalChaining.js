var OptionalChaniningNS;
(function (OptionalChaniningNS) {
    var Automobile = /** @class */ (function () {
        function Automobile(wheels) {
            this.wheels = wheels;
        }
        return Automobile;
    }());
    var car = new Automobile({
        count: undefined
    });
    console.log("car ", car);
    console.log("wheels ", car ? .wheels : );
    console.log("count ", car ? .wheels ? .count :  : );
})(OptionalChaniningNS || (OptionalChaniningNS = {}));
