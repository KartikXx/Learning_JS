const accountId = 10006 //value cannot be changed
let accountEmail = "abcd@gmail.com" //value can be changed | Part of modern JS es6
var accountPassword = "qwerty123" //value can be changed | Part of es5
accountEmail = "qwerty@gmail.com"
accountPassword = "1234"
accountCity = "Bengaluru" //we can assign variables without specifying data type:)
// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
console.table([accountEmail, accountId, accountPassword, accountCity])
//console.table shows data in tabular form;-;

/* 
prefer not use Var
because of issue in block scope and functional scope
*/