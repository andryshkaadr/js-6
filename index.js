const yearOfBirth = prompt("Введіть рік народження:");
const placeOfLiving = prompt("Де ти живеш?");
const favoriteSport = prompt("Який твій улюбленний вид спорту?");
let now = new Date();
let currentYear = now.getFullYear();

let stringYearOfBirth = "";
let stringPlaceOfLiving = "";
let stringFavoriteSport = "";

if (yearOfBirth == null) {
    stringYearOfBirth = "Шкода, що ти не захотів ввести свій рік народження.";
} else if (yearOfBirth <= currentYear) {
    stringYearOfBirth = `Тобі ${currentYear - yearOfBirth} років.`;
} else {
    stringYearOfBirth = "Вибач, я не зміг зрозуміти твій рік народження.";
}

if (placeOfLiving == null) {
    stringPlaceOfLiving = "Шкода, що ти не захотів ввести назву міста.";
} else if (placeOfLiving == "Лондон" || placeOfLiving == "Вашингтон" || placeOfLiving == "Київ") {
    switch (placeOfLiving) {
        case "Лондон":
            stringPlaceOfLiving = "Ти живеш у столиці Англії.";
            break;
        case "Вашингтон":
            stringPlaceOfLiving = "Ти живеш у столиці Америки.";
            break;
        case "Київ":
            stringPlaceOfLiving = "Ти живеш у столиці України.";
            break;
    }
} else {
    stringPlaceOfLiving = `Ти живеш у місті ${placeOfLiving}.`;
}

if (favoriteSport == null) {
    stringFavoriteSport = "Шкода, що ти не захотів ввести улюблений вид спорту.";
} else if (favoriteSport === "Футбол" || favoriteSport === "Баскетбол" || favoriteSport === "Хокей") {
    switch (favoriteSport) {
        case "Футбол":
            stringFavoriteSport = `Я теж люблю ${favoriteSport}. Хочеш стати як Михайло Мудрик?`;
            break;
        case "Баскетбол":
            stringFavoriteSport = `Я теж люблю ${favoriteSport}. Хочеш стати як Леброн Джеймс?`;
            break;
        case "Хокей":
            stringFavoriteSport = `Я теж люблю ${favoriteSport}. Хочеш стати як Бобби Орр?`;
            break;
    }
} else {
    stringFavoriteSport = `Вибач, але я нічого не знаю про ${favoriteSport}.`;
}

alert(` ${stringYearOfBirth} \n ${stringPlaceOfLiving} \n ${stringFavoriteSport}`);