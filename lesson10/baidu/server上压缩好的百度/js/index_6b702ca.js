$(document).ready(function() {
    // 实现百度更多产品下拉
    $('.more').hover(function() {
        $(this).find('#box').css('display', 'block');
    }, function() {
        $(this).find('#box').css('display', 'none');
    });

    //用户经过我的关注右侧信息显示
    $('.s-mblock-title').hover(function() {
        $(this).children('.s-setbar').show();
    }, function() {
        $(this).children('.s-setbar').hide();
    });
    // 用户点击我的关注下拉显示，并改变icon
    $('.s-block-container').on('click', function() {
        if ($(this).children('.s-mblock-content').css("display").indexOf("none") >= 0) {
            $(this).children('.s-mblock-content').css('display', 'block');
            changIcon($(this).children('.s-mblock-content'));
        } else {
            $(this).children('.s-mblock-content').css('display', 'none');
            changIcon($(this).children('.s-mblock-content'));
        };
    });
});
//我的关注标签页区域内容切换
$(function() {
    var $div_li = $("div.tab ul li");
    $div_li.click(function() {
        $(this).addClass("menu-selected")
            .siblings().removeClass('menu-selected');
        var index = $div_li.index(this);

        $("div.tab_box > div").eq(index).show().siblings().hide();
    })
})
//点击我的导航小三角的切换
function changIcon(mainNode) {
    if (mainNode) {
        if (mainNode.css("display").indexOf("block") >= 0) {
            $('.mine-title-icon>em').css({
                'top': '3px',
                'left': 0,
                'border': '5px dashed transparent',
                'border-top': '5px solid #666'
            })
        } else {
            $('.mine-title-icon>em').css({
                'top': 0,
                'left': '3px',
                'border-top': '5px dashed transparent',
                'border-left': '5px solid #666'
            })
        };
    }
}
// 换肤内容
$(function() {
    var $title_li = $("div.title-tab ul li");
    $title_li.click(function() {
        $(this).addClass("title-selected")
            .siblings().removeClass('title-selected');
        var index = $title_li.index(this);
        $("div.bg-tabBox > div").eq(index).show().siblings().hide();
    })
})
打开上次保存的换肤主题
var bgImg=localStorage.getItem('bgImg');
if (bgImg) {
     $("body").css("background",bgImg);
         $("body").css("background-size", "100%");
         $('.content').children('.logo').attr('src', 'img/logo_white.png');
}
    var i = 1;
    $(".skin").click(function() {
        $(".skin-wrapper").animate({
            height: "309px"
        }, 500);
    });
    $(".back-top").click(function() {
        $(".skin-wrapper").animate({
            height: "0px"
        }, 500);
    });
    // 热门标签页的皮肤
    $(".hot-box img").hover(function() {
        i = $(this).index();
        var img = __uri('img/bg' + i + 's.jpg');
        $(".bg-preview").css("background", 'url(img) no-repeat');
        $(".bg-preview").css("background-size", "264px 180px");
    });
    // 点击换肤，body背景更换
    $(".hot-box img").click(function() {
        $("body").css("background", 'url(img/bg' + i + '.jpg) no-repeat');
         $("body").css("background-size", "100%");
         //保存的换肤主题
         localStorage.setItem('bgImg','url(img/bg' + i + '.jpg) no-repeat');
    });

    // 游戏标签页的皮肤
    $(".game-box img").hover(function() {
        i = $(this).index();
        $(".bg-preview").css("background", 'url(img/bg' + (i+12) + 's.jpg) no-repeat');
        $(".bg-preview").css("background-size", "264px 180px");
    });
    // 点击换肤，body背景更换   
    $(".game-box img").click(function() {
        $("body").css("background", 'url(img/bg' + (i+12) + '.jpg) no-repeat');
         $("body").css("background-size", "100%");
         //保存的换肤主题
         localStorage.setItem('bgImg','url(img/bg' + (i+12) + '.jpg) no-repeat');
    });
