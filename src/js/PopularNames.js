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