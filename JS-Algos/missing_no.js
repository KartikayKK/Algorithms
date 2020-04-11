function missing(arnum){
    left=[]
    arnum.sort((a,b)=>{
        return a-b
    })
    for(i=0;i<=9;i++){
        if (!arnum.includes(i)){
           left.push(i)
        }
    }
    return left
}
console.log(missing([0,1,7,5,3,6,2,9]))