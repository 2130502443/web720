$(function () {
  const baseSize = 100;
  // 设置 rem 函数
  function setRem() {
    let designSize = 1920;
    const html = document.documentElement;

    if (window.innerWidth <= 992) {
      designSize = 750;
      html.style.fontSize = (html.clientWidth * 100) / designSize + "px";
    } else if (window.innerWidth <= 1920 && window.innerWidth > 992) {
      // 当前页面宽度相对于 1920 宽的缩放比例，可根据自己设计图的宽度修改。
      const scale = html.clientWidth / designSize;
      // 设置页面根节点字体大小
      html.style.fontSize = baseSize * Math.min(scale, 2) + "px";
    } else {
      html.style.fontSize = "100px";
    }
  }
  // 初始化
  setRem();

  // 改变窗口大小时重新设置 rem
  window.onresize = function () {
    setRem();
  };

  nav_tial1();
  $("header .head-search").on("click", function (e) {
    $(".search-wrap .search-all").slideToggle(500);
  });
  $(".search-wrap .closed").on("click", function (e) {
    $(".search-wrap .search-all").slideUp(500);
  });

  $("header .head-langBox").on("click", function (e) {
    $(this).find("ul").slideToggle();
    event.stopPropagation();
  });

  $(".nav-list>li").mouseover(function () {
    $(this).children(".nav-more-list").stop().css("visibility", "visible");
  });
  $(".nav-list>li").mouseout(function () {
    $(this).children(".nav-more-list").stop().css("visibility", "hidden");
  });

  $(".nav-two-div .nav-two-div-left .nav-twoa:first-child").addClass("active");
  $(".nav-two-div .nav-two-div-left .nav-twoa").hover(function () {
    var i = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    $(".nav-two-div .nav-two-div-center .nav-lists")
      .eq(i)
      .addClass("active")
      .siblings()
      .removeClass("active");
    $(".nav-two-div .nav-two-div-right .nav-lists")
      .eq(i)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
  $(".nav-two-div .nav-two-div-center .nav-twoa").hover(function () {
    var i = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    $(".nav-two-div .nav-lists.active .nav-in-lists")
      .eq(i)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });

  $(".nav-list>li").mouseover(function () {
    $(this).children(".nav-down").stop().css("display", "block");
  });
  $(".nav-list>li").mouseout(function () {
    $(this).children(".nav-down").stop().css("display", "none");
  });

  // $(window).scrollTop(0);
  // $("header.isFixed").addClass("tofixed");
  // $(window).scroll(function () {
  //   if ($(window).scrollTop() > 100) {
  //     $("header.isFixed").removeClass("tofixed");
  //   } else {
  //     $("header.isFixed").addClass("tofixed");
  //   }
  // });

  // banner swiper
  var mySwiper = new Swiper(".index-banner", {
    // loop: $(".index-banner .swiper-slide").length > 1,
    speed: 1000,
    lazy: {
      loadPrevNext: true,
    },
    spaceBetween: 0,
    navigation: {
      nextEl: ".index-banner .swiper-button-next",
      prevEl: ".index-banner .swiper-button-prev",
    },
    pagination: {
      el: ".index-banner .swiper-pagination",
      type: "progressbar",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    on: {
      init: function () {
        swiperAnimateCache(this);
        swiperAnimate(this);
      },
      slideChangeTransitionEnd: function () {
        swiperAnimate(this);
      },
    },
  });

  if ($(".index-banner .swiper-slide").length <= 1) {
    $(".index-banner .swiper-pagination").hide();
  }

  var index3ImgSwiper = new Swiper(".index3ImgSwiper .swiper", {
    loop: true,
    pagination: {
      el: ".index3ImgSwiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".index3ImgSwiper .swiper-button-next",
      prevEl: ".index3ImgSwiper .swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  var index3Swiper = new Swiper(".index3Swiper .swiper", {
    loop: true,
    pagination: {
      el: ".index3Swiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".index3 .swiper-button-next",
      prevEl: ".index3 .swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    controller: {
      control: index3ImgSwiper,
    },
  });

  var index5Swiper = new Swiper(".index5Swiper .swiper", {
    loop: true,
    centeredSlides: true,
    slidesOffsetBefore: 330,
    pagination: {
      el: ".index5Swiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".index5Swiper .swiper-button-next",
      prevEl: ".index5Swiper .swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        //当屏幕宽度大于等于320
        spaceBetween: 0,
        slidesPerView: 1,
        slidesOffsetBefore: 0,
      },
      768: {
        //当屏幕宽度大于等于768
        slidesPerView: "auto",
        spaceBetween: 20,
      },
      1220: {
        slidesOffsetBefore: 200,
        slidesPerView: "auto",
        spaceBetween: 20,
      },
    },
  });

  var ad2Swiper = new Swiper(".ad2Swiper .swiper", {
    loop: true,
    centeredSlides: true,
    pagination: {
      el: ".ad2Swiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".ad2Swiper .swiper-button-next",
      prevEl: ".ad2Swiper .swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        //当屏幕宽度大于等于320
        spaceBetween: 0,
        slidesPerView: 1,
      },
      768: {
        //当屏幕宽度大于等于768
        slidesPerView: "auto",
        spaceBetween: 0,
      },
    },
  });

  var productHeadSwiper = new Swiper(".product-head .swiper", {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        //当屏幕宽度大于等于320
        spaceBetween: 0,
        slidesPerView: 1,
      },
      768: {
        //当屏幕宽度大于等于1280
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },
  });

  $(".team1 .tab").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
    $(".team1 .box").removeClass("on").eq($(this).index()).addClass("on");
  });

  // $(".app1 .item").click(function () {
  //   $(this).addClass("on").siblings().removeClass("on");
  //   $(".app2 .box").removeClass("on").eq($(this).index()).addClass("on");
  //   $(".app3 .box").removeClass("on").eq($(this).index()).addClass("on");
  // });
});

