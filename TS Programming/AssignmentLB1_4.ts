//Problem Statement:-Accept one number and check wheather it is divisible by 5 or not

class Demox
{
    public No : number;

    constructor(A:number)
    {
        this.No = A;
    }

    ChkDivisibleByFive() : boolean
    {
        if(this.No % 5 == 0)
        {
            return true;
        }
        else
        {
            return false;
        }

    }

}

function main() : void
{
    var Numb : number = 21;
    var dobj = new Demox(Numb);
    var Ret : boolean = false;

    Ret = dobj.ChkDivisibleByFive();
    if(Ret == true)
    {
        console.log("The Number "+Numb+" is Divisible by 5");
    }
    else
    {
        console.log("The Number "+Numb+" is Not Divisible by 5");
    }

}

main();