/**
 * Created by David on 3/14/2017.
 */

var usingMiddle = true;
var language = "french";

function readFile(size, element) {
    var currentLanguage = $("#language-select").find("option:selected").text().toLowerCase();
    $.get('../www/' + language + '_' + currentLanguage + '_names.txt', function (data) {
        var globalName = "";
        var names = data.split('\r\n');
        for (i = 0; i < size; i++) {
            var chosen = Math.floor(Math.random() * names.length);
            globalName += names[chosen] + " ";
            names.splice(chosen, 1);
        }
        $.get('../www/' + language + '_surnames.txt', function (data) {
            names = data.split('\n');
            globalName += " " + names[Math.floor(Math.random() * names.length)];
            element.innerText = globalName;
        });
    });

}
function readInput() {
    readFile(usingMiddle ? 2 : 1, document.getElementById("rolled-name"));
}
function setMiddle() {
    usingMiddle = !usingMiddle;
}


function languageSelect(element) {
    $("#languages").find(":input").css({height: "", width: ""});
    $(this).css({width: "400px"});
    language = element.alt;
    readInput();
}
