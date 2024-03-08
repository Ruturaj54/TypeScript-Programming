//2. Write a typescript program which contains one function named as Area. That function should 
//calculate area of circle. Accept value of radius from user and return its area. Default value of PI 
//should be 3.14 if it is not provided by the caller. 
//Input : 5 
//Output : Area of circle is 78.5 
function Area(Radius, PI) {
    if (PI === void 0) { PI = 3.14; }
    var Ans = 0;
    Ans = PI * Radius * Radius;
    return Ans;
}
var iRet = Area(15, 3.1412);
console.log("Area of Circle is : " + iRet);
var iRet = Area(10);
console.log("Area of Circle is : " + iRet);
var iRet = Area(5);
console.log("Area of Circle is : " + iRet);
