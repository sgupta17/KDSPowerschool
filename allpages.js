  var url = window.location.href;
  var loadingHTML = document.createElement("div");
  loadingHTML.id = "KDSNEWLoading";
  var body = document.getElementsByTagName('body')[0];
  // document.body.style.fontFamily = "HelveticaNeue-Light,sans-serif";
  $('body').css('font-family','HelveticaNeue-Light');

if(document.getElementById("KDSNEWLoading") === null) {
  body.appendChild(loadingHTML);
  var htmlInsert = "<div id = 'ATCSfooter'>Powered by Advanced Topics: Programming</div>";
  $('body').append(htmlInsert);
  $('#ATCSfooter').css('position','fixed');
  $('#ATCSfooter').css('bottom','0px');
  $('#ATCSfooter').css('background-color','#152f56');
  $('#ATCSfooter').css('color','#FFFFFF');
  $('#ATCSfooter').css('width','100%');
  $('#ATCSfooter').css('text-align','center');
  $('#ATCSfooter').css('padding-top','5px');
  $('#ATCSfooter').css('height','25px');

  $('#ATCSfooter').dblclick(function() {
    $('#ATCSfooter').click(function() {
    window.location.assign("http://russell-stewart.github.io/SuperPig-Game/");
    });
  });

}
