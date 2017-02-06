$(window).on('load', function() {
        waterfall();
        var dataImg = { "data": [{ "src": '0.jpg' }, { "src": '11.jpg' }, { "src": '12.jpg' }, { "src": '13.jpg' }, { "src": '14.jpg' }, { "src": '15.jpg' }, { "src": '16.jpg' }, { "src": '17.jpg' }, { "src": '18.jpg' }, { "src": '19.jpg' }] };
        $(window).on('scroll', function() {
            if (checkScrollSlide()) {
                $.each(dataImg.data, function(key, value) {
                    var oBox = $('<div>').addClass('box').appendTo($('#main'));
                    var oPic = $('<div>').addClass('pic').appendTo($(oBox));
                    var oImg = $('<img>').attr('src', 'img/' + $(value).attr('src')).appendTo($(oPic));
                })
                waterfall();
            }
        })
        $(window).on('resize',function(){
            waterfall();
        })
    })

// 瀑布流布局图片定位
function waterfall() {
    var $boxs = $("#main>div");
    var w = $boxs.eq(0).outerWidth();
    var cols = Math.floor($(window).width() / w);
    $('#main').width(w * cols).css('margin', '0 auto');
    var hArr = [];
    $boxs.each(function(index, value) {
        value.style.cssText="";
        var h = $boxs.eq(index).outerHeight();
        if (index < cols) {
            hArr[index] = h;
        } else {
            var minH = Math.min.apply(null, hArr);
            var minHIndex = $.inArray(minH, hArr);
            $(value).css({
                'position': 'absolute',
                'top': minH + 'px',
                'left': minHIndex * w + 'px'
            })
            hArr[minHIndex] += $boxs.eq(index).outerHeight();
        }
    })
}
// 检测是否具备了滚条加载数据块的条件
function checkScrollSlide() {
    var $lastBox = $('#main>div').last();
    var lastBoxDis = $lastBox.offset().top + Math.floor($lastBox.outerHeight() / 2);
    var scrollTop = $(window).scrollTop();
    var documentH = $(window).height();
    return lastBoxDis < scrollTop + documentH;
}
