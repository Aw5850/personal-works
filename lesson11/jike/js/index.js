// 弹出搜索框
$('#search').click(function() {
        $('#searchbox').addClass('scale').animate({ 'width': '+=750px' }, 1500)
    })
    // 关闭搜索框
$('#close').click(function() {
    $('#searchbox').attr('class', 'searchbox').width("100px");
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

