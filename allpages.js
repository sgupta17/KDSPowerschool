  var url = window.location.href;
  var loadingHTML = document.createElement("div");
  loadingHTML.id = "KDSNEWLoading";
  var body = document.getElementsByTagName('body')[0];
  // document.body.style.fontFamily = "HelveticaNeue-Light,sans-serif";

if(document.getElementById("KDSNEWLoading") === null) {
  body.appendChild(loadingHTML);
  var htmlInsert = "<div id = 'ATCSfooter'>Powered by iGraviti</div>";
  $('body').append(htmlInsert);
  $('body').css('font-family','HelveticaNeue-Light');
  $('#ATCSfooter').css('position','fixed');
  $('#ATCSfooter').css('bottom','0px');
  $('#ATCSfooter').css('background-color','#152f56');
  $('#ATCSfooter').css('color','#FFFFFF');
  $('#ATCSfooter').css('width','100%');
  $('#ATCSfooter').css('text-align','center');
  $('#ATCSfooter').css('padding-top','5px');
  $('#ATCSfooter').css('height','30px');

  var safe = true;
  // $('#ATCSfooter').dblclick(function() {
    // $('#ATCSfooter').click(function() {
    //   if(safe) {
    //     safe = false;
    //     window.open("http://igraviti.com", '_blank');
    //   }
    // });

    $("#ATCSfooter").click(function(){
    window.open("http://igraviti.com", '_blank');
    });
  // });


  var htmlFeedback = "<div id = 'Feedback'><a href='https://docs.google.com/a/kentdenver.org/forms/d/1FOYf_IzhR14SS8c1EdR9OKUHZDAPyAH3iTQPmb0AAKs/viewform' target='_blank'>KDS Extension</a></div>";

  $('#nav-main > ul').append(htmlFeedback);
  $('#Feedback').css('color','#FFFFFF');
  $('#Feedback').css('height','100%');
  $('#Feedback').css('width','100%');
  $('#Feedback').css('background-repeat','no-repeat');
  $('#Feedback').css('background-image', 'url('+chrome.extension.getURL('icon.png')+')');
  $('#Feedback').css('background-position', '5% 45%');
  $('#Feedback').css('background-size', '35px 35px');
  $("#Feedback").hover(function(){
    $(this).css("background","#a3bfcc");
    $('#Feedback').css('background-repeat','no-repeat');
    $('#Feedback').css('background-image', 'url('+chrome.extension.getURL('icon.png')+')');
    $('#Feedback').css('background-position', '5% 45%');
    $('#Feedback').css('background-size', '35px 35px');
  },function(){
    $(this).css("background","");
    $('#Feedback').css('background-repeat','no-repeat');
    $('#Feedback').css('background-image', 'url('+chrome.extension.getURL('icon.png')+')');
    $('#Feedback').css('background-position', '5% 45%');
    $('#Feedback').css('background-size', '35px 35px');
  });


  } // DO NOT DELETE
