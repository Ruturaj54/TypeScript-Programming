//This program returns the array from the function
function Demox() {
    var Marks = [10, 20, 30, 40];
    return Marks;
}
var Arr = Demox(); //Function call
console.group("Emelents of array are : ");
var i = 0;
for (i = 0; i < Arr.length; i++) {
    console.log(Arr[i]);
}
