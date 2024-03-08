//5. Write a typescript program which contains one function named as ChkString. That function accept 
//one string and check whether that string contains “Marvellous” word or not. 
//Input : “Pune Kothrud Marvellous Infosystems” 
//Output : String contains Marvellous in it.r 



function ChkStringx(Str : string) : boolean
{
   var str1 : string = "Marvellous";

   var Result : number = Str.search(str1);
  
   if(Result == -1)
   {
      return false;
   }
   else
   {
      return true;
   }
}

var Str : string = "Pune Marvellous";
var bRet : boolean = ChkStringx(Str);

if(bRet == true)
{
   console.log("Found");
}
else
{
   console.log("Not Found");
}

var Strx : string = "Vit Delhi";
bRet = ChkStringx(Strx);

if(bRet == true)
{
   console.log("Found");
}
else
{
   console.log("Not Found");
}