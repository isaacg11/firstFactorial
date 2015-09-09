//First, you pass in the argument of 4. Note, this is just an example.
//You may pass in any number you desire.
//Then, this function will first compare and see if the number given is zero.
//If it is zero, the function will return 4 times the function FirstFactorial ran again, only
//this time, the number will be 4 * (4-1), 12 * (3-1), 24 * (2-1);
//translated, this will be 4*3*2*1 which is 24.
//Happy coding!

function FirstFactorial(num) {

   if (num===0) {

      console.log('zero');
      return 1;
   }

   else {
     console.log(num);
     return num * FirstFactorial(num-1)

    }


 }
 console.log(FirstFactorial(4));
