/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/* LOGIN */

var inlogKnop = document.querySelector("#inlogKnop");
var inlogPlek = document.querySelector("#inlogPlek");
var main = document.querySelector(".main");
function openInlog() {
    inlogPlek.classList.remove("hidden");
}

function closeInlog() {
    inlogPlek.classList.add("hidden");
}

inlogKnop.addEventListener("click", openInlog);
main.addEventListener("click", closeInlog);

/* FILTER OVERLAY */

var filterButton = document.querySelector("#filterButton");
var overlay = document.querySelector(".overlay");
var closeFilterButton = document.querySelector("#closeFilter");

function openFilter() {
    overlay.classList.remove("hidden");
}

function closeFilter() {
    overlay.classList.add("hidden");
}

filterButton.addEventListener("click", openFilter);

closeFilterButton.addEventListener("click", closeFilter);

/* KLEURENFILTERS */

var i;
var kleuren = document.querySelectorAll(".kleurFilter");
var kleurenCheckbox = document.querySelectorAll(".kleurCheckbox");

function showKleuren() {
    var checked = 0;
    for (i = 0; i < kleurenCheckbox.length; i++) {
        console.log(kleurenCheckbox[i]);
        if (kleurenCheckbox[i].checked) {
            checked++;
        }
        console.log(checked);
    }
    setTimeout(function () {
        if (checked > 0) {
            document.querySelector("#kleurIcoon").classList.remove("hidden");
        } else {
            document.querySelector("#kleurIcoon").classList.add("hidden");
        }
    }, 10);

}



for (i = 0; i < kleuren.length; i++) {
    kleuren[i].addEventListener("click", showKleuren);
}


/* SFEERFILTERS */

var sfeer = document.querySelectorAll(".sfeerFilter");
var sfeerCheckbox = document.querySelectorAll(".sfeerCheckbox");

function showSfeer() {
    var checked = 0;
    for (i = 0; i < sfeerCheckbox.length; i++) {
        console.log(sfeerCheckbox[i]);
        if (sfeerCheckbox[i].checked) {
            checked++;
        }
        console.log(checked);
    }
    setTimeout(function () {
        if (checked > 0) {
            document.querySelector("#sfeerIcoon").classList.remove("hidden");
        } else {
            document.querySelector("#sfeerIcoon").classList.add("hidden");
        }
    }, 10);

}


for (i = 0; i < sfeer.length; i++) {
    sfeer[i].addEventListener("click", showSfeer);
}


/* LEESTIJDFILTERS */

var leestijdEvent = document.querySelectorAll(".leestijdEvent");
var leestijd = document.querySelectorAll(".leestijdCheckbox");
var leestijdCheckbox = document.querySelectorAll(".leestijdCheckbox");


function showLeestijd() {
    var checked = 0;
    for (i = 0; i < leestijdCheckbox.length; i++) {
        console.log(leestijdCheckbox[i]);
        if (leestijdCheckbox[i].checked) {
            checked++;
        }
        console.log(checked);
    }
    setTimeout(function () {
        if (checked > 0) {
            document.querySelector("#leestijdIcoon").classList.remove("hidden");
        } else {
            document.querySelector("#leestijdIcoon").classList.add("hidden");
        }
    }, 10);

}

for (i = 0; i < leestijdEvent.length; i++) {
    leestijdEvent[i].addEventListener("click", showLeestijd);
}


/* TAALGEBRUIK FILTERS */

var taalgebruikEvent = document.querySelectorAll(".taalgebruikEvent");
var taalgebruik = document.querySelectorAll(".taalgebruikCheckbox");
var taalgebruikCheckbox = document.querySelectorAll(".taalgebruikCheckbox");


function showTaalgebruik() {
    var checked = 0;
    for (i = 0; i < taalgebruikCheckbox.length; i++) {
        console.log(taalgebruikCheckbox[i]);
        if (taalgebruikCheckbox[i].checked) {
            checked++;
        }
        console.log(checked);
    }
    setTimeout(function () {
        if (checked > 0) {
            document.querySelector("#taalgebruikIcoon").classList.remove("hidden");
        } else {
            document.querySelector("#taalgebruikIcoon").classList.add("hidden");
        }
    }, 10);

}

for (i = 0; i < taalgebruikEvent.length; i++) {
    taalgebruikEvent[i].addEventListener("click", showTaalgebruik);
}


/* SORTEREN OVERLAY */

var sorterenButton = document.querySelector(".sorterenKnop");
var sorterenOverlay = document.querySelector(".sorteren");
var closeSortButton = document.querySelector(".sluitSorteren");

function openSorteren() {
    sorterenOverlay.classList.remove("hidden");
}

function closeSorteren() {
    sorterenOverlay.classList.add("hidden");
}

sorterenButton.addEventListener("click", openSorteren);

closeSortButton.addEventListener("click", closeSorteren);

/* SORTEREN lampje */

var sorterenEvent = document.querySelectorAll(".sorterenEvent");
var sorteren = document.querySelectorAll(".sorterenCheckbox");
var sorterenCheckbox = document.querySelectorAll(".sorterenCheckbox");


function sorterenLampje() {
    var checked = 0;
    for (i = 0; i < sorterenCheckbox.length; i++) {
        console.log(sorterenCheckbox[i]);
        if (sorterenCheckbox[i].checked) {
            checked++;
        }
        console.log(checked);
    }
    setTimeout(function () {
        if (checked > 0) {
            document.querySelector(".sorteerLampje").style.backgroundColor = "#33cc33";
            document.querySelector(".sorteerLampje").style.boxShadow = "inset 0 -0.25rem 0 #2eb82e";
        } else {
            document.querySelector(".sorteerLampje").style.backgroundColor = "red";
            document.querySelector(".sorteerLampje").style.boxShadow = "inset 0 -0.25rem 0 #cc0000";
        }
    }, 10);

}

for (i = 0; i < sorterenEvent.length; i++) {
    sorterenEvent[i].addEventListener("click", sorterenLampje);
}
