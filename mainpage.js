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
  var selected1= "";
  var footerColor = "";
  var footerTextColor = "";
  var opacity = "";

  // if(Cookies.get("Alert") != "done"){
  //   window.alert("Version 3.3.2 - Fixed Weighting Issues.\nContact kdsdeveloper@kentdenver.org for any questions or suggestions.\n- Shreyas '17 & Fahim '17");
  // }
  // Cookies.set("Alert", "done");


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
    JSONTheme.selected1= "#FFFFFF";
    JSONTheme.footerColor = "#152f56";
    JSONTheme.footerTextColor = "#FFFFFF";
    JSONTheme.opacity = "1";
    allColor();
  }
  function customTheme(){
    JSONTheme.textFont = "Helvetica";
    JSONTheme.textColor = realText;
    JSONTheme.sidebarColor = realHeader;
    JSONTheme.bgColor =  realBackground;
    JSONTheme.period1Color = realBackground;
    JSONTheme.period1FontColor = realText;
    JSONTheme.period2Color = realAlt;
    JSONTheme.period2FontColor = realText;
    JSONTheme.headerColor = realHeader;
    JSONTheme.headerTextColor = realText;
    JSONTheme.gradesHeader = realAlt;
    JSONTheme.headerBar = realAlt;
    JSONTheme.linkTextColor = realText;
    JSONTheme.selected1 = realTabs;
    JSONTheme.footerColor = realTabs;
    JSONTheme.footerTextColor = realText;
    JSONTheme.opacity = "1";
    allColor();
  }
  function theme1Button(){
    JSONTheme.textFont = "Helvetica";
    JSONTheme.textColor = "#000000";
    JSONTheme.sidebarColor = "#c9c9c9";
    JSONTheme.bgColor =  "#E3E3E3";
    JSONTheme.period1Color =  "#E3E3E3";
    JSONTheme.period1FontColor = "#000000";
    JSONTheme.period2Color = "#89bdd3";
    JSONTheme.period2FontColor = "#000000";
    JSONTheme.headerColor = "#c9c9c9";
    JSONTheme.headerTextColor = "#000000";
    JSONTheme.gradesHeader = "#89bdd3";
    JSONTheme.headerBar = "#89bdd3";
    JSONTheme.linkTextColor = "#000000";
    JSONTheme.selected1 = "#9ad3de";
    JSONTheme.footerColor = "#9ad3de";
    JSONTheme.footerTextColor = "#000000";
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
      $('#btn-gradesAttendance > a').css({"fontWeight": "100", "fontFamily": JSONTheme.textFont, "color": JSONTheme.textColor, "backgroundColor": JSONTheme.selected1});
      $('#nav-secondary > li.selected > a').css({"fontWeight": "100", "fontFamily": JSONTheme.textFont, "color": JSONTheme.textColor, "backgroundColor": JSONTheme.selected1}); // selected stuff
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


    function saveChanges(text, header, tab, alt, background, callback) {
        var objectToStore = {name:storageName, currentName: currentButton, textColor:text, headerColor:header, tabColor:tab, altColor:alt,backgroundColor:background};
           var jsonfile = {};
           jsonfile[storageName] = objectToStore;
      chrome.storage.local.set(jsonfile, function() {
             // Notify that we saved.
             callback();
      });
    }

    var textColor;
    var headerColor;
    var backgroundColor;
    var tabColor;
    var altColor;

    function loadData(typeOfColor, callback) {
      chrome.storage.local.get(storageName, function(object) {
        try{
          var realData = object[storageName];
          if(realData !== undefined) {
            buttonPref = realData.currentName;
            if (buttonPref == "DefaultTheme") {
              standardTheme();
            } else if (buttonPref == "CustomTheme") {
              customTheme();
            } else if(buttonPref == "theme1Button") {
              theme1Button();
            }
          }
          var color = realData[typeOfColor];
          callback(color);
        } catch (e) {
            buttonPref = "DefaultTheme";
            currentButton = "DefaultTheme";
            standardTheme();
            headerColor = "#c9c9c9";
            textColor = "#000000";
            altColor = "#89bdd3";
            tabColor = "#9ad3de";
            backgroundColor = "#e3e3e3";
            saveChanges(textColor, headerColor, tabColor, altColor, backgroundColor, callback);
            var color = realData[typeOfColor];
            callback(color);
          }
        });
      }


  var locTitles = new Array();
  for(var i = 0 ; i < topLocs.length ; i++){
    locTitles[i] = topLocs[i].innerHTML;
  }

  CustomButton = $('#content-main > div:nth-child(4) > h2').append('<div class="dropdown"><button class="btn btn-primary dropdown-toggle" id="menu1" type="button" data-toggle="dropdown">Themes &nbsp;<span style="font-size:15px">&#8661</span></button><ul style="list-style-type:none" class="dropdown-menu" role="menu" aria-labelledby="menu1"><li style="list-style-type:none" role="presentation"><a role="menuitem" tabindex="-1">Header Color<ul style="list-style-type:none"></li><input type="hidden" id="headerColor"></ul></a><li style="list-style-type:none" role="presentation"><a role="menuitem" tabindex="-1">Text Color<ul style="list-style-type:none"></li><input type="hidden" id="text"></ul></a><li style="list-style-type:none" role="presentation"><a role="menuitem" tabindex="-1">Tab Color<ul style="list-style-type:none"></li><input type="hidden" id="tabs"></ul></a><li style="list-style-type:none" role="presentation"><a role="menuitem" tabindex="-1">Alternative Color<ul style="list-style-type:none"></li><input type="hidden" id="alt"></ul></a><li style="list-style-type:none" role="presentation"><a role="menuitem" tabindex="-1">Background Color<ul style="list-style-type:none"></li><input type="hidden" id="background"></ul></a><li role="presentation"><a role="menuitem" tabindex="-1" id = "defaultButton">Default Theme</a></li><li role="presentation"><a role="menuitem" tabindex="-1" id = "customButton">Custom Theme</a></li><li role="presentation"><a role="menuitem" tabindex="-1" id = "theme1Button">Blue and Gray</a></li></ul></div>');
  $('.dropdown-toggle').dropdown();
          var tempText;
          var tempHeaderColor;
          var tempAlt;
          var tempTabs;
          var tempBackground;
          loadData("headerColor", function(headerColor) {
            // console.log(headerColor);
            tempHeaderColor = $("#headerColor").spectrum({
                showPalette: true,
                color: headerColor,
                showSelectionPalette: true, // true by default
                palette: [],
              });
              $("#headerColor").spectrum({
                showPalette: true,
                color: headerColor,
                showSelectionPalette: true,
                palette: [ ],
                move: function(color) {
                  realHeader = tempHeaderColor.spectrum("get").toHexString();
                  customTheme();
                  currentButton = "CustomTheme";
                  var headerColor;
                  saveChanges(realText, realHeader, realTabs, realAlt, realBackground, function() {
                  });
                },
                showInitial: true,
                localStorageKey: "spectrum.homepage", // Any Spectrum with the same string will share selection
              });
              realHeader = tempHeaderColor.spectrum("get").toHexString();
            });
        loadData("textColor", function(textColor) {
          // console.log(textColor);
          tempText = $("#text").spectrum({
            showPalette: true,
            color: textColor,
            showSelectionPalette: true, // true by default
            palette: [],
          });
          $("#text").spectrum({
            showPalette: true,
            color: textColor,
            showSelectionPalette: true,
            palette: [],
            move: function(color) {
              realText = tempText.spectrum("get").toHexString();
              customTheme();
              currentButton = "CustomTheme";
              var textColor;
              saveChanges(realText, realHeader, realTabs, realAlt, realBackground, function() {
              });
            },
            showInitial: true,
            localStorageKey: "spectrum.homepage", // Any Spectrum with the same string will share selection
          });
          realText = tempText.spectrum("get").toHexString();
        });
      loadData("tabColor", function(tabColor) {
        // console.log(tabColor);
            tempTabs = $("#tabs").spectrum({
              showPalette: true,
              color: tabColor,
              showSelectionPalette: true, // true by default
              palette: [],
            });
            $("#tabs").spectrum({
              showPalette: true,
              color: tabColor,
              showSelectionPalette: true,
              palette: [ ],
              move: function(color) {
                realTabs = tempTabs.spectrum("get").toHexString();
                customTheme();
                currentButton = "CustomTheme";
                var tabColor;
                saveChanges(realText, realHeader, realTabs, realAlt, realBackground, function() {
                });
              },
              showInitial: true,
              localStorageKey: "spectrum.homepage", // Any Spectrum with the same string will share selection
            });
            realTabs = tempTabs.spectrum("get").toHexString();
          });
          loadData("altColor", function(altColor) {
            // console.log(altColor);
            tempAlt = $("#alt").spectrum({
              showPalette: true,
              color: altColor,
              showSelectionPalette: true, // true by default
              palette: [],
            });
            $("#alt").spectrum({
              showPalette: true,
              color: altColor,
              showSelectionPalette: true,
              palette: [ ],
              move: function(color) {
                realAlt = tempAlt.spectrum("get").toHexString();
                customTheme();
                currentButton = "CustomTheme";
                var altColor;
                saveChanges(realText, realHeader, realTabs, realAlt, realBackground, function() {
                });
              },
              showInitial: true,
              localStorageKey: "spectrum.homepage", // Any Spectrum with the same string will share selection
            });
            realAlt = tempAlt.spectrum("get").toHexString();
          });
          loadData("backgroundColor", function(backgroundColor) {
            // console.log(backgroundColor);
            tempBackground = $("#background").spectrum({
              showPalette: true,
              color: backgroundColor,
              showSelectionPalette: true, // true by default
              palette: [],
            });
            $("#background").spectrum({
              showPalette: true,
              color: backgroundColor,
              showSelectionPalette: true,
              palette: [ ],
              move: function(color) {
                realBackground = tempBackground.spectrum("get").toHexString();
                customTheme();
                currentButton = "CustomTheme";
                var backgroundColor;
                saveChanges(realText, realHeader, realTabs, realAlt, realBackground, function() {
                });
              },
              showInitial: true,
              localStorageKey: "spectrum.homepage", // Any Spectrum with the same string will share selection
            });
            realBackground = tempBackground.spectrum("get").toHexString();
          });

          loadData("headerColor", function(headerColor) {
          });
            currentButton = "CustomTheme";

  $("#defaultButton" ).click(function() {
    currentButton = "DefaultTheme";
    Cookies.set("Theme", JSON.stringify(JSONTheme));
    standardTheme();
    saveChanges(realText, realHeader, realTabs, realAlt, realBackground, function() {
    });
  });
  $("#customButton" ).click(function() {
    currentButton = "CustomTheme";
    Cookies.set("Theme", JSON.stringify(JSONTheme));
    customTheme();
    saveChanges(realText, realHeader, realTabs, realAlt, realBackground, function() {
    });
  });
  $("#theme1Button" ).click(function() {
    currentButton = "theme1Button";
    Cookies.set("Theme", JSON.stringify(JSONTheme));
    theme1Button();
    saveChanges(realText, realHeader, realTabs, realAlt, realBackground, function() {
    });
  });

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
