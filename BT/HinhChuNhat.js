class HinhChuNhat{
    dai;
    rong;
    dienTich;
    chuVi;
    ctx;

    constructor(dai, rong, dienTich, chuVi, ctx) {
        this.dai = dai;
        this.rong = rong;
        this.dienTich = dienTich;
        this.chuVi = chuVi;
        this.ctx = ctx;
    }

    getDai() {
        return this.dai;
    }

    setDai(dai) {
        this.dai = dai;
    }

    getRong() {
        return this.rong;
    }

    setRong(rong) {
        this.rong= rong;
    }

    getDienTich() {
        return this.rong*this.dai;
    }

    setDienTich(dienTich) {
        this.dienTich = dienTich
    }

    getChuVi() {
        return (this.dai+this.rong)*2;
    }

    setChuVi(chuVi) {
        this.chuVi = chuVi;
    }
    veHinhChuNhat(ctx,dai,rong){
        let chuNhat= new chuNhat(this.dai,this.rong)
        ctx.beginPath()
        ctx.fillRect(this.dai,this.rong,0,0)
        ctx.closePath()
    }
}