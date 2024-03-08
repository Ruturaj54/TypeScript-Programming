//This program returns the array from the function
function Demoxy() {
    var Languages = ["C", "Java", "Python", "TypeScript"];
    return Languages;
}
var Arr;
Arr = Demoxy(); //Function call
console.group("Emelents of array are : ");
var i = 0;
for (i = 0; i < Arr.length; i++) {
    console.log(Arr[i]);
}
