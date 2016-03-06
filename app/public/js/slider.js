// adapted from http://imageslidermaker.com/blog/how-to-make-a-responsive-image-slider-using-jquery-and-css

$(function() {

  $('#prev').hide();
  $('#next').hide();

  var ul = $(".slider ul");
  var slide_count = ul.children().length;
  var slide_width_pc = 100.0 / slide_count;
  var slide_index = 0;

  ul.find("li").each(function(indx) {
    var left_percent = (slide_width_pc * indx) + "%";
    $(this).css({"left":left_percent});
    $(this).css({width:(100 / slide_count) + "%"});
  });

  $("#prev").click(function() {
    slide(slide_index - 1);
  });

  $("#next").click(function() {
    slide(slide_index + 1);
  });

  $('.slider-wrapper').hover(
    function() {
      if (slide_index > 0) {
        $('#prev').show();
      }
      if (slide_index + 1 != slide_count){
        $('#next').show();
      }
    }, function() {
      $('#next').hide();
      $('#prev').hide();
    }
  );

  function slide(new_slide_index) {
    if(new_slide_index < 0){
      $('#prev').hide();
      return;
    }
    if(new_slide_index >= slide_count){
      $('#next').hide();
      return;
    }
    $('#prev').show();
    $('#next').show();
    var margin_left_pc = (new_slide_index * (-100)) + "%";
    ul.animate({"margin-left": margin_left_pc}, 400, function() {
      slide_index = new_slide_index;
    });
    if(new_slide_index === 0){$('#prev').hide();}
    if(new_slide_index === slide_count){$('#prev').hide();}
  }
});