$(function () {
  var can = true;
  var can1 = true;
  document.onscroll = function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if ($(".index4 .numBox").length !== 0) {
      if (t >= $(".index4")[0].offsetTop - 300 && can) {
        $(".index4 .num1").numberRock({
          speed: 28,
          count: $(".index4 .num1").text(),
        });
        $(".index4 .num2").numberRock({
          speed: 30,
          count: $(".index4 .num2").text(),
        });
        $(".index4 .num3").numberRock({
          speed: 28,
          count: $(".index4 .num3").text(),
        });
        $(".index4 .num4").numberRock({
          speed: 28,
          count: $(".index4 .num4").text(),
        });
        can = false;
      }
    }
  };

  document.onscroll = function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if ($(".ad2 .items").length !== 0) {
      if (t >= $(".ad2")[0].offsetTop - 300 && can1) {
        $(".ad2 .num1").numberRock({
          speed: 28,
          count: $(".ad2 .num1").text(),
        });
        $(".ad2 .num2").numberRock({
          speed: 30,
          count: $(".ad2 .num2").text(),
        });
        $(".ad2 .num3").numberRock({
          speed: 28,
          count: $(".ad2 .num3").text(),
        });
        $(".ad2 .num4").numberRock({
          speed: 28,
          count: $(".ad2 .num4").text(),
        });
        can1 = false;
      }
    }
  };
});

$(function () {
  $(".profileBtnBox .btn").click(function () {
    $(".profileBtnBox .btn").removeClass("on");
    $(this).addClass("on");

    $(".profileSwitchBox .switch").removeClass("on");
    $(".profileSwitchBox .switch").eq($(this).index()).addClass("on");
  });

  $(".tabs-list p.tabs-head").click(function () {
    $(this).toggleClass("active");
    $(this).next("div").slideToggle(500);
    var lis = $(this).parent("li").siblings("li");
    lis.children("p").removeClass("active");
    lis.children("div").slideUp(500);
  });

  $(".pro_S_img img").click(function () {
    var img_url = $(this).find("img").attr("src");
    var i = $(this).index;
    console.log(img_url);
  });
});

$(function () {
  $(".productBtnBox .btn").click(function () {
    scrollToTop($(".productDetailContentBox ." + $(this).attr("id")).offset().top - 70);
    $(".productBtnBox .btn").removeClass("on");
    $(this).addClass("on");
  });
  $(document).scroll(function () {
    if ($(document).height() <= parseInt($(document).scrollTop()) + $(window).height()) {
      $(".productBtnBox .btn").removeClass("on");
      $(".productBtnBox .btn:last").addClass("on");
      return;
    }
    var top = $(document).scrollTop();
    $(".productDetailContentBox .conBox").each(function (i, item) {
      if ($(this).offset().top - 100 <= top) {
        $(".productBtnBox .btn").removeClass("on");
        $(".productBtnBox .btn#" + item.classList[1]).addClass("on");
      }
    });
  });
});

function scrollToTop(number) {
  window.scrollTo({
    top: number,
    behavior: "smooth",
  });
}

function nav_tial1() {
  $(".nav_tile .dropdown").mouseover(function () {
    var _data = $(this).attr("data-name");
    $(this).addClass("on").siblings().removeClass("on");
    $(".droplist_tile .drop_tile").hide();
    $(".droplist_tile .drop_tile[data-name=" + _data + "]").show();
  });
  $(".nav_tile .dropdown").mouseout(function () {
    $(".nav_tile .dropdown").removeClass("on");
  });
  $(".headerTop,.request").hover(function () {
    $(".droplist_tile .drop_tile").hide();
    $(".nav_tile .dropdown").removeClass("on");
  });
  $(".droplist_tile .drop_tile").hover(
    function () {
      var _data = $(this).attr("data-name");
      $(".nav_tile .dropdown").removeClass("on");
      $(".nav_tile .dropdown[data-name=" + _data + "]").addClass("on");
      $(this).show();
    },
    function () {
      $(".droplist_tile .drop_tile").hide();
      $(".nav_tile .dropdown").removeClass("on");
    }
  );
}

// search
$(function () {
  $(".inputBox").bind("input", function (event) {
    let val = $(".inputBox input").val();

    if (val.length > 0) {
      $(".inputBox .input .close").show();
    } else {
      $(".inputBox .input .close").hide();
    }
  });

  $(".inputBox .input .close").click(function () {
    $(".inputBox input").val("");
  });
});

$(function () {
  let newsOffset = [];
  $(".toc .tabs").empty();
  $(".news .ctx").each(function () {
    let name = $(this).find("h3").text();
    $(".toc .tabs").append(`
      <div class="tab">${name}</div>
    `);
    newsOffset.push($(this).offset().top);
  });

  $(document).scroll(function () {
    let top = $(document).scrollTop();

    newsOffset.forEach(function (item, key) {
      let itemNew = newsOffset[key + 1];
      if (top >= item && top <= itemNew) {
        $(".toc .tab").removeClass("on").eq(key).addClass("on");
      }
    });
  });

  $(".toc .tab").click(function () {
    scrollToTop(newsOffset[$(this).index()]);
    $(".toc .tab").removeClass("on");
    $(this).addClass("on");
  });

  var readTime = document.querySelector(".news1Content")
    ? document.querySelector(".news1Content").innerText.length
    : 0;
  var readTime = readTime / 400;
  var readTime = Math.round(readTime); //四舍五入

  let time = readTime + " minute";

  $("#readTime").html(time);
});
