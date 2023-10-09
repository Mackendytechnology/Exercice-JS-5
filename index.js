function isPositive(num) {
    if (num > 0) {
       return "C'est positif.";
    } else if (num < 0) {
       return "C'est négatif.";
    } else {
       return false;
    }
 }
 console.log(isPositive(5));

 
 function addSymbolExclamation(str) {
    return str + "!";
 }
 console.log(addSymbolExclamation('hello world'));

 
 function combineNames(firstName, lastName) {
    return lastName + " " + firstName;
 }
 console.log(combineNames("Mackendy", "Bouquet"));

 
 function getGreeting(name) {
    return "Hello " + name + "!";
 }
 console.log(getGreeting("Martin"));

 
 function getRectangleArea(height, width) {
    return height * width;
 }
 console.log(getRectangleArea(5, 3));

 
 function returnPerimeter(side) {
    return 4 * side;
 }
 console.log(returnPerimeter(4));

 
 function triangleArea(base, height) {
    return (base * height) / 2;
 }
 console.log(triangleArea(4, 6));

 
 function fromEuroToDollar(euro) {
    return euro * 1.20;
 }
 console.log(fromEuroToDollar(10));
 
 
 function isVowel(letter) {
    if (letter.length > 1) {
       return "Données incorrectes";
    } else if (/[aeiou]/i.test(letter)) {
       return "C'est une voyelle.";
    } else {
       return "Données incorrectes";
    }
 }
 console.log(isVowel('a'));
 console.log(isVowel('bc'));
 console.log(isVowel('z'));