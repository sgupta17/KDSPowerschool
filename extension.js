var categories;
var formElementNoCategories;
var formElementWithCategories;
var newNode;
var globalScoreData;
var finalGradeHTML;
var oldGrade;

var className;
var isWeighted;
var weightings;

var globalEarnedPoints;
var globalTotalPoints;
var currentIndex;
var JSONTheme;

var gradeTable;
var checkSpots;

$(document).ready(function() {

function showOrHideCategories(){
  if(document.getElementsByName("weighted")[0].checked) {
    var htmlToInsert = '<form style="padding-left:22px"action=""><input type="checkbox" name="weighted" value="Weighted" checked="true"><strong>Weighted by category:</strong><br><br>';
    htmlToInsert +='<table id="cats" border=1><tr><th align="center">Category</th><th align="center">Weighting</th><th style="z-index:1; text-align:center">Earned Points</th><th align="center">Total Points</th><th align="center">Percentage</th></tr>';
    // console.log(globalScoreData);
    for(var i = 0 ; i < categories.length ; i++) {
      htmlToInsert +='<tr><td align="center">' + categories[i]+'</td>';
      var weight = "";
      if(weightings[categories[i]] !== undefined) {
        weight = weightings[categories[i]];
      }
      var earned = "";
      var total  = "";
      var catPercent = "";
      var earnedPts = 0;
      var totalPts = 0;
      for(var j = 0 ; j < globalScoreData.length ; j++) {
        var score = globalScoreData[j];
        if(score[0] == categories[i] && score[0] != "NotACategory" && score.length == 4) {
          earnedPts += score[2];
          totalPts += score[3];
        }
      }
      earned += earnedPts;
      total += totalPts;
      catPercent = earnedPts / totalPts *100;
      catPercent = parseFloat(catPercent).toFixed(2);
      earned = parseFloat(earned).toFixed(2);
      total = parseFloat(total).toFixed(2);
      weight =  parseFloat(weight).toFixed(2);
      htmlToInsert +='<td align="center"><input style="text-align:center" value="'+weight+'" type="text" id=\"'+categories[i]+ '\">%</td>';
      htmlToInsert +='<td align="center"><input style="text-align:center" value="'+earned+'" type="text" id=\"'+categories[i]+ '_Earn\"></td>';
      htmlToInsert +='<td align="center"><input style="text-align:center" value="'+total+'" type="text" id=\"'+categories[i]+ '_Tot\"></td>';
      htmlToInsert +='<td align="center" id=\"'+categories[i]+ '_Percent\">'+catPercent+'%</td>';
      htmlToInsert += '</tr>';
    }
    htmlToInsert += '<tr><td></td><td></td><td></td><td></td><td align="center"><input type="button" id="calcButton" value="Update Final Grade"></td></tr></table></form>';
    newNode.innerHTML = htmlToInsert;
    oldGrade = finalGradeHTML.innerHTML;

    for(var i = 0 ; i < categories.length ; i++){
      currentIndex = i;
      document.getElementById(categories[i] + "_Earn").addEventListener("change", recalculateWeightedPercent, false);
      document.getElementById(categories[i] + "_Tot").addEventListener("change", recalculateWeightedPercent, false);

    }

    document.getElementById("calcButton").addEventListener("click", reCalculate, false);
    document.getElementsByName("weighted")[0].addEventListener("change", showOrHideCategories, false);

  } else {
    isWeighted = false;
    var earned = globalEarnedPoints;
    var total = globalTotalPoints;
    var percent = parseFloat((earned/total) * 100).toFixed(2) + "%";
    htmlToInsert = '<form style="padding-left:22px" action=""><input type="checkbox" name="weighted" value="Weighted"><strong>Weighted by category:</strong><br></form><br>';
    htmlToInsert +='<table id="points" border=1><tr><th style="z-index:1; text-align:center">Earned Points</th><th align="center">Total Points</th><th align="center">Percentage</th></tr>';
    htmlToInsert +='<tr><td align="center"><input style="text-align:center" value="'+earned+'" type="text" id=\"Earn\"></td>';
    htmlToInsert +='<td align="center"><input style="text-align:center" value="'+total+'" type="text" id=\"Tot\"></td>';
    htmlToInsert +='<td align="center"><input style="text-align:center" value="'+percent+'" type="text" id=\"Percent\"></td>';
    newNode.innerHTML = htmlToInsert;
    finalGradeHTML.innerHTML = oldGrade;
    document.getElementsByName("weighted")[0].addEventListener("change", showOrHideCategories, false);
    document.getElementById("Earn").addEventListener("change", reCalculateUnweightedPercent, false);
    document.getElementById("Tot").addEventListener("change", reCalculateUnweightedPercent, false);
    document.getElementById("Percent").addEventListener("change", reCalculateUnweightedPoints, false);
    saveChanges();
  }
}
function reCalculate(){
  isWeighted = true;
  weightings = {};
  var categoryScores = new Array();
  categoryScores.length = categories.length;
  var newGrade = 0;
  var totalEarned = 0;
  var totalTotal = 0;
  var totalPercent = 0;

  var totalWeight = 0;

  for(var i = 0 ; i < categories.length; i++) {
    var allEarned = parseFloat(document.getElementById(categories[i] + "_Earn").value);
    var allTotal =  parseFloat(document.getElementById(categories[i] + "_Tot").value);
    var allPercent = (allEarned/allTotal);
    var allWeight = parseFloat(document.getElementById(categories[i]).value);
    temp = parseFloat(allWeight);
    if(!isNaN(temp)) {
      weightings[categories[i]] = temp;
    } else {
      alert("Please enter weightings as numbers only.");
    }
    totalEarned += allEarned * (allWeight/100);
    totalTotal += allTotal * (allWeight/100);

    totalWeight += allWeight/100;
    totalPercent += allPercent * (allWeight/100);
  }

  if(totalTotal != 0) {
    newGrade = (totalPercent/totalWeight)*100;
    newGrade = parseFloat(newGrade).toFixed(2) + "%";
  } else {
    newGrade = '--';
  }
  var orgGrade = finalGradeHTML.innerHTML;
  orgGrade = orgGrade.substring(0, orgGrade.indexOf("(") + 1) + newGrade + ")";
  finalGradeHTML.innerHTML = orgGrade;
  saveChanges();
}

function reCalculateUnweightedPoints(){
  var allEarned = parseFloat(document.getElementById("Earn").value);
  var allTotal =  parseFloat(document.getElementById("Tot").value);
  var percent = parseFloat(document.getElementById("Percent").value);

  var newEarned = parseFloat((percent / 100) * allTotal).toFixed(2);

  (document.getElementById("Earn").value) = newEarned;
}

function reCalculateUnweightedPercent(){

  var allEarned = parseFloat(document.getElementById("Earn").value);
  var allTotal =  parseFloat(document.getElementById("Tot").value);
  var newPercent = "";
  if(allTotal != 0) {
    newPercent = parseFloat((allEarned/allTotal) * 100).toFixed(2) + "%";
  } else {
    newPercent = "--";
  }
  (document.getElementById("Percent").value) = newPercent;
}

function recalculateWeightedPercent(){
  var id = this.id;
  var cat = id.split("_")[0];
  var earned = parseFloat(document.getElementById(cat+"_Earn").value);
  var total = parseFloat(document.getElementById(cat+"_Tot").value);
  var percent = document.getElementById(cat+ "_Percent");
  var newPercent = ";"
  if(total != 0) {
    newPercent = parseFloat((earned/total)*100).toFixed(2) + "%";
  } else {
    newPercent = "--";
  }
  percent.innerHTML = newPercent;
}

function main() {
  var tables = document.getElementsByTagName("table");
  var header;
  var headerIndex;
  var finalHeader;
  var finalHeaderIndex;
  for(var i = 0 ; i < tables.length ; i++) {
    if(tables[i].innerHTML.indexOf("Due Date") > -1) {
      header = tables[i];
      headerIndex = i;
    } else if(tables[i].innerHTML.indexOf("Course") > -1) {
      finalHeader = tables[i];
      finalHeaderIndex = i;
    }
  }
  var topRows = finalHeader.getElementsByTagName("tr");
  var topLocs = topRows[0].getElementsByTagName("th");
  var gradeIndex;
  var classNameIndex;
  for(var i = 0 ; i < topLocs.length ; i++){
    if(topLocs[i].innerHTML.indexOf("Current Grade") > -1){
      gradeIndex = i;

    }
    if(topLocs[i].innerHTML.indexOf("Course") > -1) {
      classNameIndex = i;
    }
  }
  var gradeHTML = topRows[1].getElementsByTagName("td")[gradeIndex];
  finalGradeHTML = gradeHTML;
  className = topRows[1].getElementsByTagName("td")[classNameIndex].innerHTML;
  var gradeText = gradeHTML.innerHTML;

  var loadingHTML = document.createElement("div");
  loadingHTML.id = "KDSPSLoading";
  var body = document.getElementsByTagName('body')[0];

  if(document.getElementById("KDSPSLoading") === null) {
    body.appendChild(loadingHTML);
    if(isWeighted === undefined) isWeighted = false;
    loadData();
  }
}

function main2(){

  var tables = document.getElementsByTagName("table");
  var header;
  var headerIndex;
  var finalHeader;
  var finalHeaderIndex;
  for(var i = 0 ; i < tables.length ; i++) {
    if(tables[i].innerHTML.indexOf("Due Date") > -1) {
      header = tables[i];
      headerIndex = i;
    } else if(tables[i].innerHTML.indexOf("Course") > -1) {
      finalHeader = tables[i];
      finalHeaderIndex = i;
    }
  }
  var topRows = finalHeader.getElementsByTagName("tr");
  var topLocs = topRows[0].getElementsByTagName("th");

  var gradeIndex;
  var classNameIndex;
  for(var i = 0 ; i < topLocs.length ; i++){
    if(topLocs[i].innerHTML.indexOf("Current Grade") > -1){
      gradeIndex = i;
    }
    if(topLocs[i].innerHTML.indexOf("Course") > -1) {
      classNameIndex = i;
    }
  }
  var gradeHTML = topRows[1].getElementsByTagName("td")[gradeIndex];
  finalGradeHTML = gradeHTML;
  className = topRows[1].getElementsByTagName("td")[classNameIndex].innerHTML;
  var gradeText = gradeHTML.innerHTML;

  categories = new Array();
  var rows = header.getElementsByTagName("tr");
  var locs = rows[0].getElementsByTagName("th");

  var locTitles = new Array();
  for(var i = 0 ; i < locs.length ; i++){
    locTitles[i] = locs[i].innerHTML;
  }

  var scoreData = new Array();
  var categoryLoc = locTitles.indexOf("Category");
  var scoreLoc = locTitles.indexOf("Score");
  var totalPoints = 0;
  var earnedPoints = 0;

  for(var i = 1 ; i < rows.length ; i++) {
    var parsedRows = rows[i].getElementsByTagName("td");
    var singleScore = new Array();
    var purple = parsedRows[scoreLoc+2].innerHTML;
    var orange = parsedRows[scoreLoc+3].innerHTML;

    // var rainbow;
    //   if($(parsedRows[scoreLoc + 5]).find('input').is(':checked')) {
    //     rainbow = "";
    //   } else {
    //     rainbow = "unicorn";
    //   }
    // console.log(rainbow);
    // $("input[type=checkbox]").on( "click", main2);

    if(purple == "" && orange == "" && parsedRows[scoreLoc+4].innerHTML.indexOf("Score Not Published") == -1) {
      singleScore[0] = parsedRows[categoryLoc].innerHTML;
      if(singleScore[0].indexOf(">") > -1) {
        singleScore[0] = singleScore[0].substring(singleScore[0].indexOf(">") + 1, singleScore[0].indexOf("</"));
      }

      singleScore[1] = parsedRows[scoreLoc+4].getElementsByTagName("span")[0].innerHTML;
      var as = parsedRows[scoreLoc+4].getElementsByTagName("span")[0].getElementsByTagName("a");
      var newScore = singleScore[1].split("/");
      if(as.length > 0) {
        newScore[0] = newScore[0].substring(newScore[0].indexOf(">")+1, newScore[0].length-1);
        if(newScore[0].indexOf("-") == -1 && newScore[0] != "") {
          earnedPoints += parseFloat(newScore[0]);
          singleScore[2] = parseFloat(newScore[0]);
          totalPoints += parseFloat(newScore[2]);
          singleScore[3] = parseFloat(newScore[2]);
        }
      } else if(newScore[0].indexOf("-") == -1 && newScore[0] != "") {
        earnedPoints += parseFloat(newScore[0]);
        singleScore[2] = parseFloat(newScore[0]);
        totalPoints += newScore.length == 1 ? 0 : parseFloat(newScore[1]);
        singleScore[3] = newScore.length == 1 ? 0 : parseFloat(newScore[1]);
      }
      if(categories.indexOf(singleScore[0]) == -1 && newScore[0].indexOf("-") == -1) {
        categories.push(singleScore[0]);
      }
      scoreData[i-1] = singleScore;
    } else {
      scoreData[i-1] = ["NotACategory", "", "", ""];
    }
  }
  earnedPoints = parseFloat(earnedPoints).toFixed(2);
  totalPoints = parseFloat(totalPoints).toFixed(2);
  globalEarnedPoints = earnedPoints;
  globalTotalPoints = totalPoints;
  var studentPercentage = "";
  if(totalPoints != 0) {
    studentPercentage = earnedPoints / totalPoints *100;
    studentPercentage = parseFloat(studentPercentage).toFixed(2) + "%";
  } else {
    studentPercentage = "--";
  }


  globalScoreData = scoreData;
  gradeHTML.innerHTML += "(" + studentPercentage + ")";

  htmlToInsert = '<form style="padding-left:22px" action=""><input type="checkbox" name="weighted" value="Weighted"><strong>Weighted by category:</strong><br></form><br>';
  htmlToInsert +='<table id="points" border=1><tr><th style="z-index:1; text-align:center">Earned Points</th><th align="center">Total Points</th><th align="center">Percentage</th></tr>';
  htmlToInsert +='<tr><td align="center"><input style="text-align:center" value="'+earnedPoints+'" type="text" id=\"Earn\"></td>';
  htmlToInsert +='<td align="center"><input style="text-align:center" value="'+totalPoints+'" type="text" id=\"Tot\"></td>';
  htmlToInsert +='<td align="center"><input style="text-align:center" value="'+studentPercentage+'" type="text" id=\"Percent\"></td>';

  var content = document.getElementById("content-main");
  var newNode = document.createElement("div");
  newNode.innerHTML = htmlToInsert;
  this.newNode = newNode;


  var target = content.getElementsByTagName("table")[1];

  content.getElementsByTagName('div')[2].insertBefore(newNode, target);

  if(isWeighted) {
    document.getElementsByName("weighted")[0].checked = true;
    showOrHideCategories();
    reCalculate();
  } else {
    document.getElementById("Percent").addEventListener("change", reCalculateUnweightedPoints, false);
    document.getElementById("Earn").addEventListener("change", reCalculateUnweightedPercent, false);
    document.getElementById("Tot").addEventListener("change", reCalculateUnweightedPercent, false);
  }
  document.getElementsByName("weighted")[0].addEventListener("change", showOrHideCategories, false);

}

function saveChanges() {
  // Save it using the Chrome extension storage API.
  var objectToStore = {name: className, weighted : isWeighted, weightings : weightings};
  var jsonfile = {};
  jsonfile[className] = objectToStore;
  chrome.storage.sync.set(jsonfile, function() {
    // Notify that we saved.
    //alert('Settings saved' + chrome.runtime.lastError);
  });
}

// document.body.onload = addElement;

function loadData() {
  chrome.storage.sync.get(className, function(object) {
    var realData = object[className];
    if(realData !== undefined) {
      isWeighted = realData.weighted;
      weightings = realData.weightings;
      className = realData.name;
    } else {
      isWeighted = false;
      weightings = {};
    }
    main2();
  });

}

main();
});
