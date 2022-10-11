//Zad 1 Zliczanie samoglosek//
var word = "string";
function isSam(letter) {
    if (letter == "a" || letter == "e" || letter == "o" || letter == "i" || letter == "u" || letter == "y")
        return true;
    return false;
} //Funkcja sprawdzajaca czy litera jest samogloska
var counter = 0;
for (var i = 0; i < word.length; i++) {
    if (isSam(word[i])) {
        counter++;
    }
}
console.log(counter);
//Zad 2 Sprawdzanie czy tablica jest posortowana rosnaco//
var tablica1 = [1, 2, 3, 4, 5, 4];
var tablica2 = [1, 2, 3, 4, 5];
var tablica3 = [1, 1, 1];
function isGreater(tab) {
    for (var i = 0; i < tab.length - 1; i++) {
        if (tab[i] < tab[i + 1])
            continue;
        else
            return false;
    }
    return true;
}
if (isGreater(tablica1)) {
    console.log("tablica1 jest posortowana rosnaco");
}
else {
    console.log("tablica1 nie jest posortowana rosnaco");
}
if (isGreater(tablica2)) {
    console.log("tablica2 jest posortowana rosnaco");
}
else {
    console.log("tablica2 nie jest posortowana rosnaco");
}
if (isGreater(tablica3)) {
    console.log("tablica3 jest posortowana rosnaco");
}
else {
    console.log("tablica3 nie jest posortowana rosnaco");
}
