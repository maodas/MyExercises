
//Excersice to print number from 1 - 100 but every number that can be divisible by 3/5/7 will show one of the assigned words.
   for(let i = 1; i<=100; i++){
    let out = "";
    if( i % 3 === 0 )
        out += "Fizz";
    if( i % 5 === 0 )
        out += "Buzz";
    if( i % 7 === 0 )
        out += "Bazz"

    console.log( out || i)
   }
