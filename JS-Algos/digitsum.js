function digitSum(arr){
    const nums = arr.match(/\d+/g);
    console.log(nums)
        let k=0
    if (nums===null){
        return 0
    }
    else{
        for (i=0;i<nums.length;i++){
            k+=Number(nums[i])
        }
    }
    
    return k
}
console.log(digitSum('12 apples and 12 oranges'))