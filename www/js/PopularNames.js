/**
 * Created by David on 3/14/2017.
 */

var usingMiddle = true;
var language = "french";

function readFile(file, size, element) {
    $.get(file, function (data) {
        var globalName = "";
        var names = data.split('\r\n');
        for (i = 0; i < size; i++) {
            var chosen = Math.floor(Math.random() * names.length);
            globalName += names[chosen] + " ";
            names.splice(chosen, 1);
        }
        element.innerText = globalName;
    });
}
function readInput() {
    readFile('../www/' + language + '_' + $("#language-select").find("option:selected").text().toLowerCase() + '_names.txt', usingMiddle ? 3 : 2, document.getElementById("rolled-name"));
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
