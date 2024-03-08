
//This program returns the array from the function

function Demo() : number[]
{
    return new Array(10,20,30,40);
}

var Arr : number[] = Demo();//Function call

console.group("Emelents of array are : ");
var i : number = 0;

for(i = 0;i < Arr.length;i++)
{
    console.log(Arr[i]);
}
