$(document).ready(function () {
  nav_normal();
  nav_tial();
  m_nav();
  form_validate();
  resizez();
  new WOW().init();
});

/*function nav_normal() {
    var dropdown = $('.nav_normal').find('.dropdown');
    dropdown.hover(function () {
        var drop_width = $(this).width();

        var dropdown_menu = $(this).find('.dropdown_menu');

        $(this).find('.nav_line').stop(!0, !0).animate({width: drop_width}, "linear");

        $(this).addClass('on');
        if (dropdown_menu.length > 0) {
            dropdown_menu.stop(!0, !0).show();
        }
    }, function () {
        $(this).removeClass('on');
        $(this).find('.nav_line').stop(!0, !0).animate({width: 0}, "linear");
        $(this).find('.dropdown_menu').stop(!0, !0).hide();
    })
};*/
function nav_normal() {
  var dropdown = $(".nav_normal").find(".dropdown");
  dropdown.hover(
    function () {
      var drop_width = $(this).width();

      var dropdown_menu = $(this).find(".dropdown_menu");

      $(this).find(".nav_line").stop(!0, !0).animate({ width: drop_width }, 100);

      $(this).addClass("on");
      if (dropdown_menu.length > 0) {
        dropdown_menu.stop(!0, !0).show();
        dropdown_menu.css("overflow", "visible");
        dropdown_menu.find("a").animate({ opacity: 1 }, 50);
      }
    },
    function () {
      var dropdown_menu = $(this).find(".dropdown_menu");
      $(this).removeClass("on");
      $(this).find(".nav_line").stop(!0, !0).animate({ width: 0 }, 100);
      dropdown_menu.find("a").animate({ opacity: 0 }, 50);
      $(this).find(".dropdown_menu").stop(!0, !0).hide();
    }
  );
  $(".nav_normal .dropdown_menu li.Three_menu").hover(
    function () {
      $(this).siblings().find("ul.Three_menu_box").hide();
      $(this).find("ul.Three_menu_box").show();
      $(this).addClass("on");
    },
    function () {
      $(this).find("ul.Three_menu_box").hide();
      $(this).removeClass("on");
    }
  );
}

