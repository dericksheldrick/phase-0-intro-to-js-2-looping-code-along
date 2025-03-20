// Code your solutions in this file
let array =[];
function writeCards(array, message){
    let messageArray = [];

    for (let i = 0; i < array.length; i++) {
        let  outputMessage =`Thank you, ${array[i]}, for the wonderful surprise gift!`
    //    console.log (outputMessage);
       messageArray.push(outputMessage);  
         
    }
    return messageArray;
}
console.log(writeCards(['Guadalupe','Ollie','Aki']));

function countDown(number){
    let i= 0;
    while (i<=10) {
       console.log(10-i) 
       i++;
    }
    return number;
}
countDown(10);