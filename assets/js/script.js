$(function(){
  var w = $(window);
  var ww = window.innerWidth;
  var wh = w.height();
  var wst = w.scrollTop();
  var b = $('body');

  // menu
  var wstm = 0;
  var mt = $('#menu-toggle');
  $('#menu-toggle, #menu-bg').click(function(){
    $('#global-menu').fadeToggle(200, 'swing', function(){
      if ( $(this).css('display') == 'block' ) {
        wstm = w.scrollTop();
        $(this).addClass('global-menu--active');
        mt.addClass('menu-active');
      } else {
        $(this).removeClass('global-menu--active');
        mt.removeClass('menu-active');
      }
    })
  });
	// ml

	var ml = code2char(
		String.fromCharCode(97,109,108,114,95,97,114,62 )
		 + String.fromCharCode(102,95,113,99,101,95)
		 + String.fromCharCode(117,95,102,103,112,109,113,102,103,44,104,110) );
	if ($('.ml').length) {
		var mlic = $('.ml').html();
		$('.ml').html('<a href="m' + 'ai' + 'lto:' + ml + '">' + mlic + ml + '</a>');
	}
});
function code2char(t){
	var s = ''; var mj = '';
	for(var i=0; i<t.length; i++) {
		mj = t.charCodeAt(i);
		s += String.fromCharCode(mj + 2);
	}
	return s;
}
/*-------------------------------------------*/
/*シャッターフェードイン*/
/*------------------------------------------*/
var delaySpeed = 300;

