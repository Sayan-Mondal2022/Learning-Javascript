// Variables in JavaScript:

const accountId = 1045
let accoundEmail = "samo22csaiml@cmrit.ac.in"
var acccountPassword = "124578"
accountCity = "Bengaluru"  // This is possible but not recommended.
let accountState; // By default it will be undefined.

// accountId = 45; // Changes are not allowed if the variable is a constant
console.log(accountId);

console.table([accountId, accoundEmail, accountCity, acccountPassword, accountState])

/*
    Prefer not to use var 
    because of the use in Block scope and the functional scope.
*/
