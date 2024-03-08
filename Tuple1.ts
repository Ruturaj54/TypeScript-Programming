
var Data = [99,"python","C",10,true];

console.log(typeof(Data)); //Object because everything is considered a the object in typescript,java,c#

var i : number = 0;
console.log("Number of tuple are : "+Data.length);
for(i = 0;i < Data.length;i++)
{
    console.log(Data[i]);
    console.log(typeof(Data[i]));
}
