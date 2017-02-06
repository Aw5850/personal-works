$(document).ready(function() {
    refresNews('精选');
    //用户点击选择的新闻类型
    $('nav a').click(function(e){
        e.preventDefault();
        var type =$(this).text();
        $(this).addClass('selected').parent().siblings().children('a').removeClass('selected');
        ;
        refresNews(type);
    });

});
// 动态获取用户选择类型的新闻内容
function refresNews(type) {
    var $lists = $('article ul');
    $lists.empty();
    $.ajax({
        url: '../baidunews/server/getnews.php',
        type: 'get',
        datatype: 'json',
        data:{newstype:type},
        success: function(data) {
            data.forEach(function(item,index,array) {
                    var $list = $('<li></li>').addClass('news-list').prependTo($lists);
                    var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list);
                    var $img = $('<img>').attr('src', item.newsimg).appendTo($newsImg);
                    var $newsContent = $('<div></div>').addClass('newscontent').appendTo($list);
                    var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newsContent);
                    var $p = $('<p></p>').appendTo($newsContent);
                    var $newsTime = $('<span></span>').addClass('newstime').html(item.newstime).appendTo($p);
                    var $newsSrc = $('<span></span>').addClass('newssrc').html(item.newssrc).appendTo($p);

                })
        }
    });


}
