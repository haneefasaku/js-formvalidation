const name = "jamsheer"
const age  = 25;
const email = "jamshe123@gmail.com";
const phoneNumber = "+917736252912"
const password = "Jamshe@1";
const confirmPassword = "Jamshe@1";

if(!name){
    console.log("name cannot be empty");
}
if(name.trim()===""){
    console.log("name cannot be empty");
}
if(name.length > 30){
    console.log("The name is too long")
}
if(!age){
    colsole.log("age canot be empty");
}
if(!Number.isInteger(age)){
    console.log("invalid age");
}
if(age < 1 || age > 120){
    console.log("Invalid age");
}

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!regex.test(email)){
    console.log("email is not valid");
}

const phoneRegex =/^\+?(\d{2})?[ -]?\d{3}[ -]?\d{3}[ -]?\d{4}$/;
if(!phoneRegex.test(phoneNumber)){
    console.log("phone number invalid");
}

const regexPassoword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{}|\\[\]:;"'<>,.?/]).{6,}$/;
if(!regexPassoword.test(password)){
    console.log("password is invalid");
}
const regexConfirmpassoword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{}|\\[\]:;"'<>,.?/]).{6,}$/;
if(!regexConfirmpassoword.test(confirmPassword)){
    console.log("password is invalid");
}
if(password !== confirmPassword){
    console.log("password is not match")
}