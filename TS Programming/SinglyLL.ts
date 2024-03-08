class Nodex
{
    public Data : number;
    public next;

    constructor(A:number)
    {
        this.Data = A;
        this.next = null;
    }
}

class DSA
{
    public Head;
    public Count;
    
    constructor()
    {
        this.Count = 0;
        this.Head = null;

    }

    InsertFirst(No : number)
    {
        let newn = new Nodex(No);
        newn.Data = No;
        newn.next = null;

        if(this.Head === null)
        {
            this.Head = newn;
        }
        else
        {
            newn.next = this.Head;
            this.Head = newn;
        }
        this.Count++;
    }

    InsertLast(No : number)
    {
        let newn = new Nodex(No);
        newn.Data = No;
        newn.next = null;
        let temp = this.Head;

        if(this.Head === null)
        {
            this.Head = newn;
        }
        else
        {
            while(temp.next != null)
            {
                temp = temp.next;
            }
            temp.next = newn;
            
        }
        this.Count++;

    }

    DeleteFirst()
    {
        if(this.Head === null)
        {
            console.log("The Linked List is already Empty....");
            return;
        }
        else
        {
            this.Head = this.Head.next;
            this.Count--;
        }
    }

    DeleteLast()
    {
        let temp = this.Head;

        if(this.Head === null)
        {
            console.log("The Linked List is already Empty....");
            return;
        }
        else
        {   
            while(temp.next.next != null)
            {
                temp = temp.next;
            }
            temp.next = null;
            this.Count--;
        }
    }

    Display()
    {
        let Temp = this.Head; 
        let Str : string = "";

        while(Temp != null)
        {
            Str = Str + Temp.Data+" "+"-->";
            Temp = Temp.next;
        }
        console.log(Str+"null");
        
    }

    InsertAtPos(No : number,iPos : number)
    {
        let newn = new Nodex(No);
        let i : number;
        let iSize = this.CountNode();
        let Temp = this.Head;
        newn.Data = No;
        newn.next = null;

        if(iPos < 1 || iPos > (iSize + 1))
        {
            console.log("Invalid Position !!! ");
            return;
        }
        else
        {
            if(iPos == 1)
            {
                this.InsertFirst(No);
            }
            else if(iPos == iSize)
            {
                this.InsertLast(No);
            }
            else
            {
                for(i = 1;i < iPos-1;i++)
                {
                    Temp = Temp.next;
                }
                newn.next = Temp.next;
                Temp.next = newn;
                this.Count++;
            }
        }
    }

    DeleteAtPos(iPos:number)
    {
        let iSize : number;
        iSize = this.CountNode();
        let Temp = this.Head;
        let i : number;

        if(iPos < 1 || iPos > iSize)
        {
            console.log("Invalid Position...");
            return;
        }
        else
        {
            if(iPos == 1)
            {
                this.DeleteFirst();
            }
            else if(iPos == iSize)
            {
                this.DeleteLast();
            }
            else
            {
                for(i = 1;i < iPos - 1;i++)
                {
                    Temp = Temp.next;
                }
                Temp.next = Temp.next.next;
                this.Count--;

            }
        }
    }

    CountNode():number
    {
        return this.Count;
    }
}

function main() : void
{
    var dobj = new DSA();
    var iRet : number;

    dobj.InsertFirst(101);
    dobj.InsertFirst(51);
    dobj.InsertFirst(21);
    dobj.InsertFirst(11);
    dobj.InsertLast(10001);

    dobj.Display();
    iRet = dobj.CountNode();
    console.log("Number of Nodes in LinkedList are : "+iRet);

    dobj.InsertAtPos(5001,3);
    dobj.Display();
    iRet = dobj.CountNode();
    console.log("Number of Nodes in LinkedList are : "+iRet);

    dobj.DeleteAtPos(3);
    dobj.Display();
    iRet = dobj.CountNode();
    console.log("Number of Nodes in LinkedList are : "+iRet);

    // dobj.DeleteFirst();
    // dobj.Display();
    // iRet = dobj.CountNode();
    // console.log("Number of Nodes in LinkedList are : "+iRet);

    // dobj.DeleteLast();
    // dobj.Display();
    // iRet = dobj.CountNode();
    // console.log("Number of Nodes in LinkedList are : "+iRet);

}

main();