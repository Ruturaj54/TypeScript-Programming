
//This program returns the array from the function

function Demoxy() : string[]
{
   var Languages : string[] = ["C","Java","Python","TypeScript"];
   return Languages;
}

var Arr : string[];

Arr = Demoxy();//Function call

console.group("Elements of array are : ");
var i : number = 0;

for(i = 0;i < Arr.length;i++)
{
    console.log(Arr[i]);
}
