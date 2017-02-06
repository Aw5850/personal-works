// 弹出搜索框
$('#search').click(function() {
        $('#searchbox').addClass('scale').animate({ 'width': '+=750px' }, 1500)
    })
    // 关闭搜索框
$('#close').click(function() {
    $('#searchbox').attr('class', 'searchbox').width("100px");
})

// 方块风格
$('.kuai-icon').click(function() {
    $('.sort').next().attr('class', 'lesson-list');
})

// 列表风格
$('.list-icon').click(function() {
    $('.sort').next().attr('class', 'lesson-list2');
    $('.lesson-infor').attr('style', 'height:88px');
    $('.lesson-infor p').attr('style', 'height:36px;opacity: 0;display: block;')
    $('.zhongji').show()
    $('.lessonicon-box').attr('style', 'top: -75px;');
})

//课程库页面板浮动特效;
var $div_li = $("div.lesson-list ul li");
$div_li.hover(function() {
    $(this).find('.user-action').show()
    $(this).find('.lessonplay').attr('style', 'opacity: 1;');
    if ($('body').find('.lesson-list2').length == 1) {
        return;
    }
    $(this).find('.lesson-infor').attr('style', 'height:175px;').slideDown(380);
    $(this).find('.lesson-infor p').attr('style', 'height:52px;').slideDown(380);
    $(this).find('.zhongji').show();
    $(this).find('.learn-number').show();
    $(this).find('.lessonicon-box').attr('style', 'top: 20px;');
}, function() {
    $(this).find('.user-action').hide()
    $(this).find('.lessonplay').attr('style', 'opacity: 0;');
    if ($('body').find('.lesson-list2').length == 1) {
        return;
    }
    $(this).find('.lesson-infor').attr('style', 'height:88px');
    $(this).find('.lesson-infor p').slideUp(300);
    $(this).find('.zhongji').hide();
    $(this).find('.learn-number').hide();
    $(this).find('.lessonicon-box').attr('style', 'top: 4px;');
})

// 回到顶部效果
window.onload = function() {
    var goTop = document.getElementById('gotop');
    var timer = null;
    var pageLookhHeight = document.documentElement.clientHeight;
    // 判断置顶图标是否显示
    window.onscroll = function() {
            var backTop = document.body.scrollTop;
            if (backTop >= pageLookhHeight) {
                goTop.style.display = "block";
            } else {
                goTop.style.display = "none";
            };
        }
    // 点击置顶，回到顶部
    goTop.onclick = function() {
        timer = setInterval(function() {
            var backTop = document.body.scrollTop;
            var speedTop = backTop / 5;
            document.body.scrollTop = backTop - speedTop;
            if (backTop == 0) {
                clearInterval(timer);
            }
        }, 30)
    }
}
