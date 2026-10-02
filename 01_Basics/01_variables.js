const accountId = 144553
let accountEmail = "danyhere@gmail.com" // scope problem isn't any issue here
var accountPassword = "123454321" // used earlier -> OLD hai
accountCity = "Jaipur"  // tareeqa acha nahi hai , but Kaam Chalaau hai
let accountState;   // prints 'UNDEFINED' since, no value is declared


// accountId = 2 --> ** Const keyword can't be changed **

accountEmail = "dandanadan@hotmail.com"
accountPassword = "772680"
accountCity = "Bengaluru"


console.log(accountId);

/*
var mat hi use karo lala -> Prefer 'let' -> it won't create any issue of Functional Issue
*/

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])
