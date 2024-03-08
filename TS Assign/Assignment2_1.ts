//1. Write a typescript program which contains one function named as Maximum. That function accepts 
//array of numbers and returns the largest number from array. 
//Input : 23 89 6 29 56 45 77 32 
//Output : Maximum number is 89

function Maximum(Arr : number[]) : number
{
   var iMax : number = Arr[0];
   var iCnt : number = 0;

   for(iCnt = 0;iCnt < Arr.length;iCnt++)
   {
      if(Arr[iCnt] > iMax)
      {
         iMax = Arr[iCnt];
      }
   }
   return iMax;
}

var Arr : number[] = new Array(8);
var iRet : number = 0;

Arr = [23,89,6,29,56,45,77];
iRet = Maximum(Arr);

console.log("The Largest Number from Array is : "+iRet);


//Time Complexity :- O(n)
// n = Number of array elements