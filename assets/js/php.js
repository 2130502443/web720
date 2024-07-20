$(document).ready(function(){
    if(window.menu==1){
        contextmenu();
    }
    if(window.select==1){
        selectstart();
    }
});

function download(file,files){
    window.location.href='/home/Download/download?file='+ file+'&files='+files;
}
function hits(obj){
    $.post('/home/Download/setDownload',{id:obj},function(data){
        if(data.status==1){
            var num = parseInt($("#num").text());
            $("#num").text(num);
        }else{
            console.log("failed");
        }
    });
}
$(function () {
    $("td.choosed a").click(function () {
        var n = $(this).parent().parent().find("#num").text();
        $(this).parent().parent().find("#num").text(parseInt(n)+1)
    })
});

function sub_inquiry(){
    if($(".inquire_table tr.pmark").length>0){
        var myData = [];
        $(".inquire_table tr.pmark").each(function(index,obj){
            var pro=$(obj).find("a.del_tr").attr("pro_id")+"$$"+$(obj).find("input").val()+"$$"+$(obj).find(".spec").html()
            myData.push(pro);
        });
        myData.join(",");
        $("#pro_data").val(myData);

    }else{
        return false;
    }
}

// 产品选择属性参数
$(function(){
    $('.product_box .mod tr td .checkbox').click(function(){
        $(this).parents("li").siblings().find('.checkbox').removeClass('on')
        if($(this).hasClass('on')){
            $(this).removeClass('on')
            $(this).parents("ul").siblings('.mod').val('')
        }
        else{
            $(this).addClass('on')

            $(this).parents("ul").siblings('.mod').val($(this).text())
        }

    })
})


//禁止右键
function contextmenu(){
    document.oncontextmenu = function(){
        return false;
    }
}
//禁止选中
function selectstart(){
    document.body.onselectstart = function () {
        return false;
    };
    $('img').on('mousedown',function (e) {
        e.preventDefault()
    });
}

//邮件订阅表单提交
$("#subscribe_form").ajaxForm(function(data) {
    layer.closeAll();
    if(data.status==1){
        setTimeout(window.location.href='/subscribe-success.html',2000);
    }else{
        layer.msg(data.info);
        if(data.kk){
            $(".kk"+data.kk).attr("src", '/home/Base/captcha?kk='+data.kk);
        }
    }
});

//联系我们表单提交
$("#form_right,#contact_form,#f_form,#email_form").ajaxForm(function(data) {
    layer.load(1, {
        shade: [0.6,'#eeeeee']
    });
    if(data.status==1){
        layer.closeAll();
        layer.msg(data.info);
        window.location.href='/contact-success.html';
    }else if(data.status==2){
        layer.closeAll();
        setTimeout( layer.msg(data.info),3000);
        location.reload();
    }else{
        layer.closeAll();
        layer.msg(data.info);
        if(data.kk){
            $(".kk"+data.kk).attr("src", '/home/Base/captcha?kk='+data.kk);
        }
    }
});
//询价表单提交
$("#inquiry_form").ajaxForm(function(data){
    layer.load(1, {
        shade: [0.6,'#eeeeee']
    });
    if(data.status ==1){
        layer.closeAll();
        layer.msg(data.info);
        window.location.href="/inquiry-success.html";
    }else if(data.status==2){
        layer.closeAll();
        setTimeout( layer.msg(data.info),3000);
    }else{
        layer.closeAll();
        layer.msg(data.info);
        if(data.kk){

            $("#inquiry_form").find("img").attr("src", '/home/Inquiry/captcha?kk='+data.kk);
        }
    }
});