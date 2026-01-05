const accountId = 123456;
let accountEmail = "gautamsharma@google.com";
var accountPassword = "232425";
accountCity = "Meerut";
let accountState;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
