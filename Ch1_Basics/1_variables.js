const accountId = 144553
let accountEmail = "manjunath@google.com"
var accountPassword = "12345"
accountCity = "Belgaum"
let accountState;

// accountId = 2 // not allowed


accountEmail = "Mk@all.com"
accountPassword = "21212121"
accountCity = "Mysore"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])