function unique(arrA,arrB){
    final=[]
    for (let char of arrA){
        if(!arrB.includes(char)){
            final.push(char)
        }
    }
    for (let char of arrB){
        if(!arrA.includes(char)){
            if(!final.includes(char))
                final.push(char)
        }
    }
    return final
}
console.log(unique([1,2,3],['calf',5,6,3]))