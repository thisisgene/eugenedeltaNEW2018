var oneSelected = false;
var viewArray = ['none', 'space', 'city', 'mountain', 'people'];

$(document).ready(function() {

  $('.part').on('mouseover', function(e) {
    var $this = $(e.target);
    var id = $this.attr('id');
    var $back = $('.home-container');


    if (!oneSelected) {
      switch (id) {
        case '1':
          $back.css('background-image', 'url("assets/img/space.jpg")');
          $('#2').addClass('shine top-shine');
          $('#3').addClass('shine left-shine');
          break;
        case '2':
          $back.css('background-image', 'url("assets/img/city.jpg")');
          $('#1').addClass('shine bottom-shine');
          $('#4').addClass('shine left-shine');
          break;
        case '3':
          $back.css('background-image', 'url("assets/img/mountain.jpg")');
          $('#1').addClass('shine right-shine');
          $('#4').addClass('shine top-shine');
          break;
        case '4':
          $back.css('background-image', 'url("assets/img/people.jpg")');
          $('#2').addClass('shine right-shine');
          $('#3').addClass('shine bottom-shine');
          break;
      }
      if (!$this.hasClass('hovered')) {
        $this.addClass('hovered');
        $('.part:not(.hovered)').addClass('not-hovered');
      }
    }

    $this.on('click', function(e) {
      oneSelected = true;
      $.get('ajax_views/'+viewArray[id]+'.html', function(res) {
        console.log(viewArray[id]);
        $this.addClass('is-selected');
        $('.not-hovered').addClass('go-away').removeClass('not-hovered shine top-shine right-shine bottom-shine left-shine');
        $('.full-container').html(res).addClass('is-active');
        $('.main-title').addClass('blurry blurry-'+id);
        $('.main-title').removeClass('shake');

      });


    });
  });
  $('.part').on('mouseout', function(e) {
    if (oneSelected) {
      return;
    }
    var $this = $(e.target);
    if ($this.hasClass('hovered')) {
      $this.removeClass('hovered');
      $('.part:not(.hovered)').removeClass('not-hovered shine top-shine right-shine bottom-shine left-shine');
      $('.main-title').removeClass('shake');

    }

  });


});

function returnHome() {
  console.log('back');
  $('.is-selected').removeClass('is-selected');
  $('.is-active').removeClass('is-active');
  $('.not-hovered').removeClass('not-hovered');
  $('.hovered').removeClass('hovered');
  $('.go-away').removeClass('go-away');
  $('.main-title').removeClass('blurry blurry-1 blurry-2 blurry-3 blurry-4');

  oneSelected = false;

}