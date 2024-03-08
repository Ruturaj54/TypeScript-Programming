function Displayx() {
    var Data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Data[_i] = arguments[_i];
    }
    console.log("Number of elements are : " + Data.length);
}
Displayx();
Displayx(11, 21, 51);
Displayx(11, 21, 51, 101);
Displayx(11, 21, 51, 101, 111);
