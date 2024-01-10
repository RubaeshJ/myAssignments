//2) Array intersection

const array1=[1,2,2,1];
const array2=[2,2];

const array3= (array1.concat(array2));
console.log(array3);
console.log([...new Set(array3)]);// remove duplicate


 //4. Remove duplicates

function removeDuplicates(inputArray) 
{ 
    return [...new Set(inputArray)]; 
} 
  

const inputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6];
console.log(removeDuplicates(inputArray));