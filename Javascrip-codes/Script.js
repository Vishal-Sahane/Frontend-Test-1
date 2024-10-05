function multiplication(num){
    for(let i=1; i<=10; i++){
        console.log(i*num);
        
    }
}
multiplication(3)


console.log("conversion of  temperature celcius to fahrenheit");

// celcius to fahrenheit Converter
function temperature(celcius){
    let fahrenheit= (celcius*9/5)+32
    console.log(fahrenheit);
    
}
temperature(22)


// positive or negative number checker

function num_checker(num){
    if(num>=1){
        console.log("number is positive");
        
    }
    else if(num<1){
        console.log("number is negative");
        
    }else{
        console.log("number i zero");
        
    }

}
num_checker(3)