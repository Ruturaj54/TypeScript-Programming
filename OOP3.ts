
//***************Object oriented programming*******************
//Encaapsulation achieved

class Demox
{
    //Characteristics 
    No1 : number;
    No2 : number;
    
    //Constructor is method which gets Automatically when object for class is created
    constructor()//Default Constructor
    {
        console.log("Inside Default Constructor");
        this.No1 = 0;
        this.No2 = 0;
    }

    //Behaviour
    Display()
    {
        console.log("Inside Display function of Demo Class");
    }
}

var obj = new Demox();

obj.Display();
console.log(obj.No1);
console.log(obj.No2);