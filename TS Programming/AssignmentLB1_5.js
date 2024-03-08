//Problem Statement:-Accept the one number from user and print that number of stars here
var stars = /** @class */ (function () {
    function stars(A) {
        this.Star = "*";
        this.No = A;
    }
    stars.prototype.DisplayStar = function () {
        for (this.i = 1; this.i <= this.No; this.i++) {
            console.log(this.Star + "\t");
        }
    };
    return stars;
}());
function main() {
    var Numb = 5;
    var sobj = new stars(Numb);
    sobj.DisplayStar();
}
main();
