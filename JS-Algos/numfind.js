function addtwo(a){
    p=Math.max(...a)
    q=Math.min(...a)
    sum=0
    for(i=q;i<=p;i++){
        console.log(i)
        sum+=i
    }
    return sum
}
console.log(addtwo([3,7]))