function fdupli(arr){
    arrt=[]
    for ( i=0;i<arr.length;i++){
        if (arrt.includes(arr[i])){
            return i
        }else{
            arrt.push(arr[i])
        }
    }
    return -1
}
console.log(fdupli([1,2,3]))