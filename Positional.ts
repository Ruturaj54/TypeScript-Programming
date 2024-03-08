//********* Positional/Required Argument of Function*********************

function Display(Name : string,Marks : number,Age : number): void
{
    console.log("Name of Student is : "+Name);
    console.log("Marks are : "+Marks);
    console.log("Age is : "+Age);

}

Display("Sagar",89,26);

Display("Jignesh",99,23);

//Display("Amit",57); error will be generated because the 3rd argument should be given;
//Display(67,"Amit",16);Error will generate because the position is not accurate 