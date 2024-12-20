// init Isotope
var $grid = $('.container').isotope({
    // options
  });
  // filter items on button click
  $('#nav').on( 'click', 'ul li', function(){
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  $(document).on("click" ,"ul li",function(){
    $(this).addClass("active").siblings().removeClass("active")
  })