
// Task:2
let personName: string ="Eric";
console.log(`hello ${personName} ,Would you like to learn some Python today?`);

// Task:3

in lowercase
console.log("lowercase:", personName.toLowerCase());

in uppercase
console.log("uppercase:", personName.toUpperCase());

title case
console.log("titlecase:", personName.replace(/\b\w/g,c=> c.toUpperCase()));

// Task:4

let quote: string = "A person who never made a mistake never tried anything.";
let author: string = "Albert Einstein";

console.log(`${author} once said, "${quote}"`);

// Task:5

let quote: string = "A person who never made a mistake never tried anything.";
let author: string = "Albert Einstein";

console.log(`${author} once said, "${quote}"`);



let famouse_person : string = "Albert Einstein";
let message : string = `${famouse_person} once said, "${quote}"`;

console.log(message);


// Task:6

let personName: string = "\t \n John Doe \t \n";

console.log("Name with whitespace:", personName);

let strippedName: string = personName.trim();

console.log("Stripped name:",strippedName);

// Task:7 & 8

console.log("addition:", 5 + 3);

console.log("subtraction:", 10 - 2);
 
console.log("multiplication:", 4 * 2);

console.log("division:", 64 / 8);

// Task:9

let favoriteNumber: number = 7;

let message: string = (`My favorite number is ${favoriteNumber}.`);


console.log(message);

// Task:10


Program 1: Adding numbers
Author: Muhammad Ibrahim
Date: 19.Feb.2024

let num1: number = 5;
let num2: number = 3;

let sum: number = num1 + num2;

console.log("The sum of", num1, "and", num2, "is", sum);

Program 2: Greeting massage
Author: Muhammad Ibrahim
Date: 19.Feb.2024

let personName: string = "John Doe";

let greeting: string = `Hello ${personName}.`;

console.log(greeting);

// Task:11

let names: string[] = ["Salman", "Asif", "Mujahid", "Ubaid"];

for (let i = 0; i < names.length;i++) {
    console.log("Friend", i + 1,":", names[i]);

}


// Task:12

let names: string[] = ["Salman", "Asif", "Mujahid", "Ubaid"];

let greetingMessage: string = "Hello, ";


for (let i = 0; i < names.length; i++) {
   console.log(greetingMessage + names[i] + "!");
    
}


// Task:13


let modesOfTransportation: string[] = [
   "car", "motorcycle", "bicycle", "bus"];

for (let i = 0; i < modesOfTransportation.length; i++) {
   console.log("I would like to own a", 
    modesOfTransportation[i] + ".");
    
}


// Task:14


let guestList: string [] = ["Salman", "Asif", "Mujahid", "Ubaid"];

for (let i = 0; i < guestList.length; i++) {
   console.log("Dear", guestList[i] + ",");
    
   console.log("You are cordially invited to dinner at my place!");
    console.log("Looking forward to seeing you there. \n");

}



// Task:15


let guestList: string [] = ["Salman", "Asif", "Mujahid", "Ubaid"];

let guestNotAttending: string = "Ubaid";
console.log(guestNotAttending + " can't make it to the dinner");


let indexOfGuestNotAttending: number = guestList.indexOf(guestNotAttending);

if (indexOfGuestNotAttending !==-1) {

  let newGuest: string = "Kashif";

    guestList.splice(indexOfGuestNotAttending, 1, newGuest);

    console.log("\nSecond set of invitation messages:"); 

   for (let i = 0; i < guestList.length; i++) {
       console.log("Dear " + guestList[i] + ",");
        
       console.log("You are cordially invited to the dinner at my place!");
       console.log("Looking forward to seeing you there.\n");

        
    }

}else { 
   console.log("The guest who can't make it is not on the original list.");

}



// Task:16


let guestList: string [] = ["Salman", "Asif", "Mujahid", "Kashif"];

console.log("Great news! we found a bigger dinner table!");

guestList.unshift("Syed Hamaz");

guestList.splice(Math.floor(guestList.length /2), 0, "Sir Zia Khan");

guestList.push("Mehak Alamgir");

console.log("\nNew set of invitation messages:");
for (let i = 0; i < guestList.length; i++){
   console.log("Dear " + guestList[i] + ",");
   console.log("You are cordially invited at my place!");
   console.log("Looking forward to seeing you there.\n");
}


// Task:17

let guestList: string[] = ["Salman", "Mujahid", "Asif", "Kashif", "Syed Hamaz", "Sir Zia Khan", "Mehak Alamgir"];

console.log("Unfortunately, we can only invite two people for dinner.");

while (guestList.length > 2) {
   let removedGuest: string = guestList.pop()!;
    console.log("Sorry, " + removedGuest + ", We can't invite you to dinner.");
}

for (let i = 0; i <guestList.length; i++) {
   console.log("Dear " + guestList[i] + ",");
    console.log("You are still invited to dinner at my place!");
}

guestList.splice(0, guestList.length);

console.log("Uptadet guest list:", guestList);


// Task:18

