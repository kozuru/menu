

/*back to top*/
jQuery(function() {
    var pagetop = $('.pagetop');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });
});
/**/
/*上スクロールで出現・下スクロールで消える*/
$(function(){
  var pos = 0;
  var header = $('.global-ttl');
  $(window).on('scroll', function(){
    if($(this).scrollTop() < pos ){
      //上にスクロールしたとき
      header.removeClass('is-fadein');
    }else{
      //下にスクロールしたとき
      header.addClass('is-fadein');
    }
    pos = $(this).scrollTop();
  });
});
/*ここまで*/
/******************/
/*scroll-animation*/
/******************/
const target = document.querySelectorAll('.target');
const targetArray = Array.prototype.slice.call(target);
const options = {
  root: null,  //nullでブラウザ画面対照
  rootMargin: '-150px 0px',  //画面の下から0pxの位置をターゲットと交差する位置に指定
  threshold: 0 };  //指定した要素が画面に0%入るとコールバッイベント発生
const observer = new IntersectionObserver(callback, options);
targetArray.forEach(tgt => {
  observer.observe(tgt);
});
function callback(entries) {
  entries.forEach(function (entry, i) {
    const target = entry.target;
    if (entry.isIntersecting && !target.classList.contains('is-active')) {
      const delay = i * 100;
      setTimeout(function () {
        target.classList.add('is-active');
      }, delay);
    }
  });
};
/*ここまで*/
/*--------------------*/
/*テキストが下からにゅるっと出現*/
/*-------------------*/
$(function(){
  $('.texttext').children().addBack().contents().each(function() {
      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span class="text-move">$&</span>'));
  });
   /*setTimeout(function(){
      $(".heading").addClass("tactive");
  },100);*/
  var block = $(".texttext"),
    Window = $(window);

  Window.scroll(function() {
    block.each(function() {
      if (Window.scrollTop() > $(this).offset().top - Window.height()-100){ //発火位置の微調整TOPからpx
        $(".texttext").addClass("textactive");
      }else {
        $(".texttext").removeClass("textactive");
      }
    });
  });
});
$(function(){
  $('.texttext1').children().addBack().contents().each(function() {
      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span class="text-move1">$&</span>'));
  });
   /*setTimeout(function(){
      $(".heading").addClass("tactive");
  },100);*/
  var block = $(".texttext1"),
    Window = $(window);

  Window.scroll(function() {
    block.each(function() {
      if (Window.scrollTop() > $(this).offset().top - Window.height()-100){ //発火位置の微調整TOPからpx
        $(".texttext1").addClass("textactive1");
      }else {
        $(".texttext1").removeClass("textactive1");
      }
    });
  });
});
$(function(){
  $('.texttext2').children().addBack().contents().each(function() {
      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span class="text-move2">$&</span>'));
  });
   /*setTimeout(function(){
      $(".heading").addClass("tactive");
  },100);*/
  var block = $(".texttext2"),
    Window = $(window);

  Window.scroll(function() {
    block.each(function() {
      if (Window.scrollTop() > $(this).offset().top - Window.height()+50){ //発火位置の微調整TOPからpx
        $(".texttext2").addClass("textactive2");
      }else {
        $(".texttext2").removeClass("textactive2");
      }
    });
  });
});
$(function(){
  $('.texttext3').children().addBack().contents().each(function() {
      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span class="text-move3">$&</span>'));
  });
   /*setTimeout(function(){
      $(".heading").addClass("tactive");
  },100);*/
  var block = $(".texttext3"),
    Window = $(window);

  Window.scroll(function() {
    block.each(function() {
      if (Window.scrollTop() > $(this).offset().top - Window.height()+50){ //発火位置の微調整TOPからpx
        $(".texttext3").addClass("textactive3");
      }else {
        $(".texttext3").removeClass("textactive3");
      }
    });
  });
});
$(function(){
  $('.texttext4').children().addBack().contents().each(function() {
      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span class="text-move4">$&</span>'));
  });
   /*setTimeout(function(){
      $(".heading").addClass("tactive");
  },100);*/
  var block = $(".texttext4"),
    Window = $(window);

  Window.scroll(function() {
    block.each(function() {
      if (Window.scrollTop() > $(this).offset().top - Window.height()+50){ //発火位置の微調整TOPからpx
        $(".texttext4").addClass("textactive4");
      }else {
        $(".texttext4").removeClass("textactive4");
      }
    });
  });
});
$(function(){
  $('.texttext5').children().addBack().contents().each(function() {
      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span class="text-move5">$&</span>'));
  });
   /*setTimeout(function(){
      $(".heading").addClass("tactive");
  },100);*/
  var block = $(".texttext5"),
    Window = $(window);

  Window.scroll(function() {
    block.each(function() {
      if (Window.scrollTop() > $(this).offset().top - Window.height()+50){ //発火位置の微調整TOPからpx
        $(".texttext5").addClass("textactive5");
      }else {
        $(".texttext5").removeClass("textactive5");
      }
    });
  });
});
/*ここまで*/
/**/
/**/
/**/


/**/
