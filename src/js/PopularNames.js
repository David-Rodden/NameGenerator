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

function readFile(file, out) {
    $.get("boy_names.txt", function (data) {
        var names = data.split('\n');
        console.log("hi " + names[Math.floor(Math.random() * names.length)]);
    });
}
function readInput() {
    // return readFile('boy_names.txt');
    readFile('boy_names.txt', document.getElementById('text-file'));
}