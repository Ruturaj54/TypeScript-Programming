//3. Program to print 5 to 1 numbers on screen.
var Demo = /** @class */ (function () {
    function Demo(A) {
        this.No = A;
    }
    Demo.prototype.Iterate = function () {
        for (this.i = this.No; this.i > 0; this.i--) {
            console.log(this.i + "\t");
        }
    };
    return Demo;
}());
function main() {
    var Numb = 5;
    var dobj = new Demo(Numb);
    dobj.Iterate();
}
main();
