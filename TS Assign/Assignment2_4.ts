//4. Write a typescript program which contains one arrow function named as ChkArmstrong. That 
//function accepts one numbers and check whether number is Armstrong number or not. 
//Input : 153 
//Output : It is Armstrong number 


function CheckArmStrong(iNo : number) : boolean
{
   var iDigit : number = 0;
   var iNumb : number = iNo;
   var temp : string = iNo.toString();
   var tempx : string;
   var iRev : number = 0;

   while(iNo != 0)
   {
      iDigit = iNo % 10;
      iRev = (iRev*10)+iDigit;
      iNo = iNo / 10;
      temp = iNo.toString();
      tempx = parseInt(temp,10).toString();
      iNo = parseInt(tempx);
   }
   if(iRev == iNumb)
   {
      return true;
   }
   else
   {
      return false;
   }
}


var bRet : boolean = false;
bRet = CheckArmStrong(153);

if(bRet == true)
{
   console.log("It is An Armstrong Number...");
}
else
{
   console.log("It is Not an ArmStrong number...");
}


bRet = CheckArmStrong(220);

if(bRet == true)
{
   console.log("It is An Armstrong Number...");
}
else
{
   console.log("It is Not an ArmStrong number...");
}

bRet = CheckArmStrong(111);

if(bRet == true)
{
   console.log("It is An Armstrong Number...");
}
else
{
   console.log("It is Not an ArmStrong number...");
}