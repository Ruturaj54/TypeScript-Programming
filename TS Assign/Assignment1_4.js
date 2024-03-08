//4. Write a typescript program which contains one function named as ChkPrime. That function should 
//accept one number and it should return true if the given number is prime and otherwise return false. 
//Input : 11 
//Output : It is prime number
function CheckPrime(Value) {
    var iCnt = 0;
    for (iCnt = 2; iCnt < Value; iCnt++) {
        if (Value % iCnt == 0) {
            return false;
        }
        else {
            return true;
        }
    }
}
var bRet = CheckPrime(11);
if (bRet == true) {
    console.log("It is A Prime Number...");
}
else {
    console.log("It is Not a Prime Number...");
}
