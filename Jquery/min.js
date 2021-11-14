$(document).ready(function () {
    // var $button = $(`button`)
    // var $navbar = $(`.navbar`)
    // var $close = $(`.close-btn`)

    // $button.on(`click` , function() {
    //     $navbar.animate({
    //         left : 0
    //     } , 1000)
    //     $close('display', 'block')
    // })
});



$(document).ready(function () {
    var $icon = $("#icon");
  
    $(window).scroll(function () {
      var $windowtop = $(this).scrollTop();
  
      if ($windowtop >= 200) {
        $icon.fadeIn();
      } else {
        $icon.fadeOut();
      }
    });

    // ========================================================================


    
  });