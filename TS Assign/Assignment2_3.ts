//3. Write a typescript program which contains one function named as Maximum. That function accepts 
//array of numbers and returns the second largest number from array. 
//Input : 23 89 6 29 56 45 77 32 
//Output : Second Maximum number is 77 

function SecondLargNum(Arr : number[]) : number
{
   var iMaxSec : number = 0;
   var iMax : number = Arr[0];
   var iCnt : number = 0;

   for(iCnt = 0;iCnt < Arr.length;iCnt++)
   {
      if(Arr[iCnt] > iMax)
      {
         iMaxSec = iMax;
         iMax = Arr[iCnt];
      }
      else if(Arr[iCnt] < iMax && Arr[iCnt] > iMaxSec)
      {
         iMaxSec = Arr[iCnt];
      }
   }
   if(iMaxSec == 0)
   {
      console.log("All Elements of Array Are equal...");
      return Arr[0];
   }

   return iMaxSec;
}

var Arr : number[] = new Array();
var iRet : number = 0;

Arr = [10,10,10,10];
iRet = SecondLargNum(Arr);
console.log("Second Largest Element of Array is : "+iRet);

Arr = [23, 89, 6 ,29 ,56 ,45 ,77 ,32];
iRet = SecondLargNum(Arr);
console.log("Second Largest Element of Array is : "+iRet);


//Time Complexity :- O(n)
// n = Number of array elements