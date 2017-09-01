  // $(window).scroll(function () {
  //     if (($(document).height() - $(window).scrollTop()) <= 480){
  //         $("#left-menu").css({
  //             position: 'absolute',
  //             top: 'auto',
  //             bottom: '350px'
  //         });
  //     } else if ($(window).scrollTop() >= 30) {
  //         $("#left-menu").css({
  //             position: 'fixed',
  //             top: '0px',
  //             bottom: 'auto'
  //         });
  //     }else{
  //         $("#left-menu").css({
  //             position: 'absolute',
  //             top: '30px',
  //             bottom: 'auto'
  //         });
  //     }
  //     if($(window).scrollTop() > $("#footer").offset().top - $("#left-menu").height()) {
  //          $("#left-menu").css({
  //             position: 'absolute',
  //             top: $("#footer").offset().top - $("#content-5").height(),
  //             bottom: 'auto'
  //         });
  //     }
  // });
$(document).ready(function () {

  var topOffset = 45;
  var heightOfMenu = $("#left-menu").height();

  $(window).scroll(function () {
    var footerOffset = $(".footer").offset().top;
    var newTopOffset = topOffset + $(document).scrollTop() + "px";
    var newTopOffsetWithoutPx = topOffset + $(document).scrollTop();

    if (newTopOffsetWithoutPx <= footerOffset - heightOfMenu - 70) {
      $("#left-menu").css("top", newTopOffset);
    }

  });

});