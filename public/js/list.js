
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

function clickListBtn(id) {
  console.log('clickBtn : ', id)
  let tabId = '';
  id == "nowBtnReload"? tabId = '#myList1' : tabId = '#myList2'
  $(tabId).removeClass('rolldown-list');
  setTimeout(function () {
    $(tabId).addClass('rolldown-list');
    listAni ()
  }, 1);
}

function clickCheckBtn () {
  // 서버로 전송.
}