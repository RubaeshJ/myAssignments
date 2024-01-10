function checkNumberType(number)
{
  if(number > 0)
  {
    return 'The given number is greater than 0';
  }
  else if(number <0)
  {
    return 'The given number is lesser than 0';
  }
  else
  {
    return 'The given number is 0';
  }
}

let givenNumber= 0;
let output= checkNumberType(givenNumber);
console.log(output);