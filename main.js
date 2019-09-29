let europe = document.createElementNS("http://www.w3.org/2000/svg", "svg");
europe.setAttribute("width", "1000");
europe.setAttribute("height", "800");
document.getElementById("map").appendChild(europe);

let countryIdx = [];
let currentCountryID;
let currentCountryIdx;
let total = countries.length;
let current = 0;
let truePoints = 0;
let falsePoints = 0;
for (let i = 0; i < total; i++) {
    let country = document.createElementNS("http://www.w3.org/2000/svg", "path");
    country.setAttribute("d", countries[i].d);
    country.setAttribute("id", countries[i].id);
    country.onclick = () => {
        checkCountry(i);
        nextCountry();
    }
    europe.appendChild(country);
    countryIdx.push(i);
}
nextCountry();

function checkCountry(i) {
    let country = document.getElementById(countries[i].id);
    let answer = document.createElement("span");
    answer.innerHTML = countries[currentCountryID].name;
    if (i === currentCountryID) {
        truePoints++;
        country.classList.remove('false');
        country.classList.add('true');
        document.getElementById("trueCountry").appendChild(answer);
        document.getElementById("trueCounter").innerHTML = truePoints;
    } else {
        falsePoints++;
        country.classList.remove('true');
        country.classList.add('false');
        document.getElementById("falseCountry").appendChild(answer);
        document.getElementById("falseCounter").innerHTML = falsePoints;
    }
    countryIdx.splice(currentCountryIdx, 1);
}

function nextCountry() {
    current++;
    currentCountryIdx = getRndInteger(0, countryIdx.length - 1);
    currentCountryID = countryIdx[currentCountryIdx];
    document.getElementById("country").innerHTML = countries[currentCountryID].name;
    document.getElementById("counter").innerHTML = current + " / " + total;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}