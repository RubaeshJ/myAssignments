/* 1. Given a string s consisting of words and spaces, return the length of the last word in the string.*/

function lengthOfLastWord(input)
{
  const wordArray= input.split(' ');
  return wordArray[wordArray.length-1].length;
} 

const input = "Hello Canada";
const result = lengthOfLastWord(input);
console.log('The length of the last word is ' +result);

/*Given string is palindrome or not*/

function palindrome(inputText)
{
    let givenInput= inputText.toLowerCase();
    console.log(givenInput);

    let reversedInput=givenInput.split(' ').reverse().join(' ');
    console.log(reversedInput);

    if(givenInput === reversedInput)
    {
        console.log("The given text is a palindrome");
    }
    else
    {
        console.log("The given text is not a palindrome");
    }

}

const inputText= 'CIVIC';
palindrome(input);
