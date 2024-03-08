var iNo = 153;
var iDigit = 0;
//var iNumb : number = 0;
//var temp : number = iNo;
while (iNo != 0) {
    iDigit = iNo % 10;
    iNo = iNo / 10;
}
console.log(iDigit);
