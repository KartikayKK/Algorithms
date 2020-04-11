function validTime(str){
    if (str.split(':').join('')===str){
        return false
    }else{
    arr=str.split(":")
    }
    if(arr[0]<24 && arr[1]<60){
        return true
    }else{
        return false
    }
    
}

console.log(validTime('20:00'))
