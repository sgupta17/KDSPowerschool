var grades;
var honors;
var currentGPA;
var sum = 0;
var counter = 0;
var loadingHTML = document.createElement("div");
loadingHTML.id = "KDSPSLoading";
var body = document.getElementsByTagName('body')[0];
var JSONTheme = {};


$(document).ready(function() {
  onElementRendered('#content-main > div:nth-child(4) > table:nth-child(6) > tbody', function(el) {
    if(document.getElementById("KDSPSLoading") === null) {

  // if(Cookies.get("Alert") != "done"){
  //   // window.alert("Good luck everyone with APs and Finals\nPlease take a moment to fill out this quick survey.\n- Shreyas '17 & Fahim '17");
  //   if (window.confirm('If you click "ok" you would be redirected . Cancel will load this website ')) {
  //     window.location.href='https://www.google.com/chrome/browser/index.html';
  //   };
  // }
  // Cookies.set("Alert", "done");

  body.appendChild(loadingHTML);
  var classPages = new Array();
  var classPageHTML = new Array();

  var table = document.getElementsByTagName("table")[0];
  var header;
  var headerIndex;
  var finalHeader;
  var finalHeaderIndex;
    if(table.innerHTML.indexOf("Exp") > -1) {
      header = table;
  }
  var topRows = header.getElementsByTagName("tr");
  var topCols = header.getElementsByTagName("th");
  var topLocs = topRows[1].getElementsByTagName("td");
  JSONTheme.topRows = topRows;
  JSONTheme.topCols = topCols;
  JSONTheme.topLocs = topLocs;

  var locTitles = new Array();
  for(var i = 0 ; i < topLocs.length ; i++){
    locTitles[i] = topLocs[i].innerHTML;
  }

  var gradeLoc = locTitles.indexOf("C1");
  grades = new Array();
  var temp = new Array();


  for(var i = 3 ; i < topCols.length; i++) {
    var d = new Date();
    var n = d.getMonth();

    temp = topRows[i];
    if (n>6) {
      grades[i] = temp.getElementsByTagName("td")[12];
    } else {
      grades[i] = temp.getElementsByTagName("td")[13];
    }
    grades[i] = grades[i].innerText;
    if(grades[i].indexOf("%") > -1) {
      var findbreak;
      findbreak = grades[i].indexOf("\n");
      grades[i] = grades[i].substring(0, findbreak);
    }
  }

  for (var i = 0; i < grades.length; i++) {
    if ((grades[i] == ("A+")) || (grades[i] == ("A")) || (grades[i] == ("A-")) || (grades[i] == ("B+")) || (grades[i] == ("B")) || (grades[i] == ("B-")) || (grades[i] == ("C+")) || (grades[i] == ("C")) || (grades[i] == ("C-")) || (grades[i] == ("D+")) || (grades[i] == ("D")) || (grades[i] == ("D-")) || (grades[i] == ("F"))) {
      counter++;
    }
  }
  honors = new Array();
  var testing = new Array();

  for(var i = 3 ; i < topCols.length; i++) {
    testing = topRows[i];
    honors[i] = testing.getElementsByTagName("td")[11];
    if ((honors[i].innerHTML.indexOf("Honors") >= 0)) {
      honors[i] = 1.1;
    } else if ((honors[i].innerHTML.indexOf("AP") >= 0)) {
      honors[i] = 1.1;
    } else if ((honors[i].innerHTML.indexOf("Adv") >= 0)) {
      honors[i] = 1.1;
    } else {
      honors[i] = 1;
    }
  }


  for (var i = 0; i < grades.length; i++) {
    switch (grades[i]) {
      case "A+": sum += 4.3*(honors[i]); break;
      case "A": sum += 4*(honors[i]); break;
      case "A-": sum += 3.7*(honors[i]); break;
      case "B+": sum += 3.3*(honors[i]); break;
      case "B": sum += 3*(honors[i]); break;
      case "B-": sum += 2.7*(honors[i]); break;
      case "C+": sum += 2.3*(honors[i]); break;
      case "C": sum += 2*(honors[i]); break;
      case "C-": sum += 1.7*(honors[i]); break;
      case "D+": sum += 1.3*(honors[i]); break;
      case "D": sum += 1*(honors[i]); break;
      case "D-": sum += 0.7*(honors[i]); break;
      case "F": sum += 0.3*(honors[i]); break;
      default: sum+= 0; break;
    }
  }
  currentGPA = sum/counter;
  var numb = currentGPA;
  if (sum != 0) {
    numb = numb.toFixed(3);
  } else {
    numb = "No Grades Entered";
  }
  addElement(numb);
}

function addElement (numb) {
  var newDiv = '<div style="margin-bottom:10px">Current Semester GPA: ' + numb + '</div>';
  $($('#content-main > div:nth-child(4) > table:nth-child(7) > tbody > tr:nth-child(4) > td')[0]).prepend(newDiv);
}
});
});
function onElementRendered(selector, cb, _attempts) {
  var el = $(selector);
  _attempts = ++_attempts || 1;
  if (el.length) {
    return cb(el);

  }
  if (_attempts == 120) return;
  setTimeout(function() {
    onElementRendered(selector, cb, _attempts);
  }, 250);
}
