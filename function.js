function even(number)
{
    if(number%2==0) console.log(number, "is Even");
    else console.log(number, "is Odd");
}
nums = [5,12,45];
for (let i = 0; i < nums.length; i++) {
    const number = nums[i];    
    even(number);
}
