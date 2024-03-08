//2. Write a typescript program which contains one function named as Summation. That function 
//accepts array of numbers and returns the summation of each number from array. 
//Input : 23 6 7 4 5 7 
//Output : Addition is 52
function Summation(Arr) {
    var iSum = 0;
    var iCnt = 0;
    for (iCnt = 0; iCnt < Arr.length; iCnt++) {
        iSum = iSum + Arr[iCnt];
    }
    return iSum;
}
var Arr = new Array();
var iRet = 0;
Arr = [23, 6, 7, 4, 5, 7];
iRet = Summation(Arr);
console.log("Summation off array Elements are  : " + iRet);
//Time Complexity :- O(n)
// n = Number of array elements
