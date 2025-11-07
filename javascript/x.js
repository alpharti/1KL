//=========================================
// PODSTAWY JAVASCRIPT - KLASA 1 TECHNIKUM
//=========================================

//1.ZMIENNE - SŁUŻĄ DO PRZECHOWYWANIA DANYCH
// -----------------------------------------------------------------

// let - ZMIENNA, KTÓREJ WARTOŚĆ MOŻE SIĘ ZMIENIAĆ
let imie = "Jan";

//CONST - ZMIENNA, KTÓREJ WARTOŚĆ NIE MOŻE SIĘ ZMIENIAĆ
let nazwisko = "Kowalski";

//var - STARY SPOSÓB (LEPIEJ ZYWAC LET I CONST)
var wiek = 16;

//2.TYPY DANYCH 
// -----------------------------------------------------------------

//STRING - TEKST(W CUDZYSŁOWIE)
let miasto = "Warszawa";

//NUMBER - LICZBA(BEZ CUDZYSŁOWIA)
let rok = 42;

//BOOLEAN - WARTOŚĆ LOGICZNA (PRAWDA/FAŁSZ)
let czyUCZEN = true;

//3. OPERACJE MATEMATYCZNE
// -----------------------------------------------------------------

//Dodawanie
let suma = 10 + 5; //15

//Odejmowanie
let roznica = 10 - 5; //5

//Mnożenie
let iloczyn = 10 * 5; //50

//Dzielenie
let iloraz = 10 / 5; //2

//4. WYSWIETLANIE DANYCH
// -----------------------------------------------------------------

// console.log() - WYSWIETLANIE DANYCH W KONSOLI PRZEGLĄDARKI(F12)
console.log("witaj w kosnoli");
console.log("Imię:" , imie);
console.log("Suma:", suma);

//5. FUNKCJE - BLOI KODU, KTÓRE MOŻNA WIELKOKROTNIE UŻYWAĆ
// -----------------------------------------------------------------

// FUNKCJA BEZ PARAMETRÓW
function powitanie() {
    //alert() - wyświetla okienko z komunikatem
    alert("witaj w świecie JavaScript");
}

// Funkcja z parametrami
function obliczSume(a, b) {
    //return - ZWRACA WARTOŚĆ Z FUNKCJI
    return a + b;   
}

// funkcja sprawdzająca wiek
function sprawdzWiek(wiek) {
//if - instrukcja warunkowa
 if (wiek >= 18) {
    return "Jesteś pełnoletni";
} else {
    //else - w przeciwnym wypadku
    return "Nie jesteś pełnoletni";
}
}
//6. PĘTLA - POWTARZANIE KODU
// -----------------------------------------------------------------

//Funkcja z pętlą for
function liczodjednegoDoN(n) {
    //pusty string do przechowywania wyniku
    let wynik = "";

    //for - pętla zaczynająca się od 1 do n
    for (let i = 1; i <= n; i++) {
    //+= - dodaje do istniejącej wartości
    wynik +=i + " ";
    }


    //zwraca wynik
    return wynik;
}


//7. INTERAKCJA  HTML
// -----------------------------------------------------------------
//Czekamy aż strona się załaduje
document.addEventListener("DOMContentLoaded", function() {

    //query selector - wybiera element z HTML
    const btnPowitanie = document.querySelector("#btnPowitanie");
    const btnObliczenia = document.querySelector("#btnObliczenia");
    const btnWiek = document.querySelector("#btnWiek");
    const btnPetla = document.querySelector("#btnPetla"); // changed: use ASCII id
    const divWynik = document.querySelector("#wynik"); // changed: lowercase id

    //add event listener - nasłuchuje kliknięcia przycisku
    btnPowitanie.addEventListener("click", function() {
        //zmienia zawartość HTML elementu
        divWynik.innerHTML = "<h3>Powitanie</h3><p>Witaj " + imie + " " + nazwisko + "!</p>";
    })

    //obsługa przycisku obliczania
    btnObliczenia.addEventListener("click", function() {
        //prompt() - daje okienko do wpisania wartości
        let liczba1 = prompt("Podaj pierwszą liczbę:");
        let liczba2 = prompt("Podaj drugą liczbę:");

        //parserInt() - zamienia tekst na liczbę całkowitą
        liczba1 = parseInt(liczba1);
        liczba2 = parseInt(liczba2);

        //wywołanie funkcji obliczSume
        let wynikobliczen = obliczSume(liczba1, liczba2);

        //wyświetlenie wyniku
        divWynik.innerHTML = "<h3>Obliczenia</h3><p>Suma: "+ liczba1 + "+" +liczba2 + "="
         + wynikobliczen + "</p>";
    });

    //obsługa przycisku sprawdzania wieku
    btnWiek.addEventListener("click", function() {
        //pobieramy wiek od używtkownika
        let wiekUzytkownika = prompt("ile masz lat?:");

        // zamieniamy na liczbę 
        wiekUzytkownika = parseInt(wiekUzytkownika);

        //wywołujemy funkcję sprawdzWiek
        let komunikat = sprawdzWiek(wiekUzytkownika);

        //wyświetlamy wynik
        divWynik.innerHTML = "<h3>Sprawdzanie wieku</h3><p>Masz " + wiekUzytkownika + 
        " lat. " + komunikat + "</p>";
    });

    //obsługa przycisku pętli
    btnPetla.addEventListener("click", function() { // changed: btnPetla
        //pobieramy liczbę od użytkownika
        let ile = prompt("do jakiej liczby policzyć:");

        //zamieniamy na liczbę
        ile = parseInt(ile);

        //wywołujemy funkcję liczodjednegoDoN
        let liczby = liczodjednegoDoN(ile);

        //wyświetlamy wynik pętli
        divWynik.innerHTML = "<h3>Pętla</h3><p>Liczby od 1 do " + ile + "</h3><p>" + liczby +"</p>";
    });

    //informacja w konsoli że skrypt działa
    console.log("Skrypt javascript został załadowany poprawnie.");
    console.log("Otwórz konsolę (F12), aby zobaczyć komunikaty.");
});