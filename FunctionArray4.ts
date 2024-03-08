
//This program returns the array from the function

function Demox() : number[]
{
   var Marks : number[] = [10,20,30,40];
   return Marks;
}

var Arr : number[];
Arr = Demox();//Function call

console.group("Emelents of array are : ");
var i : number = 0;

for(i = 0;i < Arr.length;i++)
{
    console.log(Arr[i]);
}
