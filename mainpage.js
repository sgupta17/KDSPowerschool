var grades;
var honors;
var currentGPA;
var sum = 0;
var counter = 0;
var loadingHTML = document.createElement("div");
loadingHTML.id = "KDSPSLoading";
var body = document.getElementsByTagName('body')[0];
var KDSButton;
var defaultButton;
var currentButton = "";
var storageName = "Theme Button";
var buttonPref = "DefaultTheme";
var JSONTheme = {};

$(document).ready(function() {
  onElementRendered('#content-main > div:nth-child(4) > table:nth-child(7) > tbody > tr:nth-child(4)', function(el) {
    if(document.getElementById("KDSPSLoading") === null) {
  var realHeader;
  var realTabs;
  var realBackground;
  var realAlt;
  var realText;

  var textFont = "";
  var textColor = "";
  var sidebarColor = "";
  var bgColor = "";
  var period1Color = "";
  var period2Color = "";
  var headerColor = "";
  var headerTextColor = "";
  var gradesHeader = "";
  var period2FontColor = "";
  var period1FontColor = "";
  var headerBar = "";
  var linkTextColor = "";
  var selected = "";
  var footerColor = "";
  var footerTextColor = "";
  var opacity = "";

  if(Cookies.get("Alert") != "done"){
    window.alert("Version 3.3.2 - Fixed Weighting Issues.\nContact kdsdeveloper@kentdenver.org for any questions or suggestions.\n- Shreyas '17 & Fahim '17");
  }
  Cookies.set("Alert", "done");

  function standardTheme(){
    JSONTheme.textFont = "Helvetica";
    JSONTheme.textColor = "#000000";
    JSONTheme.sidebarColor = "#F4F7FA";
    JSONTheme.bgColor = "#FFFFFF";
    JSONTheme.period1Color = "#eee";
    JSONTheme.period2Color = "#FFFFFF";
    JSONTheme.headerColor = "#FFFFFF";
    JSONTheme.headerTextColor = "#444444";
    JSONTheme.gradesHeader = "#a3bfcc";
    JSONTheme.period2FontColor = "#000000";
    JSONTheme.period1FontColor = "#000000";
    JSONTheme.headerBar = "#042d40";
    JSONTheme.linkTextColor = "#195f7d";
    JSONTheme.selected = "#FFFFFF";
    JSONTheme.footerColor = "#152f56";
    JSONTheme.footerTextColor = "#FFFFFF";
    JSONTheme.opacity = "1";
    allColor();
  }
  function customTheme(){
    realHeader = "#c9c9c9";
    realTabs = "#9ad3de";
    realBackground = "#e3e3e3";
    realAlt = "#89bdd3";
    realText = "#000000";
    JSONTheme.textFont = "Helvetica";
    JSONTheme.textColor = realText;
    JSONTheme.sidebarColor = realHeader;
    JSONTheme.bgColor =  realBackground;
    JSONTheme.period1Color = realBackground;
    JSONTheme.period1FontColor = "#000000";
    JSONTheme.period2Color = realAlt;
    JSONTheme.period2FontColor = realText;
    JSONTheme.headerColor = realHeader;
    JSONTheme.headerTextColor = "#000000";
    JSONTheme.gradesHeader = realAlt;
    JSONTheme.headerBar = realAlt;
    JSONTheme.linkTextColor = realText;
    JSONTheme.selected = realTabs;
    JSONTheme.footerColor = realTabs;
    JSONTheme.footerTextColor = realText;
    JSONTheme.opacity = "1";
    allColor();
  }
  function allColor(){
    for(var i = 0; i < topRows.length; i++){
      if(i%2 == 0){ //changes every other color starting from period 1
        for (var k = 0; k <= topRows.length; k++){
          $('#content-main > div:nth-child(4) > table:nth-child(6) > tbody > tr:nth-child(' + i + ') > td:nth-child(' + k + ')').css({ "background-color": JSONTheme.period1Color, "fontFamily": JSONTheme.textFont, "fontWeight": "100", "color": JSONTheme.period1FontColor});
        }
      }
    }
      $('#content-main > div:nth-child(4) > table:nth-child(7) > tbody > tr:nth-child(4) > td').css({ "background-color": JSONTheme.bgColor, "fontFamily": JSONTheme.textFont, "fontWeight": "100", "color": JSONTheme.textColor}); // area with table of Weighted Semester 1 GPA
      $('#content-main > div:nth-child(4) > table:nth-child(7) > tbody > tr:nth-child(3) > td > a').css({ "background-color": JSONTheme.bgColor, "fontFamily": JSONTheme.textFont, "fontWeight": "100", "color": JSONTheme.textColor}); // Show dropped classes
      $('#legend > p:nth-child(2)').css({ "background-color": JSONTheme.bgColor, "fontFamily": JSONTheme.textFont, "fontWeight": "100", "color": JSONTheme.headerTextColor}); //Attendance Codes
      $('#legend > p:nth-child(3)').css({ "background-color": JSONTheme.bgColor, "fontFamily": JSONTheme.textFont, "fontWeight": "100", "color": JSONTheme.headerTextColor}); // Citizenship Codes
      $('#legend > p:nth-child(2) > strong').css({ "background-color": JSONTheme.bgColor, "fontFamily": JSONTheme.textFont, "fontWeight": "bold", "color": JSONTheme.headerTextColor}); //Attendance Codes
      $('#legend > p:nth-child(3) > strong').css({ "background-color": JSONTheme.bgColor, "fontFamily": JSONTheme.textFont, "fontWeight": "bold", "color": JSONTheme.headerTextColor}); //Citizenship Codes
      $('#legend > h3').css({ "background-color": JSONTheme.bgColor, "fontFamily": JSONTheme.textFont, "color": JSONTheme.headerTextColor}); //Legend
      $('#nav-main > h3').css({ "background-color": JSONTheme.sidebarColor, "fontWeight": "100", "fontFamily": JSONTheme.textFont, "color": JSONTheme.textColor}); //Navigation
      $('#btn-gradesHistory > a').css({"fontWeight": "100", "fontFamily": JSONTheme.textFont, "color": JSONTheme.textColor}); //properties of list on the side
      $('#btn-attendanceHistory > a').css({"fontWeight": "100", "fontFamily": JSONTheme.textFont, "color": JSONTheme.textColor});//properties of list on the side
      $('#btn-teacherComments > a').css({"fontWeight": "100", "fontFamily": JSONTheme.textFont, "color": JSONTheme.textColor});//properties of list on the side
      $('#btn-classRegistration > a').css({"fontWeight": "100", "fontFamily": JSONTheme.textFont, "color": JSONTheme.textColor});//properties of list on the side
      $('#btn-mySchedule > a').css({"fontWeight": "100", "fontFamily": JSONTheme.textFont, "color": JSONTheme.textColor});//properties of list on the side
      $('#btn-gradesAttendance > a').css({"fontWeight": "100", "fontFamily": JSONTheme.textFont, "color": JSONTheme.textColor, "backgroundColor": JSONTheme.selected});
      $('#nav-secondary > li.selected > a').css({"fontWeight": "100", "fontFamily": JSONTheme.textFont, "color": JSONTheme.textColor, "backgroundColor": JSONTheme.selected}); // selected stuff
      $('#usercontext-bar').css({"backgroundColor": JSONTheme.headerBar}); // header bar

      for (var i = 0; i < topLocs.length; i++) { //changes exp, course, C1, Unexcused Abs and Tardies properties
        topLocs[i].style.background = JSONTheme.gradesHeader;
        topLocs[i].style.color = JSONTheme.headerTextColor;
        topLocs[i].style.zIndex = "1";
        topLocs[i].style.fontFamily = JSONTheme.textFont;
        topLocs[i].style.fontWeight = "bold";
      }
      for (var i = 0; i < topCols.length; i++) { // changes attendence by class, last week and this week properties
        topCols[i].style.background = JSONTheme.gradesHeader;
        topCols[i].style.color = JSONTheme.headerTextColor;
        topCols[i].style.zIndex = "1";
        topCols[i].style.fontFamily = JSONTheme.textFont;
        topCols[i].style.fontWeight = "bold";
      }
      for (var i = 0; i < topRows.length; i++) { //changes every other period from period 2
        for (var i = 0; i < topRows.length; i++) { //changes every other period from period 2
          for (var i = 5; i < topRows.length; i++) { //changes every other period from period 2
            for(var k = 0; k <= 15; k++){
              if(i%2 == 1){
                $('#content-main > div:nth-child(4) > table:nth-child(6) > tbody > tr:nth-child(' + i + ') > td:nth-child('+ k +')').css({"fontWeight": "100", "fontFamily": JSONTheme.textFont, "color": JSONTheme.period2FontColor, "backgroundColor": JSONTheme.period2Color, "zIndex": "1"});
              }
            }
          }
        }
      }
      for(var i = 3;i > 0;i--){//changes Attendance Totals properties
        $('#content-main > div:nth-child(4) > table:nth-child(6) > tbody > tr:nth-child(' + topRows.length + ') > td:nth-child('+ i + ')').css({ "background-color": JSONTheme.gradesHeader, "fontFamily": JSONTheme.textFont, "fontWeight": "bold", "color": JSONTheme.headerTextColor});
      }

      $("#content").css("background-color", JSONTheme.sidebarColor); // changes color of side bar
      $('#content-main').css("background-color", JSONTheme.bgColor); //changes color of area behind table of classes

      for(var i = 0; i<=5;i++){
        $("#content-main > div:nth-child(4) > h" + i).css({ "background-color": JSONTheme.bgColor, "fontFamily": JSONTheme.textFont, "fontWeight": "bold", "color": JSONTheme.headerTextColor}); // changes the properties Grades and Attendance and etc on top
      }
      $('#branding-powerschool').css({ "background-color": JSONTheme.headerColor});//changes color of header
      $('#userName').css({ "background-color": JSONTheme.headerColor, "fontFamily": JSONTheme.textFont, "fontWeight": "100", "color": JSONTheme.textColor}); // color of Welcome <Student>
      $('#btnLogout').css({ "background-color": JSONTheme.headerColor, "fontFamily": JSONTheme.textFont, "fontWeight": "100", "color": JSONTheme.textColor}); //Sign out Button
      $('#tools > li:nth-child(2) > a').css({ "background-color": JSONTheme.headerColor, "fontFamily": JSONTheme.textFont, "fontWeight": "100", "color": JSONTheme.textColor}); // Help Button
      $('#ATCSfooter').css({"backgroundColor": JSONTheme.footerColor, "color": JSONTheme.footerTextColor, "opacity": JSONTheme.opacity});
    }

  defaultButton = document.createElement("input");
  $(defaultButton).css('background-color','#881719');
  $(defaultButton).css('font-size','75%');
  $(defaultButton).css('font-family','HelveticaNeue-Light');
        defaultButton.type = 'button';
        defaultButton.value = 'Default';
        defaultButton.name = 'FirstButton';
        defaultButton.onclick = function() {
          currentButton = "DefaultTheme";
          Cookies.set("Theme", JSON.stringify(JSONTheme));
          standardTheme();
          saveChanges();
      }
  $('#content-main > div:nth-child(4) > h2').append(defaultButton);

  CustomButton = document.createElement("input");
  $(CustomButton).css('background-color','#3366CC');
  $(CustomButton).css('color','#FFFFFF');
  $(CustomButton).css('font-size','75%');
  $(CustomButton).css('font-family','HelveticaNeue-Light');
        CustomButton.type = 'button';
        CustomButton.value = 'Custom';
        CustomButton.name = 'Custom';
        CustomButton.onclick = function() {
          $('#content-main > div:nth-child(4) > h2').append('\n <input type="hidden" id="headerColor">');
          $('#content-main > div:nth-child(4) > h2').append('<input type="hidden" id="text">');
          $('#content-main > div:nth-child(4) > h2').append('<input type="hidden" id="tabs">');
          $('#content-main > div:nth-child(4) > h2').append('<input type="hidden" id="background">');
          $('#content-main > div:nth-child(4) > h2').append('<input type="hidden" id="alt">');
          var tempText;
          var tempHeaderColor;
          var tempAlt;
          var tempTabs;
          var tempBackground;
          var tempText = $("#text").spectrum({
            showPalette: true,
            showSelectionPalette: true, // true by default
            palette: [],
          });
          realText = tempText.spectrum("get").toHexString();
          $("#text").spectrum({
            showPalette: true,
            showSelectionPalette: true,
            palette: [],
            localStorageKey: "spectrum.homepage", // Any Spectrum with the same string will share selection
          });
          tempHeaderColor = $("#headerColor").spectrum({
              showPalette: true,
              showSelectionPalette: true, // true by default
              palette: [],
            });
            realHeader = tempHeaderColor.spectrum("get").toHexString();
            $("#headerColor").spectrum({
              showPalette: true,
              showSelectionPalette: true,
              palette: [ ],
              localStorageKey: "spectrum.homepage", // Any Spectrum with the same string will share selection
              realText: $("#headerColor").spectrum("get"),
            });
            tempTabs = $("#tabs").spectrum({
              showPalette: true,
              showSelectionPalette: true, // true by default
              palette: [],
              realText: $("#tabs").spectrum("get"),
            });
            realTab = tempTabs.spectrum("get").toHexString();
            $("#tabs").spectrum({
              showPalette: true,
              showSelectionPalette: true,
              palette: [ ],
              localStorageKey: "spectrum.homepage", // Any Spectrum with the same string will share selection
              realText: $("#tabs").spectrum("get"),
            });
            tempAlt = $("#alt").spectrum({
              showPalette: true,
              showSelectionPalette: true, // true by default
              palette: [],
              realText: $("#alt").spectrum("get"),
            });
            realAlt = tempAlt.spectrum("get").toHexString();
            $("#alt").spectrum({
              showPalette: true,
              showSelectionPalette: true,
              palette: [ ],
              localStorageKey: "spectrum.homepage", // Any Spectrum with the same string will share selection
              realText: $("#alt").spectrum("get"),
            });
            tempBackground = $("#background").spectrum({
              showPalette: true,
              showSelectionPalette: true, // true by default
              palette: [],
              realText: $("#background").spectrum("get"),
            });
            realBackground = tempBackground.spectrum("get").toHexString();
            $("#background").spectrum({
              showPalette: true,
              showSelectionPalette: true,
              palette: [ ],
              localStorageKey: "spectrum.homepage", // Any Spectrum with the same string will share selection
              realText: $("#background").spectrum("get"),
            });
            customTheme();
            saveChanges();
            currentButton = "CustomTheme";
            Cookies.set("Theme", JSON.stringify(JSONTheme));
      }
  $('#content-main > div:nth-child(4) > h2').append(CustomButton);

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


    function saveChanges() {
           var objectToStore = {name: storageName, currentName : currentButton};
           var jsonfile = {};
           jsonfile[storageName] = objectToStore;
      chrome.storage.local.set(jsonfile, function() {
             // Notify that we saved.
             //alert('Settings saved' + chrome.runtime.lastError);
      });
    }

    function loadData() {
      chrome.storage.local.get(storageName, function(object) {
        var realData = object[storageName];
        console.log(realData);
        if(realData !== undefined) {
          buttonPref = realData.currentName;
            if (buttonPref == "DefaultTheme") {
              standardTheme();
            } else if (buttonPref == "CustomTheme") {
              customTheme();
            }
          storageName = realData.name;
        } else {
          buttonPref = "DefaultTheme";
        }
      });
    }

    loadData();

  var locTitles = new Array();
  for(var i = 0 ; i < topLocs.length ; i++){
    locTitles[i] = topLocs[i].innerHTML;
  }

  var gradeLoc = locTitles.indexOf("C1");
  grades = new Array();

  var temp = new Array();

  for(var i = 3 ; i < topCols.length; i++) {
    temp = topRows[i];
    grades[i] = temp.getElementsByTagName("td")[12];
    grades[i] = grades[i].innerText;
  }

  for (var i = 0; i < grades.length; i++) {
    if (grades[i] == ("--")) {
      counter--;
    }
    counter++;
  }
  counter -= 3;
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
  numb = numb.toFixed(3);
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
