function rev(str){
    k=str.split('');
    k.reverse()
    k=k.join('')
    return k
}
function rev2(str){
    j=''
    for (i=str.length-1;i>=0;i--){
        j+=str[i]
    }
    return j
}

console.log(rev2('Lk'))