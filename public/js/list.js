
function listAni () {
  for (const li of document.querySelectorAll('.rolldown-list li')) {
    var delay = ($(li).index() / 4) + 's';
    $(li).css({
      webkitAnimationDelay: delay,
      mozAnimationDelay: delay,
      animationDelay: delay
    });
  }
}

function clickBtn(id) {
  console.log('clickBtn : ', id)
  $('#myList').removeClass('rolldown-list');
  setTimeout(function () {
    $('#myList').addClass('rolldown-list');
    listAni ()
  }, 1);
}