function nav_tial() {
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

function m_nav() {
  var btn = $(".nav_toggle"),
    nav_box = $(".m_nav"),
    nav_list = $(".m_nav_toggle"),
    dropdown = $(".m_nav_toggle .dropdown");
  btn.click(function () {
    var num = $(".m_nav_toggle > li").length,
      nav_h = nav_list.height(),
      head_h = 50,
      max_nav_h = window.screen.height - head_h,
      navlist_h = max_nav_h > nav_h ? nav_h : max_nav_h,
      a = 0,
      b = 0,
      sub_s = 500 / num,
      sub_h = 1000 / num;
    console.log(navlist_h, num);
    if ($(this).hasClass("active")) {
      $("body,html").removeClass("overflow");
      $(this).removeClass("active");
      $(".dropdown_menu").removeClass("on");
      // nav_box.stop(!0, !0).animate({height: "0"},500,"linear");
      nav_box.stop(!0, !0).hide();
      $(".m_nav_toggle > li")
        .css({ transform: "matrix(1, -1, 0, 1, 200, 100)" })
        .find("a")
        .stop(!0, !0)
        .animate({ opacity: 0 }, 10);
      // for( a = 0; a < num ; a++) {
      //     (function (a,sub_h,b,num) {
      //         var set_t = sub_h * b;
      //         setTimeout(function () {
      //             if (btn.hasClass('active')) {
      //                 $('.m_nav_toggle > li').eq(a).css({transform: "matrix(1, -1, 0, 1, 200, 100)"}).find("a").stop(!0, !0).animate({opacity: 0}, 10);
      //             }
      //         }, set_t)
      //     })(a,sub_h,b,num);
      //     b++;
      // }
    } else {
      $("body,html").addClass("overflow");
      $(this).addClass("active");
      // nav_box.stop(!0, !0).animate({height: max_nav_h},500,"linear").delay(500).css({overflow: 'auto'});
      nav_box.stop(!0, !0).show();
      for (a = 0; a < num; a++) {
        (function (sub_s, a, num) {
          var set_t = sub_s * a;
          setTimeout(function () {
            if (btn.hasClass("active")) {
              $(".m_nav_toggle > li")
                .eq(a)
                .css({ transform: "matrix(1, 0, 0, 1, 0, 0)" })
                .find("a")
                .animate({ opacity: 1 }, 300);
              console.log(set_t, num, a);
            }
          }, set_t);
        })(sub_s, a, num);
      }
    }
  });
  dropdown.click(function () {});

  dropdown.each(function () {
    if ($(this).find(".dropdown_menu li").length > 0) {
      $(this).addClass("has_drop");
    }
  });
  dropdown.find("i").click(function () {
    var sub = $(this).next().next(".dropdown_menu");
    if (!sub.length > 0) {
      return true;
    }
    if (sub.height() == 0) {
      $(".dropdown_menu").removeClass("on");
      sub.addClass("on");
    } else {
      sub.removeClass("on");
    }
    return false;
  });
}

function resizez() {
  $(".vertical_middle").each(function () {
    var vertical_h = $(this).height();
    console.log(vertical_h);
    var half_h = vertical_h / 2 - vertical_h;
    $(this).css("margin-top", half_h);
  });
}

function form_validate() {
  $(".inp textarea").focus(function () {
    $(this).parent().addClass("active");
  });
  $(".inp textarea").blur(function () {
    $(this).parent().removeClass("active");
  });
  $(".inp input").focus(function () {
    $(this).parent().addClass("active");
  });
  $(".inp input").blur(function () {
    $(this).parent().removeClass("active");
  });
  $(".inp .required").bind("input propertychange", function () {
    var $val = $(this).val();
    if ($val == null || $val == "") {
      $(this).prev("label").show();
    } else {
      $(this).prev("label").hide();
    }
  });

  $("input:not(:submit)").each(function (index, element) {
    if ($(this).val() != "") {
      $(this).next("label").hide();
    } else {
      $(this).next("label").show();
    }
  });

  $("input:not(:submit)").keyup(function (e) {
    $(this).next("label").hide();
  });

  var emailReg = /^[-._A-Za-z0-9]+@([-._A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/;

  $("input:not(:submit),textarea:not(:submit)").blur(function (e) {
    var tips;
    var obj = $(this);
    var val = $(this).val();

    if (obj.is(".required")) {
      if (
        val == "" ||
        val == undefined ||
        val == null ||
        (val.length > 0 && val.trim().length == 0)
      ) {
        obj.next("label").show().addClass("tips");
        if (obj.next("label").is(".span_tips")) {
          tips = obj.next("label").html();
        } else {
          tips = "This field is required";
        }
      } else {
        obj.next("label").hide().removeClass("tips");
      }
    }

    if (val) {
      if (obj.is(".email")) {
        if (!emailReg.test(val)) {
          obj.next("label").show().addClass("tips");
          tips = "Invalid email address";
        } else {
          obj.next("label").hide().removeClass("tips");
          tips = "";
        }
      }
    }
    obj.next("label").html(tips);
  });

  $("input:submit").on("click", function () {
    var $form = $(this).parents("form");
    var istrue = true;
    var require = $form.find(".required");
    var email = $form.find(".email");
    if (require) {
      require.each(function (index, element) {
        var $span = $(this).next("label");
        if ($(this).val() == "") {
          if ($span.is(".span_tips")) {
            var tips = $span.html();
          } else {
            var tips = "This field is required";
          }
          istrue = false;
          $(this).val("");
          $(this).prev("label").show();
          $(this).next("label").html(tips);
          $(this).next("label").show().addClass("tips");
        }
      });
    }

    if (email) {
      email.each(function (index, element) {
        if (!emailReg.test($(this).val()) && $(this).val() != "") {
          var tips = "Invalid email address";
          istrue = false;
          $(this).prev("label").hide();
          $(this).next("label").html(tips);
          $(this).next("label").show().addClass("tips");
        }
      });
    }
    if (istrue == true) {
      // layer.load();
    }
    if (istrue) {
      var self = $(this);
      if (window.canSend == undefined) {
        window.canSend = true;
        self.css({ filter: "grayscale(1)" });
        setTimeout(function () {
          window.canSend = undefined;
          self.css({ filter: "grayscale(0)" });
        }, 2000);
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  });
}

$(document).ready(function () {
  $("input[name='email']").keyup(trimkeyup);
});
function trimkeyup(e) {
  lucene_objInput = $(this);
  if (e.keyCode != 38 && e.keyCode != 40 && e.keyCode != 13) {
    var im = $.trim(lucene_objInput.val());
    lucene_objInput.val(im);
  }
}

$(function () {
  $(document).ready(function () {
    $("input,textarea").focus(function () {
      $(this).parent().addClass("inputon");
    });
    $("input,textarea").blur(function () {
      var t = $(this);
      if (t.val() == "") {
        $(this).parent().removeClass("inputon");
      }
    });
  });
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 400) {
    $("#back_top").slideDown();
  } else {
    $("#back_top").slideUp();
  }
});
$(function () {
  $("#back_top").click(function (event) {
    $("html, body").stop().animate({ scrollTop: 0 });
  });
});

$(document).ready(function () {
  $(".video_click").on("click", function () {
    $(".iframe_box iframe").attr("src", $(this).attr("data-url"));
    $(".cboxOverlay").show();
    $(".colorbox").show();
  });
  $(".colse_click,.cboxOverlay").on("click", function () {
    $(".cboxOverlay").hide();
    $(".colorbox").hide();
    $(".iframe_box iframe").remove();
    $(".iframe_box .colorbox").append(
      '<iframe src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    );
  });
});

$(document).ready(function () {
  $(".product_video_click a").on("click", function () {
    $(".product_video iframe").attr("src", $(this).attr("data-url"));
    $(".product_video").show();
    $(".close_video").show();
    $(this).hide();
  });
  $(".close_video").on("click", function () {
    $(".product_video").hide();
    $(".product_video_click a").show();
    $(".product_video iframe").remove();
    $(".product_video").append(
      '<iframe src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    );
  });
});

function easyzoomImg() {
  var $easyzoom = $(".easyzoom").easyZoom();
  var api = $easyzoom.data("easyZoom");
}

$(function () {
  $(".pro_S_img .img").click(function () {
    var img_url = $(this).find("img").attr("src");
    var title = $(".parameter_box h1").text();
    var html =
      '<div class="easyzoom_box">\n' +
      '                                            <div class="easyzoom easyzoom_overlay">\n' +
      '                                                <a href="' +
      img_url +
      '">\n' +
      '                                                    <img src="' +
      img_url +
      '" alt="' +
      title +
      '" width="500"/>\n' +
      "                                                </a>\n" +
      "                                            </div>\n" +
      "                                        </div>";
    $(".pro_S_img .img").removeClass("on");
    $(this).addClass("on");
    $(".pro_B_img").empty().append(html);
    easyzoomImg();
  });
  var ww = $(window).width();
  $(".pro_S_img").slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 1000,
    arrows: true,
    fade: false,
    variableWidth: true,
  });
});

$(function () {
  $(".description .order_minus").click(function () {
    var eleInput = $(this).next(".order_quan_input");
    if (eleInput.val() == 1) {
      eleInput.val(1);
    } else {
      eleInput.val(parseInt(eleInput.val()) - 1);
    }
  });
  $(".description .order_plus").click(function () {
    var eleInput = $(this).prev(".order_quan_input");
    eleInput.val(parseInt(eleInput.val()) + 1);
  });
});

$(function () {
  $(".related_pro .item_box").slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  });
});

$(function () {
  $(".form_fixed_button").click(function () {
    $(".footer_fixed_form").toggleClass("active");
  });
});

$(function () {
  $(".addToBasket").click(function () {
    $(".prodInquireBasket").show();
  });
  $(".basket_title").click(function () {
    $(".prodInquireBasket").hide();
    $(".shoppingBasketIcon").show();
  });
  $(".shoppingBasketIcon").click(function () {
    $(this).hide();
    $(".prodInquireBasket").show();
  });
  $(".basket_btns .basketEmpty").click(function () {
    $(".prodInquireBasket").hide(300);
  });
});

$(function () {
  $(".del_tr").click(function () {
    $(this).parents("tr.pmark").empty();
  });
});

$(function () {
  $("table").wrap("<div class='slider_table'></div>");
  $(".table_responsive table").unwrap();
  $(".productDetailContentBox iframe").wrap("<div class='productIframe'></div>");
  $(".caseContentBox iframe").wrap("<div class='productIframe'></div>");
});

$(function () {
  $(".submenu_wrap_ul > li .li_click").click(function () {
    var _parent = $(this).parent();
    if (_parent.hasClass("on")) {
      $(this).next("ul.submenu_ul").slideUp(300);
      _parent.removeClass("on");
    } else {
      $(".submenu_ul").hide(300);
      $(this).next("ul.submenu_ul").slideDown(300);
      $(".submenu_wrap_ul > li").removeClass("on");
      _parent.addClass("on");
    }
  });
});


$(function () {
  var ww = $(window).width();
  if (ww <= 992) {
    $(".submenu_wrap h2").click(function () {
      $(".submenu_wrap > ul").slideToggle(300);
      $(this).toggleClass("active");
    });
  }
});

$(function () {
  var ww = $(window).width();
  if (ww >= 992) {
    ("use strict");
    window.scrollReveal = new scrollReveal({ reset: false, move: "100px" });
  }
});

$(function () {
  var qrcode = window.location.href;
  jQuery("#qrcode").qrcode(qrcode);
  easyzoomImg();
});

$(function () {
  $(".parameter_box h1 i").click(function () {
    $(this).find("#qrcode").slideDown();
    event.stopPropagation();
  });
  $("#qrcode").click(function () {
    $(this).slideUp();
    event.stopPropagation();
  });
});

$(document).click(function () {
  $("#qrcode").slideUp();
  $(".head-langBox ul").slideUp();
  $(".solutionBox2 .item h3").removeClass("on");
  $(".solutionBox2 .item ul").slideUp();
});

(function ($) {
  $.fn.numberRock = function (options) {
    var defaults = {
      speed: 24,
      count: 100,
    };
    var opts = $.extend({}, defaults, options);
    var div_by = 100,
      count = opts["count"],
      speed = Math.floor(count / div_by),
      sum = 0,
      $display = this,
      run_count = 1,
      int_speed = opts["speed"];
    var int = setInterval(function () {
      if (run_count <= div_by && speed != 0) {
        $display.text((sum = speed * run_count));
        run_count++;
      } else if (sum < count) {
        $display.text(++sum);
      } else {
        return false;
        clearInterval(int);
      }
    }, int_speed);
  };
})(jQuery);

$(function () {
  $(".email_click").click(function () {
    var emailAddress = $(this).attr("data-email");
    $(".ejectEmail_form form #address").val(emailAddress);
    $(".ejectEmail_form, .ejectEmailform_bj").slideDown();
  });
  $(".close_Emailform, .ejectEmailform_bj").click(function () {
    $(".ejectEmail_form form #address").val("");
    $(".ejectEmail_form .tips").html("");
    $(".ejectEmail_form, .ejectEmailform_bj").slideUp();
  });

  $(".inquire").click(function () {
    var id = $(this).attr("pro_id");
    var info = {
      id: id,
      specification: "",
      num: 1,
    };
    info.url = location.pathname;
    info.img = $(this).attr("data-img");
    info.name = $(this).attr("data-name");
    if ($("table.mod ").length > 0) {
      $("table.mod tr").each(function () {
        if ($(this).find(".checkbox.on").length > 0) {
          info.specification +=
            $(this).find("td").eq(0).text().trim() +
            " " +
            $(this).find(".checkbox.on").text().trim() +
            "<br>";
        }
      });
    }
    localStorage.setItem("inquire", JSON.stringify(info));
    console.log(info);
    $(".inquireFormBox").show();
    $(".inquireFormBj").show();
    $("#pro_data").val(id + "$$1");

    if (localStorage.getItem("inquire")) {
      var list = JSON.parse(localStorage.getItem("inquire"));
      var html = "";
      html +=
        '<tr class="pmark">' +
        '<td height="135" align="center">' +
        '   <a href="' +
        list.url +
        '" target="_blank" title="' +
        list.name +
        '"> ' +
        '       <img src="' +
        list.img +
        '" alt="' +
        list.name +
        '" title="' +
        list.name +
        '">' +
        "   </a>" +
        "</td>" +
        '<td><a href="' +
        list.url +
        '" title="' +
        list.name +
        '">' +
        list.name +
        "</a></td>" +
        '<td class="spec">' +
        list.specification +
        "</td>" +
        "<td>" +
        '   <div class="description">' +
        '       <a href="javascript:void(0)" class="order_minus2"></a>' +
        '       <input value="' +
        list.num +
        '" class="order_quan_input" style="text-align: center;" autocomplete="off" type="text">' +
        '       <a href="javascript:void(0)" class="order_plus2"></a>' +
        "   </div>" +
        "</td>" +
        '<td><a href="javascript:;" class="del_tr" pro_id="' +
        list.id +
        '">' +
        ($("#lang").val() == "zh-cn" ? "删除" : "Delete") +
        "</a></td>" +
        "</tr>";
      $(".inquire_table table tbody").append(html);
    } else {
      $(".inquire_table").hide();
    }
  });
  $(".inquireFormBox .closeForm").click(function () {
    $(".inquireFormBox").hide();
    $(".inquireFormBj").hide();
    $("#inquiry_form")[0].reset();
    $("#inquiry_form label.tips").text("");
    $("#pro_data").val("");
    $(".inquire_table tbody").empty();
  });
});

$(function () {
  $(".productDetailContentBox .contentBox ul").addClass("list-paddingleft-2");

  $(".search_click").click(function () {
    $(this).toggleClass("active");
    $(".header_search_box").toggleClass("active");
    $(".search_form").find("input.inp_control").val("");
  });

  $(".langBox").click(function () {
    $(this).find("ul").slideToggle();
    event.stopPropagation();
  });
});
// 获取所有的图片标签
  const imgs = document.getElementsByTagName("img");
  // 获取可视区域的高度
  const viewHeight =
    window.innerHeight || document.documentElement.clientHeight;
  // num用于统计当前显示到了哪一张图片，避免每次都从第一张图片开始检查是否露出
  let num = 0;

  function lazyload() {
    console.log("滚动...");
    for (let i = num; i < imgs.length; i++) {
      imgs[i].setAttribute("data-src",imgs[i].src)
      // 用可视区域高度减去元素顶部距离可视区域顶部的高度
      let distance = viewHeight - imgs[i].getBoundingClientRect().top;
      // 如果可视区域高度大于等于元素顶部距离可视区域顶部的高度，说明元素露出
      if (distance >= 0) {
        // 给元素写入真实的src，展示图片
        imgs[i].src = imgs[i].getAttribute("data-src");
        // 前i张图片已经加载完毕，下次从第i+1张开始检查是否露出
        num = i + 1;
      }
    }
  }

  // 防抖函数
  function debounce(fn, delay = 500) {
    let timer = null;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn.call(this, args);
      }, delay);
    };
  }

  // 是的页面初始化是加载首屏图片
  window.onload = lazyload;
  // 监听Scroll事件，为了防止频繁调用，使用防抖函数优化一下
  window.addEventListener("scroll", debounce(lazyload, 600), false);