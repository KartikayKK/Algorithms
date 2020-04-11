function longest(str){
    kk=str.split(' ')
    kk.sort((word1,word2)=>{
        return word2.length-word1.length
    })
return kk[0]
}

console.log(longest('JK HJ Hello PP'))