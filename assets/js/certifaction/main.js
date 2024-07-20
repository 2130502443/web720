$(function(){
	
});

function Hover(obj, calssName) {
	obj.hover(function(){
		$(this).addClass(calssName);
	},function(){
		$(this).removeClass(calssName);
	})
}

$(window).scroll(function () {

	var _ismobile = false;
	var windowTop = $(window).scrollTop();
	var windowBottom = windowTop + $(window).height();
	var showNum = !_ismobile ? 4 : 16;
	$('.ani-view').each(function(){

		var pageQ1 = $(this).offset().top + $(this).height() / showNum;
		var pageQ3 = $(this).offset().top  + $(this).height() / 1;


		if( ( pageQ1 <= windowBottom ) && ( pageQ3 >= windowTop ) ){

			if( $(this).hasClass("fade-in-down") ) $(this).addClass('fadeInDown');
			if( $(this).hasClass("fade-in-up") ) $(this).addClass('fadeInUp');
			if( $(this).hasClass("fade-in-downLarge") )  $(this).addClass('fadeInDownLarge');
			if( $(this).hasClass("fade-in-left") )  $(this).addClass('fadeInLeft');
			if( $(this).hasClass("fade-in-leftLarge") )  $(this).addClass('fadeInLeftLarge');
			if( $(this).hasClass("fade-in-right") )  $(this).addClass('fadeInRight');
			if( $(this).hasClass("fade-in-rightLarge") )  $(this).addClass('fadeInRightLarge');
			if( $(this).hasClass("slide-leftLarge") )  $(this).addClass('slideLeftLarge');
			if( $(this).hasClass("slide-rightLarge") )  $(this).addClass('slideRightLarge');
		}else {

			 // if( $(this).hasClass('fadeInDown') ) $(this).removeClass(' fadeInDown');
			 // if( $(this).hasClass('fadeInLeft') ) $(this).removeClass('fadeInLeft');
			 // if( $(this).hasClass('fadeInRight') ) $(this).removeClass(' fadeInRight');
			if( $(this).hasClass('fadeInDown') ) $(this).removeClass('ani-view fade-in-down fadeInDown');
			if( $(this).hasClass('fadeInUp') ) $(this).removeClass('ani-view fade-in-up fadeInUp');
			if( $(this).hasClass('fadeInDownLarge') ) $(this).removeClass('ani-view fade-in-downLarge fadeInDownLarge');
			if( $(this).hasClass('fadeInLeft') ) $(this).removeClass('ani-view fade-in-left fadeInLeft');
			if( $(this).hasClass('fadeInLeftLarge') ) $(this).removeClass('ani-view fade-in-leftLarge fadeInLeftLarge');
			if( $(this).hasClass('fadeInRight') ) $(this).removeClass('ani-view fade-in-right fadeInRight');
			if( $(this).hasClass('fadeInRightLarge') ) $(this).removeClass('ani-view fade-in-rightLarge fadeInRightLarge');
			if( $(this).hasClass('slideLeftLarge') ) $(this).removeClass('ani-view slide-leftLarge slideLeftLarge');
			if( $(this).hasClass('slideRightLarge') ) $(this).removeClass('ani-view slide-rightLarge slideRightLarge');
		}

	});
});