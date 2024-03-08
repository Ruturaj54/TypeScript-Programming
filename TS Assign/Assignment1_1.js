function Maximum(No1, No2, No3) {
    var temp = 0;
    if (No1 > No2 && No1 > No3) {
        return No1;
    }
    else if (No2 > No1 && No2 > No3) {
        return No2;
    }
    else if (No3 > No1 && No3 > No2) {
        return No3;
    }
    else {
        console.log("All Numbers are equal...");
        return No1;
    }
}
var Value1 = 23;
var Value2 = 89;
var Value3 = 6;
var MaxNumb = Maximum(Value1, Value2, Value3);
console.log("Maximum number is : " + MaxNumb);
