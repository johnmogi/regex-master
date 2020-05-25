// RegEx - Regular Expression
// מנוע המכיל שפה לבדיקת מחרוזות
// ניתן לחפש דברים במחרוזת, ניתן לבצע ולידציה על מחרוזת ועוד
// זו שפה שאינה קשורה לשפת תכנות ספציפית
// היא ניתנת לשימוש מכל שפת תכנות מודרנית

const readline = require("readline");

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// const regex = new RegExp("^AB.C$");
// console.log(regex.test("ab123"));
// console.log(regex.test("AB8C"));
// console.log(regex.test("AB123C"));

// // Minimum 6 char password: 
// terminal.question("Enter a password, minimum 6 chars: ", password => {
//     // const regex = new RegExp("^.......*$");
//     const regex = new RegExp("^.{6,}$");
//     if(regex.test(password)) {
//         console.log("Your password is legal.");
//     }
//     else {
//         console.log("Your password isn't legal.");
//     }
//     terminal.close();
// });


// const regex = new RegExp("^AB|C$");
// console.log(regex.test("AB"));
// console.log(regex.test("AC"));
// console.log(regex.test("AD"));

// // Zipcode: 
// terminal.question("Enter a zipcode (5 or 7 digits): ", zipcode => {
//     const regex = new RegExp("^([0-9]{5}|[0-9]{7})$");
//     if(regex.test(zipcode)) {
//         console.log("Your zipcode is legal.");
//     }
//     else {
//         console.log("Your zipcode isn't legal.");
//     }
//     terminal.close();
// });

// // Mobile number:
// terminal.question("Enter a mobile number (05x-xxxxxxx): ", mobile => {
//     // const regex = new RegExp("^05\\d-?\\d{7}$");
//     const regex = /^05\d-?\d{7}$/;
//     // <input type="text" pattern="^05\d-?\d{7}">
//     if(regex.test(mobile)) {
//         console.log("Your mobile is legal.");
//     }
//     else {
//         console.log("Your mobile isn't legal.");
//     }
//     terminal.close();
// });



// Hour in a format of: HH:MM:SS:
terminal.question("Enter an hour in a HH:MM:SS format: ", time => {
    const regex = /^([01]\d|2[0-3])(:[0-5]\d){2}$/;
    if(regex.test(time)) {
        console.log("Your time is legal.");
    }
    else {
        console.log("Your time isn't legal.");
    }
    terminal.close();
});



// console.log("Hello\nAll");
// console.log("Hello\\nAll");

