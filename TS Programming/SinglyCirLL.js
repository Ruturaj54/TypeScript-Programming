var Nodes = /** @class */ (function () {
    function Nodes(A) {
        this.Data = A;
        this.next = null;
    }
    return Nodes;
}());
var SinglyCirLL = /** @class */ (function () {
    function SinglyCirLL() {
        this.Head = null;
        this.Tail = null;
        this.Count = 0;
        this.i = 0;
    }
    SinglyCirLL.prototype.InsertFirst = function (No) {
        var newn = new Nodes(No);
        newn.Data = No;
        newn.next = null;
        if (this.Head == null && this.Tail == null) {
            this.Head = newn;
            this.Tail = newn;
            this.Tail.next = this.Head;
        }
        else {
            newn.next = this.Head;
            this.Head = newn;
            this.Tail.next = this.Head;
        }
        this.Count++;
    };
    SinglyCirLL.prototype.InsertLast = function (No) {
        var newn = new Nodes(No);
        newn.Data = No;
        newn.next = null;
        if (this.Head == null && this.Tail == null) {
            this.Head = newn;
            this.Tail = newn;
            this.Tail.next = this.Head;
        }
        else {
            this.Tail.next = newn;
            this.Tail = newn;
            this.Tail.next = this.Head;
        }
        this.Count++;
    };
    SinglyCirLL.prototype.DeleteFirst = function () {
        if (this.Head == null && this.Tail == null) {
            console.log("The LinkedList is Already Empty...");
            return;
        }
        else if (this.Head == this.Tail) {
            this.Tail = null;
            this.Head = null;
        }
        else {
            this.Head = this.Head.next;
            this.Tail.next = this.Head;
        }
        this.Count--;
    };
    SinglyCirLL.prototype.DeleteLast = function () {
        var Temp = this.Head;
        if (this.Head == null && this.Tail == null) {
            console.log("The LinkedList is Already Empty...");
            return;
        }
        else if (this.Head == this.Tail) {
            this.Tail = null;
            this.Head = null;
        }
        else {
            while (Temp.next != this.Tail) {
                Temp = Temp.next;
            }
            Temp.next = this.Head;
            this.Tail = Temp;
        }
        this.Count--;
    };
    SinglyCirLL.prototype.Display = function () {
        var Temp = this.Head;
        var Str = " ";
        var iSize = this.CountNode();
        for (this.i = 1; this.i <= iSize; this.i++) {
            Str = Str + Temp.Data + " -->";
            Temp = Temp.next;
        }
        console.log(Str + "To First-Node");
    };
    SinglyCirLL.prototype.CountNode = function () {
        return this.Count;
    };
    SinglyCirLL.prototype.InsertAtPos = function (No, iPos) {
        var iSize = this.CountNode();
        var Temp = this.Head;
        var newn = new Nodes(No);
        newn.Data = No;
        newn.next = null;
        if (iPos < 1 || iPos > iSize + 1) {
            console.log("Invalid Position...");
            return;
        }
        else {
            if (iPos == 1) {
                this.InsertFirst(No);
            }
            else if (iPos == iSize) {
                this.InsertLast(No);
            }
            else {
                for (this.i = 1; this.i < iPos - 1; this.i++) {
                    Temp = Temp.next;
                }
                newn.next = Temp.next;
                Temp.next = newn;
                this.Tail.next = this.Head;
                this.Count++;
            }
        }
    };
    SinglyCirLL.prototype.DeleteAtPos = function (iPos) {
        var iSize = this.CountNode();
        var Temp = this.Head;
        if (iPos < 1 || iPos > iSize) {
            console.log("Invalid Position...");
            return;
        }
        else {
            if (iPos == 1) {
                this.DeleteFirst();
            }
            else if (iPos == iSize) {
                this.DeleteLast();
            }
            else {
                for (this.i = 1; this.i < iPos - 1; this.i++) {
                    Temp = Temp.next;
                }
                Temp.next = Temp.next.next;
                this.Tail.next = this.Head;
                this.Count--;
            }
        }
    };
    return SinglyCirLL;
}());
function main() {
    var sobj = new SinglyCirLL();
    var iRet = 0;
    sobj.InsertFirst(101);
    sobj.InsertFirst(51);
    sobj.InsertFirst(21);
    sobj.InsertFirst(11);
    sobj.InsertLast(121);
    sobj.Display();
    iRet = sobj.CountNode();
    console.log("Total Number of Nodes in LinkedList are : " + iRet);
    // sobj.DeleteFirst();
    sobj.InsertAtPos(10001, 3);
    sobj.Display();
    iRet = sobj.CountNode();
    console.log("Total Number of Nodes in LinkedList are : " + iRet);
    sobj.DeleteAtPos(3);
    sobj.Display();
    iRet = sobj.CountNode();
    console.log("Total Number of Nodes in LinkedList are : " + iRet);
}
main();
