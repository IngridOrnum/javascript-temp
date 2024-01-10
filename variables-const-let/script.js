// When using const, you cannot change the variable: const CURRENCY = 'NOK'
let CURRENCY = "NOK";

CURRENCY = "USD";
console.log(CURRENCY);

CURRENCY = "ZAR";
console.log(CURRENCY);

CURRENCY = "DIGE Coin";
console.log(CURRENCY);

//----------------------------------------------------------------------------------------

let name = "Kenneth";
let teacherName = "Hesh";
let teacherFriendName = "Monde";

name = "Erica"; // Because we changed the name, we get Erica. Not Kenneth.

//----------------------------------------------------------------------------------------

// Using uppercase is a way of saying that these variables should NOT be changed.

const API_URL = "http://api.example.com/data";
const PORT = 8080;
const MAX_CONNECTIONS = 4;

//----------------------------------------------------------------------------------------

