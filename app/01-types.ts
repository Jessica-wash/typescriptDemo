//  1           2           3
let username: string = 'Jessica';
let password: string = 'weewoo';
let id:       number =     5;
//1 We declare a variable
//2 We declare the variables data type
//3 We initialize the variable with a value and type of the specified data type

let phoneNumber: number;
let email: string;
let ssn: number;
let isMarried: boolean;

//STRING
let companyName: string;
companyName = 'EFA';

//NUMBER
let age: number = 34;
let currentYear: number = 2021;

//BOOLEAN
let isLoggedIn: boolean = true;

//ARRAY
let studentList: string[] = ['Kasey', 'Jason', 'Matt'];
// Generic type
let allScores: Array<number> = [2, 3000, -10]

//ANY
let data: any = '12345';
console.log(data);
console.log(typeof data);

data = 12345;
console.log(data);
console.log(typeof data);


//VOID
function sayHello(): void {
    console.log('Hello');
}

//NULL and UNDEFINED
let undefinedThing: undefined = undefined;
let nullThing: null = null;

//TUPLE
let nameAndId: [string, number];
nameAndId = ["userOne", 1];

//ENUM

enum WeaponType {Sword, Saber, Spear};
let weapon: WeaponType = WeaponType.Sword;
let weaponTwo: WeaponType = WeaponType.Spear;

enum CardType {Ace = 1, Two, Three, Four};
let newCard: string = CardType[2];
console.log(newCard);

//UNION TYPES
let x: number | string;
let y: number | null;

x = 'string';
x = 12;