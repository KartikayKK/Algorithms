function title(arr){
    let str=arr.split(' ')
    console.log(str)
    newStr=str.map((word)=>{
        const f=word.charAt(0).toUpperCase()
        word=f.concat(word.slice(1,word.length))
        return word
    })
    return newStr.join(' ')
}
console.log(title("hello mister how are you"))