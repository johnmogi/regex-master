const readline = require("readline");

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// const regex = /^$/;

// {solved1:}
terminal.question("Enter a your credit card: (12 or 16 digits): ", cCard => {
const regex = /^\d{12}|\d{16}$/;
    if(regex.test(cCard)) {
        console.log("Your credit card is legal.");
    }
    else {
        console.log("Your credit card isn't legal.");
    }
    terminal.close();
});

// const regex = new RegExp("^AB.C$");
// const regex = /^([01]\d|2[0-3])(:[0-5]\d){2}$/;

terminal.question("Enter a your Email: ", email => {
    const regex = /^\w{1,30}@\w{1,30}\.\w{3,4}$/;
    // chars@chars.chars 
        if(regex.test(email)) {
            console.log("Your Email is legal.");
        }
        else {
            console.log("Your Email isn't legal.");
        }
        terminal.close();
    });

terminal.question("Enter a your full name: ", name => {
    const regex = /^\w{2,}\s\w{2,}$/;
    // chars@chars.chars 
        if(regex.test(name)) {
            console.log("Your name is legal.");
        }
        else {
            console.log("Your name isn't legal.");
        }
        terminal.close();
    });


