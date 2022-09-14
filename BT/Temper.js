class Temper{
    doC;
    doF;
    kenvin;

    constructor(doC, doF, kenvin) {
        this.doC = doC;
        this.doF = doF;
        this.kenvin = kenvin;
    }

    getDoC() {
        return this.doC;
    }

    setDoC(doC) {
        this.doC = doC;
    }

    getDoF() {
        return 9/5*this.doC+32;
    }

    setDoF(doF) {
        this.doF = doF;
    }

    getKenvin() {
        return this.doC+273,15
    }

    setKenvin(kenvin) {
        this.kenvin = kenvin;
    }
}