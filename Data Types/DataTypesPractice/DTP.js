// // These exercises are for you to practice
//     // The file is sperated into strings, arrays, objects, and booleans.
//     // HOWEVER there will sometimes be overlap (for example turning a string into an array and back)
//     // 💥🥳 Have fun! 🥳🔥

// // Strings
//     // log a string to the console
//     var love = "I love to eat lot's of pizza";
//     // console.log(love);  

//     // Turn the string "I love to eat lots of pizza." into an array of words aka: ['I', 'love', 'to', 'eat', 'pizza!'].
//     var arrlove = love.split(" ");
//     // console.log(arrlove);

//     // Extract the first 4 letters from a string
//     var love = "I love to eat lot's of pizza";
//     // var arr2 = love.slice(0,5)
//     // console.log(arr2);
    
//     // Extract the last 4 letters from a string
//     var love = "I love to eat lot's of pizza";
//     var numbers = love.length;
//     var arr2 = love.slice(24, 28);
//     console.log(arr2);

//     // Extract all letters before ':' in the string 'Address: 1600 Pennsylvania Ave NW, Washington, DC 20500"
//     var address = "Address: 1600 Pennsylvania Ave NW, Washington, DC 20500"
//     var Placearr = address.split(':'); //split turns a string into an array. once its an array you can access any i with brackets.
//     Placearr[0]; //you're targetting the specific i number.
//     console.log(Placearr[0]);

//     // Extract all letters after ':' in the string 'Address: 1600 Pennsylvania Ave NW, Washington, DC 20500"
//     var Placearr = address.split(':'); //split turns a string into an array. once its an array you can access any index with brackets.
//     Placearr[1]
//     console.log(Placearr[1]);

//     // Convert your name into an abbreviation
//         // Input: "Nic Leask"
//         // Output: "Nic L"
//             // Try and make it dynamic, swap out your name with other names and see what you get
// // first solution   
//     // var Name = 'Natalie Martinez'
//     // var Name2 = Name.slice(0,3);
//     // var Name3 = Name.slice(8,11);
//     // console.log(Name2 + " " + Name3);

//     var Name = 'Natalie Martinez'
//     var Namearr = Name.split(' ');
//     var Name3 = Namearr[0];
//     var Nat1 = Name3.slice(0,3);

//     var Name4 = Namearr[1];
//     var Nat2 = Name4.slice(0,3);

//     // var Name4 = Name3.slice(0,3);
//     // var Name3 = Name.slice(8,11);
//     console.log(Nat1 + " " + Nat2);
//     let name = "Ronald Vilorio";
//     let newName = name.split(" ")[0] +" "+ name.split(" ")[1][0]
//     console.log(newName)
    
    // Convert your full name into your initials
        // Input: "Nicholas Paul Norman Leask"
        // // Output: "NPNL"
        // var Fullname = 'Natalie Isabel Vazquez Martinez'
        // var Newnamearr = Fullname.split(' ');
        // var NIVM = Newnamearr [0][0] + Newnamearr [1][0] + Newnamearr [2][0] + Newnamearr[3][0];
        // console.log(NIVM);
        
            // Try and make it dynamic, swap out your full name with other names and see what you get

    // Protect an email address
        // input: nicholas@nebulaacademy.com
        // output: nic...@n...y.com

    // Protect a phone number
        // input: 555-444-1234
        // output: 5##-###-##34
    
//________________________________________________________________________________________________________________

// Arrays
    // log an array to the console

    // get the length of an array

    // get the first item in an array

    // get the last item in an array

    // get the first n elements (values) of an array 
        // var array = ['a','b','c','d','e','f','g']
        // n = 3
        // output = ['a', 'b', 'c']

    // get the last n elements of an array
        // n = 3 
        // output  = ['e','f','g']

//     // Concatinate all elements in an array into one long string

//     // Swap uppercase for lowercase 
//         // Input: "Hi Neil!"
//         // Output: "hI nEIL!"

//     // Multiply all the numbers of an array together
//         // input: arr = [ 0, 1, 2, 3, 4, 5]  
//         // output: 0

//         // input: arr = [2, 4, 6, 8]
//         // output: 384
// //________________________________________________________________________________________________________________

// // Objects

//     // crate an object with 3 key-value pair and log the full object to the console

//     // log one key-value pair to the console

//     // create a car object which as a key-value pair of moving:true or moving:false
//         // write an if statement that checks the key value pair and if it is true then log "the car is in motion" and if false "sitting still"

//     // 

// // for (let index = 0; index < .length; index++) {
// //     const element = array[index];
    
// // }
// var arrayOfSheep = [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true ];


// function countSheeps(arrayOfSheep) {
//     for (let index = 0; index <arrayOfSheep.length; index++) {
//        }
    
//     }return arrayOfSheep.filter((x) => x === true).length;
//  console.log(countSheeps(arrayOfSheep));
// function repeat(string,times) { var output = ""
// for(var i = 0; i < times; i++) { output += string }
// return output }
// repeat("Hello world!",2) // "Hello world!Hello world!"

// function repeatStr (n, s) {
//     return s.repeat(n);
// }


// function repeatStr (n, s) {
//     var finalstr = '';

//     for (var i = 0; i < n; i++){
//         finalstr = finalstr+s;
//     }

//     return finalstr;
// }

// console.log(repeatStr(6, 'hi'))






// function noSpace(x){
//     return x.split(' ').join('')
// }

// console.log(noSpace('he llo wo rld'));

// if (condition) {
    
// // }
// function name(params) {
//     for (let i = 0; i < args.length; i++) {
//         const element = array[i];
//  var str = ('world')
// function solution(str){
//   str.split(' ').push('row')
//   }
// console.log(str);
// Ex: n=5 returns 5+4+3+2+1=15

//function summation(num) {
//     // loop up to num adding the index each time
//     var totalsum = 0
//     for (i=0; i<=num; i++){
//         totalsum = totalsum + i
// // totalsum = 0 + 0
// // totalsum = 0 + 1
// // totalsum = 1 + 2
// // totalsum = 3 + 3
// // totalsum = 6 + 4
// // totalsum = 10 + 5
//     }
//     return totalsum
// }
//   console.log(summation(5));
//   console.log(summation(10));
//   console.log(summation(8));

var fruits = ['apple', 'banana', 'orange', 'pineapple', 'kiwi']

function fruta(foods){
    
    var totalfruits = 0;

    for (var i = 0; i < foods.length; i++){

        totalfruits = totalfruits + 1;
    }
    return totalfruits;
}

console.log(fruta(fruits))