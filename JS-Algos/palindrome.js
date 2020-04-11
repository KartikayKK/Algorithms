function pal(str){
    str=str.toLowerCase()
    str=str.replace(/[\W_]/g,'');    
    kk=str.split('')    
    kk2=str.split('').reverse()
    return kk.join('')===kk2.join('')
        
}

console.log(pal('NI_t*+-in'))
console.log(pal('Nitin'))