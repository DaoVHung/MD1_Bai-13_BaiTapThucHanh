class Tele{

constructor(name,status) {
    this.status = status;
    this.name= name
}
getStatus(){
    return this.status
}
setStatus(status){
    this.status = status
}


getName(){
    return this.name;
}
setName(name){
    this.status = name
}
}

let IPHONE= new Tele('Iphone', false)
let NOKIA= new Tele('nokia', false)
function batTat(id){
    console.log('========id ', id)
    if(id==="nguonIphone"){

    }

}