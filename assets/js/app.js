// /**
//  * app.js
//  */
//
// //oCPC
// window._agl = window._agl || [];
// (function () {
//     _agl.push(
//         ['production', '_f7L2XwGXjyszb4d1e2oxPybgD']
//     );
//     (function () {
//         var agl = document.createElement('script');
//         agl.type = 'text/javascript';
//         agl.async = true;
//         agl.src = 'https://fxgate.baidu.com/angelia/fcagl.js?production=_f7L2XwGXjyszb4d1e2oxPybgD';
//         var s = document.getElementsByTagName('script')[0];
//         s.parentNode.insertBefore(agl, s);
//     })();
// })();
//
// //获取省市数据
// $(function(){
//
//
//     var channel = GetQueryString('from');
//     if(channel){
//         $.cookie('channel', channel, {path: '/' });
//     }
//     // if(sessionStorage.getItem("channel") && $("#backGrouop").length > 0){
//     //     var href = "https://www.xydec.com.cn?from="+sessionStorage.getItem("channel")
//     //     $("#backGrouop a").attr('href', href);
//     // }
//
//     if(branch.code == 1){
//         var address_province = $.cookie('address_province') ? $.cookie('address_province') : null; //省
//         var address_city = $.cookie('address_city') ? $.cookie('address_city') : null;  //市
//         //var address_province = $.cookie('address_province') ? $.cookie('address_province') : "广东省"; //省
//         //var address_city = $.cookie('address_city') ? $.cookie('address_city') : "广州市";  //市
//         //var address_district = $.cookie('address_district') ? $.cookie('address_district') : null;  //区
//         if ($("input[name=remark]").length > 0 && $("input[name=remark]").val() == '常州公司20周年庆PC专题') {
//             address_province = 320000;
//             address_city = 320400;
//         }
//     } else {
//         var address_province = branch.province_id;
//         var address_city = branch.city_id;
//     }
//     if (address_province && address_city){
//         getProvice(address_province);
//         getCity(address_province, address_city, initialize=true);
//     } else {
//         getProvice(address_province);
//     }
//
//     $("select[name='province_id']").change(function () {
//         var province_id = $(this).val();
//         console.log(province_id)
//         getCity(province_id, "", $(this));
//     });
//
//     //判断是否为移动端访问
//     function is_mobile(){
//         var mobileAgent = new Array("iphone", "ipod", "ipad", "android","windows ce", "mobile","midp", "rv:1.2.3.4","blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
//         var userAgent = navigator.userAgent.toLowerCase();
//         var isMobile = false;
//         for (var i=0; i<mobileAgent.length; i++){
//             if (userAgent.indexOf(mobileAgent[i])!=-1){
//                 isMobile = true;
//                 break;
//             }
//         }
//         return isMobile;
//        }
//
//     if(is_mobile()){
//         window.location.href='https://m.xydec.com.cn?redirect_from_pc';
//     }
//
//     //判断是否为ie浏览器,包括IE edge
//     function isIE() {
//         if(!!window.ActiveXObject || "ActiveXObject" in window){
//             return true;
//         }else{
//             return false;
//         }
//     }
//     /*if (isIE()){
//        $(".queryoffer .form-item,#footer_form .queryoffer select").css('backgroundImage', 'none');
//     }*/
//
//     //图片懒加载
//     if($("img.lazy").length > 0){
//         $("img.lazy").lazyload({
//             effect: "fadeIn",
//             placeholder :'/static/images/lazy-load.jpg',
//             threshold: 250
//         });
//     }
//
//     //右侧导航
//     $(window).scroll(function (e) {
//         var wh = $(window).scrollTop();
//         if (wh > 500) {
//             $('.online').fadeIn();
//         } else {
//             $('.online').fadeOut();
//         }
//     });
//
//     //底部导航
//     $(window).scroll(function (e) {
//         var wh = $(window).scrollTop();
//         var fh = $(".foot").offset().top;
//
//         if (fh - wh < 500) {
//             $('.ffloat').fadeOut();
//         } else {
//             $('.ffloat').fadeIn();
//         }
//     });
//
//     //返回顶部
//     /*backToTop($('#toTop'));
//     function backToTop(obj,time){
//         time ? time : 800;
//         obj.click(function(time){
//             $('html,body').animate({
//                 scrollTop: 0
//             }, time);
//         });
//     }*/
//
//     $(".top").click(function(){
//         $("html,body").animate({scrollTop: 0}, 500);
//     });
//
//     //预约弹窗
//     $("#online").click(function () {
//         $(".dialog_yuyue").show();
//     });
//
//     $(".dialog_yuyue .dialog_close").click(function () {
//         $(".dialog_yuyue").hide();
//     });
//
//
//     var remark = "", other = "";designer_id = "";
//     $('.alertc_d .al_dc ul li').click(function(){
//         $(this).siblings('li').removeClass('on');
//         $(this).addClass('on');
//         other = "装修风格：" + $(this).find('.tit').text();
//     });
//
//     $(".newzlbj_box1 li").click(function () {
//         other = "装修风格：" + $(this).find('.tit').text();
//     });
//     $(".newzlbj_box2 li").click(function () {
//         other += "；房屋面积：" + $(this).find('a').text();
//     });
//     $(".newzlbj_box3 li").click(function () {
//         other += "；房屋户型：" + $(this).find('.tit').text();
//     });
//
//     $(".onlinec_g").click(function () {
//         designer_id = $(this).data("id");
//         return false;
//     });
//
//     $('.alertc_a .al_c .listl a').click(function(){
//         $(this).siblings('a').removeClass('on');
//         $(this).addClass('on');
//         var index = $(this).index();
//         if (index == 1) {
//             other = "旧房改造";
//             $(".alertc_a .al_t .tit").text("旧房改造");
//         } else {
//             other = "新房装修";
//             $(".alertc_a .al_t .tit").text("新房装修");
//         }
//     });
//
//     $('.onlinec_a').click(function(){
//         other = "新房装修";
//         $(".alertc_a .al_t .tit").text("新房装修");
//         $(".alertc_a .listl a").removeClass('on');
//         $(".alertc_a .listl a").eq(0).addClass('on');
//         $('.alertc_a').css('display','block');
//     });
//     $('.onlinec_b').click(function(){
//         $('.alertc_b').css('display','block');
//     });
//     $('.onlinec_c').click(function(){
//         $('.alertc_c').css('display','block');
//     });
//     $('.onlinec_d').click(function(){
//         $('.alertc_d').css('display','block');
//         other = "装修风格：简约";
//     });
//     $('.onlinec_e').click(function(){
//         $(".newzlbjc ul li").parent().attr("data-key", -1);
//         loadNewSwiper();
//         $('.alertc_e').css('display','block');
//     });
//     $('.onlinec_z').click(function(){
//         $('.alertc_z').css('display','block');
//     });
//     $('.alertc .alertclose').click(function(){
//         other = remark = mobile = size  = designer_id = "";
//         $('.alertc').css('display','none');
//     });
//     $('.onlinec_f').click(function(){
//         other = "旧房改造";
//         $(".alertc_a .al_t .tit").text("旧房改造");
//         $(".alertc_a .listl a").removeClass('on');
//         $(".alertc_a .listl a").eq(1).addClass('on');
//         $('.alertc_a').css('display','block');
//     });
//
//     $('.onlinec_g').click(function(){
//         $('.alertc_f').css('display','block');
//     });
//
//     function loadNewSwiper(){
//         var newzlbjSwiper = new Swiper('.newzlbjc', {
//             slidesPerView: 1,//个数设置
//             //noSwiping: true,
//             observer: true,
//             observeParents: true,
//         });
//         $(".newzlbjc ul li").click(function(e){
//
//             //e.stopPropagation();
//             //console.log(11);
//             var page = $(this).parents('.swiper-slide').attr('data-page');
//             var that = $(this).siblings('.on');
//
//             $(this).addClass('on').siblings().removeClass('on');
//             var data = $(this).attr("data-key");
//             $(this).parent().attr("data-key", data);
//
//
//             if ( page == 2 && ($('.al_c').find('.newzlbj_box2').attr('data-key') == '-1' || $('.al_c').find('.newzlbj_box3').attr('data-key') == '-1')) {
//                 return false;
//             }
//             newzlbjSwiper.slideNext();
//         })
//     }
//
//     $(".order_form .other a").click(function () {
//         $(".order_form .other a").removeClass('on');
//         $(this).addClass('on');
//         other = $(this).text();
//     });
//
//     //表单提交
//     $(".form_submit").click(function(e){
//         var el = $(this).parents('.order_form');
//         var data = {};
//         var type = data.type = $(this).data('type');
//         var position = $(this).data('position');
//         remark = $(this).val();
//         data.province_id = $.trim(el.find("select[name=province_id]").val());
//         data.city_id = $.trim(el.find("select[name=city_id]").val());
//         data.name = $.trim(el.find("input[name=name]").val());
//         data.mobile = $.trim(el.find("input[name=mobile]").val());
//         data.remark = remark;
//         data.other = other;
//         data.url = window.location.href;
//         data.channel = $.cookie('channel');
//
//         if (designer_id){
//             data.designer_id = designer_id;
//         }
//         if (el.find("input[name=building_id]").length > 0){
//             data.building_id = $.trim(el.find("input[name=building_id]").val());
//         }
//         if (el.find("input[name=size]").length > 0){
//
//             data.size = $.trim(el.find("input[name=size]").val());
//         }
//
//         if (position == "foot" && other == "") {
//             data.other = "新房";
//         }
//
//         var province_city = el.find("input[name=province_city]");
//         if (province_city.length > 0) {
//             var region = province_city.val();
//             region = region.split(",");
//             data.province_id = region[0];
//             data.city_id = region[1];
//             console.log(data.city_id)
//             if(data.city_id == "" || typeof(data.city_id) == "undefined"){
//                 layer.msg("请选择所在城市");
//                 return false;
//             }
//         }
//
//         if(type == 1){  //在线预约
//             //data.size = $.trim(el.find("input[name=size]").val());
//         }
//         if (type == 4) {
//             data.other = $.trim(el.find("textarea[name=other]").val());
//         }
//         //数据验证
//         if(validate(el, type, data)){
//             $.ajax({
//                 type: "POST",
//                 url: "/index/order/index?t=" + Math.random(),
//                 data: data,
//                 dataType: "json",
//                 beforeSend: function () {
//                     layer.load(1);
//                 },
//                 success: function (res) {
//                     console.log(res);
//                     layer.closeAll();
//                     if (res.code > 0) {
//                         layer.msg("预约成功，客服稍候会与您联系",{icon: 1,time: 2000,shade: 0.3},function(){
//                             //el[0].reset();
//                             el.find("input[name=size]").val("");
//                             el.find("input[name=name]").val("");
//                             el.find("input[name=mobile]").val("");
//                             other = remark = size = "";
//                             if ($(".alertc").is(':visible')) {
//                                 el.css('display', 'none');
//                             }
//                             //$(".queryoffer .form-item select,.queryoffer .form-item input").css("border", "1px solid #cacaca");
//                         });
//                     } else {
//                         layer.msg(res.msg);
//                     }
//                 },
//                 error: function (error) {
//                     console.log(error);
//                     layer.closeAll();
//                 }
//             });
//         }
//         return false;
//     });
//
//     function validate(el,type, data){
//         var $nameObj = el.find("input[name=name]");
//         var $sizeObj = el.find("input[name=size]");
//         var $provinceObj = el.find("select[name=province_id]");
//         var $cityObj = el.find("select[name=city_id]");
//
//         if ($provinceObj.length > 0 && data.province_id == ""){
//             layer.msg("请选择省市");
//             return false;
//         }
//         if ($cityObj.length > 0 && data.city_id == ""){
//             layer.msg("请选择城市");
//             return false;
//         }
//         if ($nameObj.length > 0 && data.name == ""){
//             layer.msg("请填写您的姓名");
//             return false;
//         }
//         if ($sizeObj.length > 0 && data.size == ""){
//             layer.msg("请填写您的房屋面积");
//             return false;
//         }
//         if ($sizeObj.length > 0 && data.size == ""){
//             layer.msg("请填写您的房屋面积");
//             return false;
//         }
//
//         if (type == 4 && data.other == "") {
//             layer.msg("请填写您的报修内容");
//             return false;
//         }
//         if(!/^\d{11}$/.test(data.mobile)){
//             layer.msg("请填写您的手机号码");
//             /*el.find(".form-item-mobile input").css({
//                 border: "1px solid #da251d"
//             });
//             el.find("input[name=mobile]").focus();*/
//             return false;
//         }
//         return true;
//     }
//
//     //底部导航
//     /*$(".footer_form_main").addClass("on");
//     $("#close_footer_form").click(function(){
//         $(".footer_form_main").removeClass("on");
//         setTimeout(function(){
//             $(".footer_form_guird").addClass("on");
//             $("#footer_form").css('width', '126px');
//         },800)
//     });
//     $(".footer_form_guird").click(function(){
//         $(this).removeClass("on");
//         $("#footer_form").css('width', '100%');
//         setTimeout(function(){
//             $(".footer_form_main").addClass("on");
//         },500)
//     });
//     $(window).scroll(function (e) {
//         clearTimeout(timer);
//         var wh = $(window).scrollTop();
//         if($(".footer_form_main").hasClass("on") && wh > 100){
//             $(".footer_form_main").removeClass("on");
//             var timer = setTimeout(function(){
//                 $(".footer_form_guird").addClass("on");
//                 $("#footer_form").css('width', '126px');
//             },800);
//         }
//     });*/
//
// });
//
//
//     //取消选中并且取消右键操作
//     document.body.onselectstart =
//     document.body.oncontextmenu =
//         function () {
//             return false; //取消浏览器默认操作
//         };
//
// // zixun
// function open_swt(text = ''){
//     var link = "https://tb.53kf.com/code/client/4f92fc8c344c7e6d2ae7d180c63358987/2";
//     window.open(link,'_blank');
// }
// /**
//  * 轮流动画实现
//  * @param obj  目标元素
//  * @param activeClass  活动状态样式名称
//  * @param time  间隔时间
//  * demo： animateFun('.box-2 .pic-list li','on','1000');
//  */
// function animateFun(obj,activeClass,time){
//     setInterval(function () {
//         var index = $(obj+'.'+activeClass).index();
//         if(index == ($(obj).length-1) ){
//             $(obj).first().addClass(activeClass);
//             $(obj).last().removeClass(activeClass);
//         }else{
//             $(obj).eq(index).removeClass(activeClass).next().addClass(activeClass);
//         }
//     },time);
// }
// /* 走马灯 */
// function lantern($this,time){
//     var scrollTimer;
//     $($this).hover(function(){
//         clearInterval(scrollTimer);
//     },function(){
//         scrollTimer = setInterval(function(){
//             scrollNews( $this );
//         },time||2000);
//     }).trigger("mouseout");
//     function scrollNews(obj){
//         var $self = $(obj).find("ul:first");
//         var lineHeight = $self.find("li:first").height();
//         $self.animate({"margin-top":-lineHeight+"px"},600,function(){
//             $self.css({"margin-top":"0px"}).find("li:first").appendTo($self);
//         });
//     };
// }
//
// //设置cookie
// function setCookie(name,value,time)
// {
//     var strsec = getsec(time);
//     var exp = new Date();
//     exp.setTime(exp.getTime() + strsec*1);
//     // document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
//     document.cookie = name + "="+ (escape (value)).replace(/%/g, '%25'); + ";expires=" + exp.toGMTString();
// }
// //读取cookies
// function getCookie(name)
// {
//     var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
//     if(arr=document.cookie.match(reg))
//     // return (arr[2]);
//     // return unescape(arr[2]);
//         return unescape(unescape(arr[2]));
//     else
//         return null;
// }
// //获取URL中的参数
// function GetQueryString(name)
// {
//     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
//     var r = window.location.search.substr(1).match(reg);
//     if(r!=null)return  unescape(r[2]); return null;
// }
//
// function setNav(i) {
//     if ($(".nav").length > 0){
//         $(".nav ul li a").removeClass("curr");
//         $(".nav ul li a").eq(i).addClass("curr");
//     } else {
//         $(".znav ul li a").removeClass("curr");
//         $(".znav ul li a").eq(i).addClass("curr");
//     }
// }
