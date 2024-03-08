var Nodex = /** @class */ (function () {
    function Nodex(A) {
        this.Data = A;
        this.next = null;
    }
    return Nodex;
}());
var DSA = /** @class */ (function () {
    function DSA() {
        this.Count = 0;
        this.Head = null;
    }
    DSA.prototype.InsertFirst = function (No) {
        var newn = new Nodex(No);
        newn.Data = No;
        newn.next = null;
        if (this.Head === null) {
            this.Head = newn;
        }
        else {
            newn.next = this.Head;
            this.Head = newn;
        }
        this.Count++;
    };
    DSA.prototype.InsertLast = function (No) {
        var newn = new Nodex(No);
        newn.Data = No;
        newn.next = null;
        var temp = this.Head;
        if (this.Head === null) {
            this.Head = newn;
        }
        else {
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = newn;
        }
        this.Count++;
    };
    DSA.prototype.DeleteFirst = function () {
        if (this.Head === null) {
            console.log("The Linked List is already Empty....");
            return;
        }
        else {
            this.Head = this.Head.next;
            this.Count--;
        }
    };
    DSA.prototype.DeleteLast = function () {
        var temp = this.Head;
        if (this.Head === null) {
            console.log("The Linked List is already Empty....");
            return;
        }
        else {
            while (temp.next.next != null) {
                temp = temp.next;
            }
            temp.next = null;
            this.Count--;
        }
    };
    DSA.prototype.Display = function () {
        var Temp = this.Head;
        var Str = "";
        while (Temp != null) {
            Str = Str + Temp.Data + " " + "-->";
            Temp = Temp.next;
        }
        console.log(Str + "null");
    };
    DSA.prototype.InsertAtPos = function (No, iPos) {
        var newn = new Nodex(No);
        var i;
        var iSize = this.CountNode();
        var Temp = this.Head;
        newn.Data = No;
        newn.next = null;
        if (iPos < 1 || iPos > (iSize + 1)) {
            console.log("Invalid Position !!! ");
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
                for (i = 1; i < iPos - 1; i++) {
                    Temp = Temp.next;
                }
                newn.next = Temp.next;
                Temp.next = newn;
                this.Count++;
            }
        }
    };
    DSA.prototype.DeleteAtPos = function (iPos) {
        var iSize;
        iSize = this.CountNode();
        var Temp = this.Head;
        var i;
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
                for (i = 1; i < iPos - 1; i++) {
                    Temp = Temp.next;
                }
                Temp.next = Temp.next.next;
                this.Count--;
            }
        }
    };
    DSA.prototype.CountNode = function () {
        return this.Count;
    };
    return DSA;
}());
function main() {
    var dobj = new DSA();
    var iRet;
    dobj.InsertFirst(101);
    dobj.InsertFirst(51);
    dobj.InsertFirst(21);
    dobj.InsertFirst(11);
    dobj.InsertLast(10001);
    dobj.Display();
    iRet = dobj.CountNode();
    console.log("Number of Nodes in LinkedList are : " + iRet);
    dobj.InsertAtPos(5001, 3);
    dobj.Display();
    iRet = dobj.CountNode();
    console.log("Number of Nodes in LinkedList are : " + iRet);
    dobj.DeleteAtPos(3);
    dobj.Display();
    iRet = dobj.CountNode();
    console.log("Number of Nodes in LinkedList are : " + iRet);
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
