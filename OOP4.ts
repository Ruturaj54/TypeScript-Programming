
//***************Object oriented programming*******************
//Encaapsulation achieved

class Demoy
{
    //Characteristics 
    No1 : number;
    No2 : number;
    
    //Constructor is method which gets Automatically when object for class is created
    constructor(A : number,B : number)//Parameterized Constructor
    {
        console.log("Inside Parameterized Constructor");
        this.No1 = A;
        this.No2 = B;
    }

    //Behaviour
    Display()
    {
        console.log("Inside Display function of Demo Class");
    }
}

var obj1 = new Demoy(10,11);
var obj2 = new Demoy(20,21);

obj1.Display();
console.log(obj1.No1);
console.log(obj1.No2);

obj2.Display();
console.log(obj2.No1);
console.log(obj2.No2);


