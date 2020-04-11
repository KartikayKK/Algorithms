function dupli(arr){
    temparr=[]
    msg=arr.split('')
    for(i=0;i<msg.length;i++){
        if(msg[i] !== msg[i].toLowerCase()){
            msg[i]=msg[i].toLowerCase()
            msg.splice()
        }
    
    }
    msg=msg.join('').trim()
    return msg
}
console.log(dupli('CodingGodWorkSon'))