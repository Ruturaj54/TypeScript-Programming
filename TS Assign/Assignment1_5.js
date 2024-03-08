//5. Write a typescript program which contains one function named as Fibonacci. That function accept 
//one number from user and print Fibonacci series till that number. 
//Input : 21 
//Output : 1 1 2 3 5 8 13 21
function Fibonacci(Value) {
    var iCnt = 1;
    var temp = 0;
    var tempx = 0;
    var Sum = 1;
    console.log("Fibonachhi Series is : ");
    for (iCnt = 1; iCnt <= Value; iCnt++) {
        console.log(temp);
        tempx = temp + Sum;
        temp = Sum;
        Sum = tempx;
        if (temp > Value) {
            return;
        }
    }
}
Fibonacci(21);