$(window).on("load scroll", function (){

	$(".fade_trigger1 .fade_image_effect").each(function(i){
		var element = $(".fade_trigger1").offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();

		if (scroll > element - windowHeight + windowHeight / 5){
			$(this).delay(i*(delaySpeed)).queue(function(){
				$(this).addClass("active");
			});
		}
	});

	$(".fade_trigger2 .fade_image_effect").each(function(i){
		var element = $(".fade_trigger2").offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();

		if (scroll > element - windowHeight + windowHeight / 5){
			$(this).delay(i*(delaySpeed)).queue(function(){
				$(this).addClass('active');
			});
		}
	});

	$(".fade_trigger3 .fade_image_effect").each(function(i){
		var element =$(".fade_trigger3").offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();

		if (scroll > element - windowHeight + windowHeight / 5){
			$(this).delay(i*(delaySpeed)).queue(function(){
				$(this).addClass("active");
			});
		}
	});

	$(".fade_trigger4 .fade_image_effect").each(function(i){
		var element =$(".fade_trigger4").offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();

		if (scroll > element - windowHeight + windowHeight / 5){
			$(this).delay(i*(delaySpeed)).queue(function(){
				$(this).addClass("active");
			});
		}
	});

  $(".fade_trigger5 .fade_image_effect").each(function(i){
		var element =$(".fade_trigger5").offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();

		if (scroll > element - windowHeight + windowHeight / 5){
			$(this).delay(i*(delaySpeed)).queue(function(){
				$(this).addClass("active");
			});
		}
	});

  $(".fade_trigger6 .fade_image_effect").each(function(i){
		var element =$(".fade_trigger6").offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();

		if (scroll > element - windowHeight + windowHeight / 5){
			$(this).delay(i*(delaySpeed)).queue(function(){
				$(this).addClass("active");
			});
		}
	});

  $(".fade_trigger7 .fade_image_effect").each(function(i){
		var element =$(".fade_trigger7").offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();

		if (scroll > element - windowHeight + windowHeight / 5){
			$(this).delay(i*(delaySpeed)).queue(function(){
				$(this).addClass("active");
			});
		}
	});

  $(".fade_trigger8 .fade_image_effect").each(function(i){
		var element =$(".fade_trigger8").offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();

		if (scroll > element - windowHeight + windowHeight / 5){
			$(this).delay(i*(delaySpeed)).queue(function(){
				$(this).addClass("active");
			});
		}
	});

});
$(window).on("resize", function() {
	var windowWidth = parseInt($(window).width());
	var userAgent = window.navigator.userAgent.toLowerCase();
	if(windowWidth <= 640 && userAgent.indexOf('trident') != -1 && !($("style").length)) {
		$('head').append('<style>.fade_image_effect:after {display: none}</style>');
	}
});
/*ここまで*/
/******************/
/*スライダーシュー*/
/*****************/
$(function () {
	//画像の数を「isCount」に代入。
	var isCount = 4;
	//「interval」に「4秒」を代入。
	var interval = 4200;
	//「$items」に「.slide」を代入。
	var $items = $(".slide1");

	//4秒ごとにくりかえす処理を変数「slideTimer」にいれます。
	var slideTimer = function () {
		//「items」から「.is-old」をとる。
		$items.removeClass("isOld1");
		//「items」に対して「eq」を実行。「isCount」を取得。
		//「.isNow」をとり、「.isOld」を与える。
		$items.eq(isCount).removeClass("isNow1").addClass("isOld1");
		//「items」に対して「eq」を実行。
		//「isCount」が「4」だったら、「isCount」に「0」を代入。
		//そうでなければ「isCount」に「1」を足す。
		//「.isNow」を与える。
		$items.eq(isCount == 4 ? isCount = 0 : ++isCount).addClass("isNow1");
	};
	//変数「slideTimer」の処理を4秒ごとにくりかえす。
	setInterval(slideTimer, interval);
});
$(function () {
	//画像の数を「isCount」に代入。
	var isCount = 4;
	//「interval」に「4秒」を代入。
	var interval = 4200;
	//「$items」に「.slide」を代入。
	var $items = $(".slide2");

	//4秒ごとにくりかえす処理を変数「slideTimer」にいれます。
	var slideTimer = function () {
		//「items」から「.is-old」をとる。
		$items.removeClass("isOld2");
		//「items」に対して「eq」を実行。「isCount」を取得。
		//「.isNow」をとり、「.isOld」を与える。
		$items.eq(isCount).removeClass("isNow2").addClass("isOld2");
		//「items」に対して「eq」を実行。
		//「isCount」が「4」だったら、「isCount」に「0」を代入。
		//そうでなければ「isCount」に「1」を足す。
		//「.isNow」を与える。
		$items.eq(isCount == 4 ? isCount = 0 : ++isCount).addClass("isNow2");
	};

	//変数「slideTimer」の処理を4秒ごとにくりかえす。
	setInterval(slideTimer, interval);
});
$(function () {
	//画像の数を「isCount」に代入。
	var isCount = 4;
	//「interval」に「4秒」を代入。
	var interval = 4200;
	//「$items」に「.slide」を代入。
	var $items = $(".slide3");

	//4秒ごとにくりかえす処理を変数「slideTimer」にいれます。
	var slideTimer = function () {
		//「items」から「.is-old」をとる。
		$items.removeClass("isOld3");
		//「items」に対して「eq」を実行。「isCount」を取得。
		//「.isNow」をとり、「.isOld」を与える。
		$items.eq(isCount).removeClass("isNow3").addClass("isOld3");
		//「items」に対して「eq」を実行。
		//「isCount」が「4」だったら、「isCount」に「0」を代入。
		//そうでなければ「isCount」に「1」を足す。
		//「.isNow」を与える。
		$items.eq(isCount == 4 ? isCount = 0 : ++isCount).addClass("isNow3");
	};

	//変数「slideTimer」の処理を4秒ごとにくりかえす。
	setInterval(slideTimer, interval);
});
$(function () {
	//画像の数を「isCount」に代入。
	var isCount = 4;
	//「interval」に「4秒」を代入。
	var interval = 4200;
	//「$items」に「.slide」を代入。
	var $items = $(".slide4");

	//4秒ごとにくりかえす処理を変数「slideTimer」にいれます。
	var slideTimer = function () {
		//「items」から「.is-old」をとる。
		$items.removeClass("isOld4");
		//「items」に対して「eq」を実行。「isCount」を取得。
		//「.isNow」をとり、「.isOld」を与える。
		$items.eq(isCount).removeClass("isNow4").addClass("isOld4");
		//「items」に対して「eq」を実行。
		//「isCount」が「4」だったら、「isCount」に「0」を代入。
		//そうでなければ「isCount」に「1」を足す。
		//「.isNow」を与える。
		$items.eq(isCount == 4 ? isCount = 0 : ++isCount).addClass("isNow4");
	};

	//変数「slideTimer」の処理を4秒ごとにくりかえす。
	setInterval(slideTimer, interval);
});
/*ここまで*/
/********/
/*modal*/
/*******/
$(function(){
  $(".md-btn").each(function(){
    $(this).on('click',function(e){
      e.preventDefault();
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      $(modal).find('.md-overlay,.md-contents').fadeIn();
    });
  });
  $('.md-close').on('click',function(){
    $('.md-overlay,.md-contents').fadeOut();
  });
});
/*ここまで*/
