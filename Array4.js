var iCnt = 0;
var Marks = [11, 21, 51, 101, 111];
console.log("Number of Elements in the Array are :" + Marks.length);
//length is the property
console.log(Marks[0]);
console.log(Marks[1]);
console.log(Marks[2]);
console.log(Marks[3]);
console.log(Marks[4]);
console.log("Elements of the array are : ");
for (iCnt = 0; iCnt < Marks.length; iCnt++) {
    console.log(Marks[iCnt]);
}
console.log("Displaying the Array using the While loop");
iCnt = 0;
while (iCnt < Marks.length) {
    console.log(Marks[iCnt]);
    iCnt++;
}
console.log("Displaying the Array using the do While loop");
iCnt = 0;
do {
    console.log(Marks[iCnt]);
    iCnt++;
} while (iCnt < Marks.length);
