function dupli(arr){
    arrt=[]
    for ( i=0;i<arr.length;i++){
        if (arrt.includes(arr[i])){
            return true
        }else{
            arrt.push(arr[i])
        }
    }
    return false
}
console.log(dupli([1,2,2]))