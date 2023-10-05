let $body = $('body');

$('html').on('keydown', function(e) {
  $bubble = $('<div>');

  if (e.key == ' ') {
    $bubble.addClass('bubble');
    $bubble.css({
      'top': Math.random() + (document.documentElement.clientHeight - 100),
      'left': Math.random() + (document.documentElement.clientWidth - 100)
    });
    $body.append($bubble);
  }
});

$body.on('click', '.bubble', function() {
  $(this).addClass('is-popping');
});

$body.on('transitionend', '.bubble', function() {
  $(this).remove();
});