let placesToVisit: string[] = ["Saudi Arabia", "Turkey", "Japan", "South Korea", "China"];

console.log("Original order:", placesToVisit);

console.log("Alphabetical order:",
[...placesToVisit].sort());

console.log("Original order:", placesToVisit);

console.log("Reverse alphabetical order:",
[...placesToVisit].sort().reverse());

console.log("Original order:", placesToVisit);
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);

placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

placesToVisit.sort(
   (a, b)=> b.localeCompare(a)
);
console.log("Sorted in reverse alphabetical order:", placesToVisit);


// Task:19


let invitation: string [] = ["Salman", "Mujahid"];
let count_invitations: number = invitation.length;

console.log(`${count_invitations} people will come to the dinner.`);


// Task:20


let country: string[] = ["Pakistan", "Palestine","Japan", "China"];
console.log("List of countries:");
console.log(country);


// Task:21


let person: {name: string, fname: string, age: number} = {name:"Muhammad Ibrahim", fname:"Male", age: 18};
console.log(person);


// Task:22


let days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(days[7]);
console.log(days[6]);


// Task:23


let car = "subaru";

console.log("is car == 'subaru'? predict true")
console.log(car == 'subaru')

console.log("is car != 'honda city'? predict true")
console.log(car != 'honda city')

console.log("is car == 'Subaru'? predict false")
console.log(car == 'Subaru')

console.log("is car == 'SUBARU'? predict false");
console.log(car == 'SUBARU');

console.log("is car.length == 6? predict true")
console.log(car.length == 6)


console.log("is car.length == 10? predict true")
console.log(car.length != 10)

console.log("is 10 > 45 ? predict false")
console.log(10 > 45)


console.log("is 3 <= 2 ? predict false")
console.log(3 <= 2)


console.log("is 72 >= 83 ? predict false")
console.log(72 >= 83)


console.log("is car == 'subaru' && car.length ==6? predict true")
console.log(car == 'subaru' && car.length == 6)



// Task:24


let name_1 : string = "ibrahim";
let name_2 : string = "muhammad ibrahim";
let name_3 : string = "mr muhammad ibrahim";

if (name_1 == name_3){
  console.log("names are equal")
}else{
  console.log("names are not equal")
}

if (name_1 != name_2){
  console.log("names are equal")
}

if (name_1 != name_3){
  console.log("names are equal")
}


let age_1 : number = 18
let age_2 : number = 22

if (age_1 == 18){
  console.log("eligibal for vote")
}


 if (age_1 != 22){
   console.log("eligibal for vote in older category")
}



if (age_1 <= age_2){  //less
  console.log("younger")
}

if (age_2 >= age_1){  //greater
  console.log("older")
}


if (age_1 == 18 && age_2 == 22){
  console.log("person is eligibal for vote")
}


if (age_1 == 18 || age_2 != 22){
  console.log("person is not eligibal for vote")
}

 let country : string[] = ["pakistan", "palestine", "afghanistan", "japan"]
if (country.push("pakistan")){
console.log("pakistan is in country list")
}


if (country.push ("america")){
  console.log("america in not include in an array")
}



// Task:25

let alein_color = "green"

if (alein_color == "green")
console.log("you earn 5 points")

let alein_color : string = "red"
if(alein_color == "green")
console.log("no output")



// Task:26


let alein_color = "green"

 if (alein_color == "green"){
 console.log("player just earned 5 points for shooting the alein")
}else{
   console.log("player just earned 10 points")
}
  


let alein_color = "red"

 if (alein_color == "green"){
 console.log("player just earned 5 points for shooting the alein")
}else{
   console.log("player just earned 10 points")
}



// Task:27


let alein_color : string =  "red"

if (alein_color == "green"){
console.log("you just earned 5 points")
}else if (alein_color == "yellow"){
  console.log("you just earned 10 points")
}else {
  console.log("you just earned 15 points")
}



// Task:28


let age : number = 100

if(age < 2){
  console.log("you are a baby")
}else if (age < 4){
   console.log("you are a toddler")

}else if (age < 13){
  console.log("you are a kid")

}else if (age < 20){
  console.log("you are a teenager")

}
else if (age < 65){
  console.log("you are a adult")

}else{
  console.log("you are older")
 }


// Task:29


let favorite_fruits : string[] = ["kivi", "orange", "apples"]

if (favorite_fruits.push("kivi")){
  console.log("kivi")
}


if (favorite_fruits.push("peach")){
  console.log("you really like bananas")
}


if (favorite_fruits.push("orange")){
  console.log("orange")
}

if (favorite_fruits.push("berry")){
  console.log("you really like bananas")
}


if (favorite_fruits.push("apples")){
  console.log("apples")
}


// Task:30


let users : string [] = ["admin","eric", "salman", "asif", "kashif"]

for(let user of users){
  if (user === "admin"){
    console.log("hello admin, would you like to see a status report")
  }else{
    console.log(`Hello ${user}, thank you for logging in again`)
  }

}


// Task:31



 let users : string [] = ["admin","eric", "salman", "asif", "kashif"]

