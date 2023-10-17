// ex 1
let num1 = 75
let num2 = 50
if (num1 > num2) {
    console.log("num1 è maggiore di num2");
} else {
    console.log("num2 è maggiore di num1");
}

// ex 2
let num = 15
if (num < 5) {
    console.log("Tiny");
} else if (num < 10) {
    console.log("Small");
} else if (num < 15) {
    console.log("Medium");
} else if (num < 20) {
    console.log("Large");
} else {
    console.log("Huge");
}

// ex 3
for (let i = 0; i <= 10; i++) {
    if (i === 3) {
        continue;
    } else if (i === 8) {
        continue;
    }
    console.log(i);
}

// ex 4
for (let j = 0; j < 15; j++) {
    if (j % 2 === 0) {
        console.log("pari");
    } else {
        console.log("dispari");
    }
    console.log(j);
}

// ex facoltativo 1
let numInt = 2
let numInt2 = 6
if ((numInt === 8) || (numInt2 === 8)) {
    console.log("il valore di numInt o numInt2 è uguale a 8");
} else if (numInt + numInt2 === 8) {
    console.log("la somma di numInt e numInt2 è uguale a 8");
} else if ((numInt - numInt2 === 8) || (numInt2 - numInt === 8)) {
    console.log("la sottrazione di numInt e numInt2 è uguale a 8");
} else {
    console.log("nè numInt nè numInt2 sono uguali a 8 e nemmeno la loro somma o sottrazione");
}

// ex facoltativo 2
let totalShoppingCart = 38
if (totalShoppingCart > 50) {
    console.log("il totale che deve essere addebitato all'utente è di " + totalShoppingCart);
} else {
    console.log("il totale che deve essere addebitato all'utente è di " + (totalShoppingCart + 10));
}

// ex facoltativo 3
let totalShoppingCart2 = 40
let isBlackFriday = true
if (totalShoppingCart2 > 50 && isBlackFriday) {
    console.log("il totale che deve essere addebitato all'utente è di " + Math.round((totalShoppingCart2 * 80) / 100));
} else if (totalShoppingCart2 > 50) {
    console.log("il totale che deve essere addebitato all'utente è di " + totalShoppingCart2);
} else if (totalShoppingCart2 < 50 && isBlackFriday) {
    console.log("il totale che deve essere addebitato all'utente è di " + (Math.round((totalShoppingCart2 * 80) / 100) + 10));
} else {
    console.log("il totale che deve essere addebitato all'utente è di " + (totalShoppingCart2 + 10));
}

// ex facoltativo 4
let gender = ""
let isMale = false
if (isMale) {
    gender = "Male"
} else {
    gender = "Female"
}
console.log(gender);

isMale ? gender = "Male" : gender = "Female"
console.log(gender);

// ex facoltativo 5
for (let k = 1; k <= 100; k++) {
    if (k % 3 === 0 && k % 5 === 0) {
        console.log("FizzBuzz");
    } else if (k % 5 === 0) {
        console.log("Buzz");
    } else if (k % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(k);
    }
}