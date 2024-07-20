$(function(){
    //--
    if ($(window).width() < 1004) {
        $('.Phone-Box').find('img').css('width', '100%');
        $('.Phone').find('img').css('height', 'auto');
        $('.parameter .list').find('img').css('width', '100%');
        $('.parameter .list').find('img').css('height', 'auto');
        $('.parameter .list').find('input').css('width', '100%');
        $('.parameter .list').find('input').css('height', 'auto');
$('.newShow .content').find('img').css('width', '100%');
        $('.newShow .content').find('img').css('height', 'auto');
        $('.newShow .content').find('input').css('width', '100%');
        $('.newShow .content').find('input').css('height', 'auto');
    }
    else {
        $('.parameter .list').find('img').css('width', '100%');
        $('.parameter .list').find('img').css('height', 'auto');
        $('.parameter .list').find('input').css('width', '100%');
        $('.parameter .list').find('input').css('height', 'auto');
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".headDiv").addClass('on');
        }
        else {
            $(".headDiv").removeClass('on');
        }
    });

	$('.headDiv').hover(function(){
		$(this).addClass('hov');
	},function(){
		$(this).removeClass('hov');

	});
    //--
	$('.sNavA').each(function (i) {
        $(this).hover(
		   function () {
		   	   var left = $(this).offset().left;
			   $('.sNav .list').eq(i).css('left',left);
		       $('.sNav').eq(i).css('top', $(this).offset().top + 90);
			   $('.sNavA').eq(i).addClass('liNow1');
		       $('.sNav').eq(i).slideToggle(200);
		   },
		   function () {
			   $('.sNavA').eq(i).removeClass('liNow1');
		       $('.sNav').hide();
		   }
		)
    })
    $('.sNav').each(function (i) {
        $(this).hover(
		   function () {
		   	   $('.headDiv').addClass('hov');
		       $('.sNavA').eq(i).addClass('liNow1');
		       $(this).show();
		   },
		   function () {
		   	   $('.headDiv').removeClass('hov');
		       $('.sNavA').removeClass('liNow1');
		       $(this).hide();
		   }
		)
    })
	//--
	$('.tabContentDiv').find('.tabContent:first').show();
	$('.tab').each(function(i){
		$(this).find('li').each(function(ii){
			$(this).hover(
			function(){
				$('.tab').eq(i).find('li').removeClass('liNow');
				$(this).addClass('liNow');
				$('.tabContentDiv').eq(i).find('.tabContent').hide();
				$('.tabContentDiv').eq(i).find('.tabContent').eq(ii).show();
				},
			function(){}	
				)
			})
		})
	//--
	$('.tabContentDiv2').find('.tabContent2:first').show();
	$('.tab2').each(function(i){
		$(this).find('li').each(function(ii){
			$(this).click(
			function(){
				$('.tab2').eq(i).find('li').removeClass('liNow');
				$(this).addClass('liNow');
				$('.tabContentDiv2').eq(i).find('.tabContent2').hide();
				$('.tabContentDiv2').eq(i).find('.tabContent2').eq(ii).show();
				}
				)
			})
		})
	//--
	$('.tabContentDiv3').find('.tabContent3:first').show();
	$('.tab3').each(function(i){
		$(this).find('dd').each(function(ii){
			$(this).hover(
			function(){
				$('.tab3').eq(i).find('dd').removeClass('ddNow');
				$(this).addClass('ddNow');
				$('.tabContentDiv3').eq(i).find('.tabContent3').hide();
				$('.tabContentDiv3').eq(i).find('.tabContent3').eq(ii).show();
				},
			function(){}	
				)
			})
		})
	//--
	$('.listHover').find('li').hover(
	   function(){
		   $(this).addClass('on');
		   },
	   function(){
		   $(this).removeClass('on');
		   }
	)
	//--
	$('.topA').click(function(){
		$('body,html').animate({scrollTop: 0}, 500);


		})
	//--
	$('.sideTitleTel').find('.tan').toggle(
	   function(){
		   $('.sideTitleNav').show();
		   $('.sideTitleTel').find('.con').addClass('on');
		   },
	   function(){
		   $('.sideTitleNav').hide();
		   $('.sideTitleTel').find('.con').removeClass('on');
		   }
	)
	//--
	$('.technology').find('.list').find('li:odd').addClass('li01');
	if($('.honorPic').length>0){
		$(".honorPic").slide({mainCell:".list ul",autoPage:true,effect:"leftLoop",easing:"easeOutSine",autoPlay:true,vis:3,
		startFun:function(i,c){
			$(".honorLayer").html("");
		},
		endFun:function(i,c){
			$(".honorLayer").html($(".honorPic").find('li').eq(i+2).html());
		}
		});
		}
	//--
	$('.honorLayer').each(function(i){
		$(this).click(function(){
			prompt_fun('.bigPicLayer');
			})
		})
    //--
    $('.navIco').click(function(){
		$('.navLayer').animate({right: "0",width:"100%"}, 500);
		$('.pageBg').fadeIn(500);
		})
	$('.navLayer').find('.closeBtn').click(function(){
		$('.navLayer').animate({right: "-100%",width:0}, 500);
		$('.navLayer').find('a').removeClass('aNow');
		$('.navLayer').find('.list').hide();
		$('.pageBg').fadeOut(500);
		})
	//--
	$(".subNav1").click(function(){
			$(this).toggleClass("currentDt").siblings(".subNav1").removeClass("currentDt")
			$(this).next(".navContent").slideToggle(300).siblings(".navContent").slideUp(500)
	})
	//--
	$('.sideBar').find('li').hover(
	   function(){
		   $(this).addClass('liNow');
		   },
	   function(){
		   $(this).removeClass('liNow');
		   }
	)
	//--
	$('.topSearch').hover(
		function(){
			$('.topSearch input').fadeIn();
			$('.topSearch').addClass('on');
		},
		function(){
			$('.topSearch input').fadeOut();
			$('.topSearch').removeClass('on');
		}
	)
	//--
	$('.case').find('.list').find('li').hover(
	  function(){
	      $(this).find('.hideBox').fadeIn(200);
		  $(this).find('.hideBox').height($(this).height());
		  },
	  function(){
		  $(this).find('.hideBox').fadeOut(200);
		  }
	)
	//--
	$('.joinPart2').find('li').hover(
	   function(){
		   $(this).find('.ico').stop().animate({top: -6}, 100);
		   $(this).find('.ico').delay(100).animate({top: 0}, 200);
		   },
	   function(){
		   }
	)
	//--
	$('.job').find('.list').find('li').find('.name').each(function(i){
		$(this).find('a').click(function(){
			if($(this).hasClass('liNow')){
				$('.job').find('.list').find('li').find('a').removeClass('liNow');
				$('.job').find('.list').find('li').removeClass('liNow');
				$('.job').find('.list').find('.box').slideUp(500);
				}else{
					$('.job').find('.list').find('li').find('a').removeClass('liNow');
					$('.job').find('.list').find('li').removeClass('liNow');
					$('.job').find('.list').find('.box').slideUp(500);
					$(this).addClass('liNow');
					$('.job').find('.list').find('li').eq(i).addClass('liNow');
					$('.job').find('.list').find('.box').eq(i).slideToggle(500);
				}
			})
		})
	//--
	$(document).ready(function () {
		setTimeout(function () {
			$('.lclwxz_footerbox').slideDown(400);
		}, 1000);
	});


	$(".lclwxz_footerbox .close").click(function () {
		$(".lclwxz_footerbox").slideToggle(100);
		$(".lclwxz_footerbox02").slideToggle(300);
		$(".footDiv").addClass('on');
	});
	$(".lclwxz_footerbox02").click(function () {
		$(".lclwxz_footerbox02").slideToggle(100);
		$(".lclwxz_footerbox").slideToggle(300);
		$(".footDiv").removeClass('on');
	});
	//下拉通用
	$('.select').each(function(i){
		function showFn(selectObj) {	//展开效果
			// 把其他的下拉收起
			$('.select').children("dd").slideUp(200);
			selectObj.children("dd").slideDown(200);
			selectObj.addClass('on');
		}  
		function hideFn(selectObj){    //关闭效果
			selectObj.children("dd").slideUp(200);
			selectObj.removeClass('on');
		}
		function hideAll(){
			$('.select dd').slideUp(200);
		};

		$(this).children('dt').click(function(){
			var index = $(this).parent().index();
			var selectObj = $(this).parent();
			$(this).next().is(":hidden")?showFn(selectObj):hideFn(selectObj);
		});
		$(this).children('dd').find("li").click(function(){   
			var index = $(this).closest('.select').index();
			var dataId=$(this).attr('data-id');
			var selectObj = $(this).closest('.select');
			$(this).closest('.select').children("dt").find('a').html($(this).html());
			$(this).closest('.select').children("dt").find('a').attr('data-id',dataId);
			hideFn(selectObj);
		});
		$("body").click(function(i){ 
			!$(i.target).parents(".select").first().is($(".select")) ? hideAll():"";
		});

	});
})



jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});	



function search() {
        var keys = document.getElementById("txtk").value;
        location.href = "/NewsCenter/search.aspx?a=n&keys=" + keys;
    }
    function entersearch() {
        //alert(dd);
        var keys = document.getElementById("txtk").value;
        var event = window.event || arguments.callee.caller.arguments[0];
        if (event.keyCode == 13) {
            //search();
            window.location.href = "/NewsCenter/search.aspx?a=n&keys=" + keys;
            return false;
        }
    }

