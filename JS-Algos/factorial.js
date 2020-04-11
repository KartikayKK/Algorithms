function fact(num){
    let k=1;
    for(i=1;i<=num;i++){
        k*=i;
    }

    return k;
}

console.log(fact(4))