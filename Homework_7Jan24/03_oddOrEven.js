function checkOddOrEven(number)
{
if(number%2==0)
{
    return 'Given number is even number.';
}
else
{
    return 'Given number is odd number';
}
}

let givenNumber= 0;
let output= checkOddOrEven(givenNumber);
console.log(output);