const page = document.body;
const passwordLength = document.getElementById("passwordLength");
const includeSpecial = document.getElementById("includeSpecial");
const includeNumbers = document.getElementById("includeNumbers");
const includeLowercase = document.getElementById("includeLowercase");
const includeUppercase = document.getElementById("includeUppercase");

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const lcalphabet = Array.from(alphabet);
const ucalphabet = Array.from(alphabet.toUpperCase());
const spcchars = ["!", "@", "#", "$", "%", "&", "*", ".", "-", "+", "=", "<", ">", "/", "?"];

const randint = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const range = (start, end) => {                                                                                                          
    let result = [];                                                                                                                    
    for (let i = start; i <= end; i++) {  // Adjusted range to include the end number
        result.push(i);                                                                                                                 
    }                                                                                                                                   
    return result;                                                                                                                      
}                                                                                                                                       

const generatePassword = () => {                                                                                                         
    let strings = [];                                                                                                                    
    let password = "";                                                                                                                  
    if (includeSpecial.checked) { strings.push("spc"); }                                                                                 
    if (includeLowercase.checked) { strings.push("lcl"); }                                                                               
    if (includeUppercase.checked) { strings.push("ucl"); }                                                                               
    if (includeNumbers.checked) { strings.push("num"); }                                                                                 
    
    // Ensure password length is based on the input
    range(1, parseInt(passwordLength.value)).forEach(x => {                                                                              
        const next_item = strings[randint(0, strings.length - 1)];  // Fixed index range
        
        if (next_item === "spc") { 
            password = `${password}${spcchars[randint(0, spcchars.length - 1)]}`;  // Ensure valid index range
        } 
        if (next_item === "lcl") { 
            password = `${password}${lcalphabet[randint(0, lcalphabet.length - 1)]}`;
        }
        if (next_item === "ucl") { 
            password = `${password}${ucalphabet[randint(0, ucalphabet.length - 1)]}`;
        }
        if (next_item === "num") { 
            password = `${password}${randint(0, 9)}`;
        }                                                                                                                                   
    });

    document.getElementById("passwordLabel").textContent = password;                                                                     
}                                                                                                                                       

generatePassword();                                                                                                                      
document.getElementById("generateButton").addEventListener("click", generatePassword);

