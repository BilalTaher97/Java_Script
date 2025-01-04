

//1
function PrintInfo(numberchild, location, partnername, jobtitle) {

    console.log(`You will be a ${jobtitle} in ${location}, and married to ${partnername} with ${numberchild}`);

}

PrintInfo(3, 'Irbid', 'Aseel', 'Software developer');

//2
function CalcAge(Age) {

    console.log(Age * 7);

}

CalcAge(4);

//3
function calculateSupply(age, amount) {
    let cups = (100 - age) * 365 * amount;
    console.log("You will need " + cups + " to last you until the ripe old age of " + "100");
}
calculateSupply(30, 3);



//4
function greet(name) {

    console.log('Hello ' + name);

}

greet('Bilal');

//5
function double(x) {
    return 2 * x;
}


console.log(double(7));

console.log(double(7));



//6
function double1(x) {
    return 2 * x;
}

function double2(x) {
    return 2 * x;
}

function double3(x) {
    return 2 * x;
}


//7 
function Cube(num) {
    console.log(num ** 3);
}

Cube(4);


//8

function Multi(num1, num2) {
    return num1 * num2;
}

console.log(Multi(3, 4));

//9 

function CanIgetDrivingLicense(Age) {
    if (Age >= 21) {
        console.log('Yes you can')
    }
    else {
        let After = 21 - Age;
        console.log('Please come back after ' + After + ' years to get one');

    }
}

CanIgetDrivingLicense(18);


//10
function SameLength(s1, s2) {

    if (s1.length == s2.length) {
        console.log('True');
    }
    else {
        console.log('False');
    }

}

SameLength('Khalid', 'Bilal');


//11

function MaxNum(num1, num2) {
    if (num1 > num2)
        return num1;
    else if (num2 > num1)
        return num2;
    else
        return 0;
}

console.log(MaxNum(5, 9));


//12
function MinNum(num1, num2, num3) {
    if (num1 < num2 && num1 < num3)
        return num1;
    else if (num2 < num1 && num2 < num3)
        return num2;
    else
        return num3;
}


console.log(MinNum(34, 67, 22));

//13 

function shorterString(s1, s2, s3, s4, s5) {

    const Arrstring = [s1, s2, s3, s4, s5];

    Arrstring.sort(function (a, b) {

        return a.length - b.length;
    })

    return Arrstring[0];
}

console.log(shorterString('add', 'sfgsg', 'erte', 'rewrfwe', 'ads'));


//14
function LongerString(s1, s2, s3, s4, s5) {

    const Arrstring = [s1, s2, s3, s4, s5];

    Arrstring.sort(function (b, a) {

        return a.length - b.length;
    })

    return Arrstring[0];
}

console.log(LongerString('add', 'sfgsg', 'erte', 'rewrfwe', 'ads'));


//15
function IsEven(num) {

    if (num % 2 == 0)
        return true;
    else
        return false;

}

console.log(IsEven(2));

//16
function IsOdd(num) {

    if (num % 2 != 0)
        return true;
    else
        return false;

}

console.log(IsOdd(3));


//17
function positive(num) {
    // return Math.abs(num);
    //or
    return num * -1;
}

console.log(positive(-11));


//18

function fullName(first, last) {
    return first + ' ' + last;
}

console.log(fullName('Bilal', 'Taher'));


//19 
function Avg(n1, n2, n3, n4, n5) {
    let Sum = n1 + n2 + n3 + n4 + n5;

    return Sum / 5;
}

console.log(Avg(1, 5, 8, 4, 6));

//20

function Random() {
    return Math.random();
}

console.log(Random());

//21 
function Randombetween(max, min) {
    let num = Math.random() * (max - min) + min;

    return Math.floor(num);
}

console.log(Randombetween(12, 33));

//22
function scoreInUniversty(Grade) {

    if (Grade < 50)
        return 'F';
    else if (Grade >= 50 && Grade <= 69)
        return 'D';
    else if (Grade >= 70 && Grade <= 84)
        return 'C';
    else if (Grade >= 85 && Grade <= 94)
        return 'B';
    else if (Grade >= 95 && Grade <= 100)
        return 'A';

}

console.log(scoreInUniversty(97));


//23
let Count =0;
function counter()
{
  return ++Count;
}


console.log(counter());
console.log(counter());
console.log(counter());

//24 
function resetCounter()
{
    return --Count;
}

console.log(resetCounter());
console.log(resetCounter());
console.log(resetCounter());
;