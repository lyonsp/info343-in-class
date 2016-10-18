//put interpreter into strict mode
"use strict";

console.log(numeral(BABYNAMES.length).format("0,0"));

// closure=parameter passed to outer function works in inner function
function compareSex(sex) {
    return function(record) {
        return sex == record.sex;
    }
}
function compareByCount(rec1, rec2) {
    return rec1.count - rec2.count;
}

function descending(comparator) {
    return function(rec1, rec2) {
        return -(comparator(rec1, rec2));
    }
}

var females = BABYNAMES.filter(compareSex("F"));
females.sort(descending(compareByCount));
console.log(females.length);


var males = BABYNAMES.filter(compareSex("M"));
console.log(males.length);

/*
var females = BABYNAMES.filter(function(record) {
    // return true if record.sex = "F"
    return "F" == record.sex;
});

console.log(females.length);

var males = BABYNAMES.filter(function(record) {
    // return true if record.sex = "M"
    return "M" == record.sex;
});

console.log(males.length);
*/

//var currentSet = BABYNAMES;
var tbody = document.querySelector("tbody");

function render(records) {
    tbody.innerHTML = ""; // clears out current entries

    records.forEach(function(record) {
        var tr = document.createElement("tr");
        tr.classList.add("sex-" + record.sex.toLowerCase()); // creates style class you can use in css

        var td = document.createElement("td"); // table cell
        td.textContent = record.name;
        tr.appendChild(td);

        td = document.createElement("td");
        td.textContent = record.sex;
        tr.appendChild(td);

        td = document.createElement("td");
        td.textContent = record.count;
        tr.appendChild(td);

        tbody.appendChild(tr);
    });
}

render(BABYNAMES);
// render(females.slice(0,100)); // top 100 0-99

var searchInput = document.getElementById("name-search-input");
searchInput.addEventListener("input", function() {
    // console.log("input event"); shows if your input is working
    var query = searchInput.value.toLowerCase();
    if (query.length < 2) {
        render(BABYNAMES);
        return;
    }

    var matches = BABYNAMES.filter(function(record) {
        return record.name.toLowerCase().indexOf(query) >= 0;
    });
    render(matches);
});

var countColHeading = document.getElementById("count-col-header");
countColHeading.addEventListener("click", function() {
    // console.log("clicked col header!");
    BABYNAMES.sort(descending(compareByCount));
    render(BABYNAMES);
});