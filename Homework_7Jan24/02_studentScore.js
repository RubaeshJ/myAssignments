function calculateGrade(score)
{
switch (true) {
    case (score > 90 && score <=100):
        return 'A';
    case (score > 80 && score <=90):
            return 'B'; 
    case (score > 60 && score <=80):
            return 'C';   
    case (score > 40 && score <=60):
            return 'D';  
    case (score > 0 && score <=40):
            return 'FAIL'; 
    default:
            return "Not a valid score.";
}
}
let score=30;
let output= calculateGrade(score);
console.log("Your grade is " +output);