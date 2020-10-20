function test (c:number) {
    var f=1;
    if (c==0){
        f=1;
    }
    else{
        f=1;
        for (let i=2 ;i<=c ; i++){
            f=f*i;
            console.log(f);
            
    
        }
    }
    
    return f;
}
console.log(test(4));   


