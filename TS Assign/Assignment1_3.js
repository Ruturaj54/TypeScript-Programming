//3. Write a typescript program which contains one function named as DisplayFactors. That function 
//should accept one number and display factors of that number. 
//Input : 20 
//Output : 1 2 4 5 10 
function Display(Value) {
    var iCnt = 0;
    for (iCnt = 1; iCnt <= (Value / 2); iCnt++) {
        if (Value % iCnt == 0) {
            console.log(iCnt);
        }
    }
}
Display(20);
