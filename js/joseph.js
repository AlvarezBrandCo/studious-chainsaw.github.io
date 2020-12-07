// Create a new array of doubled numbers
var numbers = [1, 3, 4];
function testing() {
  var doubled = numbers
    .map(function (number, i) {
      var newone = number * 30;
      return '<li style="color:#fff">' + newone + "</li>";
      //return '<span style="color:white">' + number + " " + '<span style="font-size:5px">' + i + '</span>' + '</span>';
    })
    .join("");
  var newOne = "<ul>" + doubled + "</ul>";
  document.getElementById("asdf").innerHTML += newOne;
}
