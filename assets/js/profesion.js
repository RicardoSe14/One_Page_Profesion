var tooltipTriggerList = Array.prototype.slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});


$("#titulo1").click(function(){
  $("#descripcion1").toggle(100);
});


$("#titulo1").click(function(){
  $('#descripcion2, #descripcion3, #descripcion4, #descripcion5').hide(100);
});

$("#titulo2").click(function(){
  $("#descripcion2").toggle(100);
});

$("#titulo2").click(function(){
  $('#descripcion1, #descripcion3, #descripcion4, #descripcion5').hide(100);
});

$("#titulo3").click(function(){
  $("#descripcion3").toggle(100);
});

$("#titulo3").click(function(){
  $('#descripcion1, #descripcion2, #descripcion4, #descripcion5').hide(100);
});

$("#titulo4").click(function(){
  $("#descripcion4").toggle(100);
});

$("#titulo4").click(function(){
  $('#descripcion2, #descripcion3, #descripcion1, #descripcion5').hide(100);
});

$("#titulo5").click(function(){
  $("#descripcion5").toggle(100);
});

$("#titulo5").click(function(){
  $('#descripcion2, #descripcion3, #descripcion4, #descripcion1').hide(100);
});


$(document).ready(function() {
  var $video;
  $("#exampleModal").on("hide.bs.modal", function(e) {
    $('.video').each(function(){
      $(this).get(0).pause();
    })
  })});
