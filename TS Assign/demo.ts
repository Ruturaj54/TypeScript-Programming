

//5. Write a typescript program which contains one function named as ChkString. That function accept 
//one string and check whether that string contains “Marvellous” word or not. 
//Input : “Pune Kothrud Marvellous Infosystems” 
//Output : String contains Marvellous in it.r 


function ChkString(Str : string) : boolean
{
    var str1 : string = "Marvellous";
    var str2 : string;
    var i : number = 0;
    var iCnt : number = 0;

   for(i=0;i < Str.length;i++)
   {
      if((Str[i] == 'M') || (Str[i] == 'a') || (Str[i] == 'r') || (Str[i] == 'v') || (Str[i] == 'e') || (Str[i] == 'l')||(Str[i] == 'l')||(Str[i] == 'o')||(Str[i] == 'u')||(Str[i] == 's'))
      {
         
            str2[i] = str1[i];
         
      }
   }
   if(str1 == str2)
   {
      return true;
   }
   else
   {
      return false;
   }
}

var Str : string = "Pune Marvellous";
var bRet : boolean = ChkString(Str);

if(bRet == true)
{
   console.log("Found");
}
else
{
   console.log("Not Found");
}

var Strx : string = "Vit Delhi";
bRet = ChkString(Strx);

if(bRet == true)
{
   console.log("Found");
}
else
{
   console.log("Not Found");
}