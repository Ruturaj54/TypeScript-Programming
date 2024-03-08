//Problem Statement:-Accept the one number from user and print that number of stars here

class stars
{
    public No : number;
    public i : number;
    public Star : string = "*";

    constructor(A : number)
    {
        this.No = A;
    }

    DisplayStar()
    {
        for(this.i = 1;this.i <= this.No;this.i++)
        {
            console.log(this.Star+"\t");
        }
    }
}

function main():void
{
    var Numb : number = 5;
    var sobj = new stars(Numb);
    sobj.DisplayStar();
}
main();