// Increments the delay on each item.
$('.rolldown-list li').each(function () {
  console.log('ddddd')
  var delay = ($(this).index() / 4) + 's';
  $(this).css({
    webkitAnimationDelay: delay,
    mozAnimationDelay: delay,
    animationDelay: delay
  });
});

function listAni () {
  for (const li of document.querySelectorAll('.rolldown-list li')) {
    console.log(li);
    console.log(li.index());
  }
}

function clickBtn() {
  console.log('ddd')
  $('#myList').removeClass('rolldown-list');
  setTimeout(function () {
    $('#myList').addClass('rolldown-list');
    listAni ()
  }, 1);
}