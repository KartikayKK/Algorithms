function rep(str,num){
    k=''
    for (i=0;i<num;i++){
        // console.log(str)
        k=k.concat(str)
    }
    return k
}
console.log(rep('KkKK',5))