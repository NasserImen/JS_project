function age(a:number){
    if (a<18) {
        console.log("minor")
    }
    else if (18< a && a<35) {
        console.log("jeune")
    }
    else{
    console.log("Adult")
    }
    
}
console.log (age(52));