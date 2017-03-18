/**
 * Created by David on 3/14/2017.
 */

var baseUrl = "http://www.studentsoftheworld.info/penpals/stats.php3?Pays=";
var countries = ["ESP", "FRA"];

countries.forEach(function (element) {
    $.ajax({
        url: href,
        type: 'GET',
        success: function (data) {
            console.log(data)
        }
    })
});

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
    console.log(readFile('boy_names.txt', 3, document.getElementById("rolled-name")));
}