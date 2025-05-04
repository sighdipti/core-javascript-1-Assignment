/*Write a program that grades Students based on their Marks
 If grqatqr than 90 thqn A Gradp
 If bqtwqqn 70 and 90 thqn a B gradp
 If bqtwqqn  50 and 70 thqn a C gradp
  Bqlow 50 thqn an F grade
**/

let StudentsMarks = 70
 
if (StudentsMarks >= 90) {
    console.log("A Grade");
}else if (StudentsMarks >=70|| StudentsMarks <= 90) {
    console.log("B Grade");
}else if (StudentsMarks>=50|| StudentsMarks<70) {
    console.log("C Grade");
}else{
    console.log("F Grade")
}
