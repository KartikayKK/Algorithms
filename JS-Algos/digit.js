function digitAdd(num){
    num=num.toString()
    arr=num.split('')
    k=0
    for (let i of num){
        k+=Number(i)
    }
    return(k)
}
console.log(digitAdd(46))