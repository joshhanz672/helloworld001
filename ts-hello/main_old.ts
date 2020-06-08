/*
function log(message)
{
    console.log(message);
}

var message = 'Hello World';

log(message);

*/

//var number = 1;

/*
function doSomething()
{
    for (var i = 0; i < 5; i++)
    {
        console.log(i);
    }

    console.log('Finally:  ' + i);
}

doSomething();
*/

/*
let a: number;
let b: Boolean;
let c: String;
let d: import("dns").AnyARecord;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color{ Red = 0, Green = 1, Blue = 2};
let backgroundColor = Color.Red;
*/

/*
let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');
*/

// Arrow functions
/*
let log = function(message)
{
    console.log(message);

}

let doLog = (message) => {
    console.log(message);
}

*/

//interfaces
// with inline annotation



class Point {


    constructor(private x?: number, private y?: number)
    {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getX()
    {
        return this.x;
    }

    getY()
    {
        return this.y;
    }
}

let point = new Point(1,2);


point.draw();






