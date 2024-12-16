// init Isotope
var $grid = $('.item-detail').isotope({
    // options
  });
  // filter items on button click
  $('.item-menu').on( 'click', 'ul li', function(){
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  $(document).on("click" ,"ul li",function(){
    $(this).addClass("active").siblings().removeClass("active")
  })