class CalcController {

    constructor(){

        this._displayCal = "0";
        this._currentDate; 
        this.initialize();

    }

    initialize(){

        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "4567"
        dateEl.innerHTML = "01/05/2026"
        timeEl.innerHTML = "05:14"
    }

    get displayCalc(){
        return this._displayCalc;        
    }

    set displayCalc(valor){
        this.displayCalc = valor;
    }

    get currentDate(){
        return this._currentDate;
    }

    set currentDate(valor){
        this._currentDate = valor;
    }

}