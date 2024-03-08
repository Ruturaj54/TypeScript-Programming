//3. Program to print 5 to 1 numbers on screen.

class Demo
{
    public No : number;
    public i : number;

    constructor(A:number)
    {
        this.No = A;
    }

    Iterate()
    {
        for(this.i = this.No;this.i > 0;this.i--)
        {
            console.log(this.i+"\t");
        }
    }

}

function main() : void
{
    var Numb : number = 5;

    var dobj = new Demo(Numb);
    dobj.Iterate();
}

main();