if (users.length === 0){
  console.log("We need to find some users")
}else{
for(let user of users){
  if (user === "admin"){
    console.log("hello admin, would you like to see a status report")
  }else{
    console.log(`Hello ${user}, thank you for logging in again`)
  }
}
}


// Task:32

let current_users : string [] = ["admin", "Eric", "Ali", "Hamza", "fatima"]
let new_users : string [] = ["admin", "fatima", "Aliza", "Haseeb", "Noor"]

let current_users_lower : string [] = current_users.map(user => user.toLowerCase())


for (let new_user of new_users){
  if (current_users_lower.push (new_user.toLowerCase())){
    console.log(`Sorry ${new_user}, that name is taken`)
  }else {
    console.log(`Yes ${new_user}, is still in avaliable list`)
  }
}


// Task:33

let numbers : number [] = [1,2,3,4,5,6,7,8,9,]

for (let number of numbers){
  if (number === 1){
    console.log(`${number}st`)

  }else if (number === 2){
    console.log(`${number}nd`)

  }else if (number === 3){
    console.log(`${number}rd`)
  }else{
    console.log(`${number}th`)
  }
}



// Task:34



let favorite_pizza : string [] = ["pepperoni", "chicken", "veg"]

for (let pizza of favorite_pizza){
console.log(pizza)

}
console.log("\n")

for (let pizza of favorite_pizza){
  console.log(`I really like ${pizza} Pizza!`)
}

console.log("\n I really love pizza!")



// Task:35


let animals : string [] = ["cat", "lion", "dog"]

for (let animal of animals){
  console.log(animal)
}
console.log("\n")

for (let animal of animals){
  console.log(`A ${animal} has a tail`)
}

console.log("\n all of these are great pets! but i love cats more.")



// Task:36


function makeShirt(size: string, text: string): void{
  console.log(`\n you order a ${size} shirt that says ${text}`)
};

makeShirt('large', '"i love typescript"');
makeShirt('medium', '"i need a big shirt"');


 
// Task:37


function makeShirt(size: string = 'large', text : string = 'I love typescript'): void{
  console.log(`you have order a ${size}, shirt that says ${text}`)
};

makeShirt();
makeShirt('medium');

console.log("\n")
//different message
makeShirt('small', 'I need a big shirt to wear');


// Task:38


function describe_city(city: string, country: string = 'Pakistan'): void{
  console.log(`${city} is in ${country}`)
};

describe_city('Karachi'); // default sentence
describe_city('France', 'Europe');
describe_city('Lahore', 'Pakistan');


// Task:39


function cityCountry(city: string, country: string): string{
  return`${city}, ${country}`
};

let country1 = cityCountry('Lahore', 'Pakistan');
let country2 = cityCountry('Tokyo', 'Japan');
let country3 = cityCountry('Paris', 'France');


console.log(country1);
console.log(country2);
console.log(country3);


// Task:40


function makeAlbum (artist: string, title: string): {artist: string, title: string}{
  const dictionaries = {
    artist: artist.charAt(0).toUpperCase() + artist.slice(1),
    title: title.charAt(0).toUpperCase() + title.slice(1)
  };
  return dictionaries;
  
}

let album = makeAlbum("Ali", "Light");
console.log(album);

album = makeAlbum("Bilal", "Red wave");
console.log(album);

album = makeAlbum("Hamza", "Stun");
console.log(album);


// Task:41


  function show_magicians(magicians: string[]): void{

for (const magician of magicians){
  console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
};

};

  const magician: string[] = ["salman", "kashif", "ubaid"];
  show_magicians(magician);


// Task:42


function make_great(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++){
    magicians[i] = magicians[i]  + ' the great'
  } 
}


const magicians2: string[] = ["salman", "kashif", "ubaid"];
make_great(magicians2);
console.log(magicians2);


// Task:43



function make_great2(magicians: string[]): string[] {
  const greatMagicians: string[] = [];
  for (let i = 0; i < magicians.length; i++) {
    greatMagicians.push(magicians[i] + ' the Great');

  }
  return greatMagicians;

}

const magicians3: string[] = ["salman", "kashif", "ubaid"];


const greatMagicians2: string[] = make_great2(magicians3);

console.log(magicians3);
console.log(greatMagicians2);


// Task:44


function sandwich(...items: string[]): void{
  console.log("Sandwich order:")
  
    for (let i = 0; i < items.length; i++){
      console.log(`- ${items[i]}`)
    }
}

console.log("Enjoy your sandwich Muhammad Ibrahim");

sandwich('capsicum', 'tomato', 'chicken');
sandwich('beef', 'cheese');
sandwich('garlic chicken', 'mayo sauce');


// Task:45



type car ={
  manufacture: string
  model: string
  [key: string]: any;

}

function createCar(manufacture: string, model: string, optional: Record<string,any>): car{
  return{
    manufacture,
    model,
    ...optional
  }
}

const mycar : car = createCar("toyota", "corolla", {color : "silver", year : "2024"})
console.log(mycar)








