//打开后台页面的时候，发送请求，刷新新闻列表
$(document).ready(function() {
    var $newsTable = $('#newstable tbody');
    refresNews();
    //添加新闻
    $('#btnsubmit').click(function(e) {
        e.preventDefault();
        //新闻列表中输入判断
        if ($('#newstitle').val() === "" || $('#newstype').val() === "" || $('#newstime').val() === "" || $('#newssrc').val() === "") {
            if ($('#newstitle').val() === "") {
                $('#newstitle').parent().addClass('has-error');
            } else {
                $('#newstitle').parent().removeClass('has-error');
            }

            if ($('#newstime').val() === "") {
                $('#newstime').parent().addClass('has-error');
            } else {
                $('#newstime').parent().removeClass('has-error');
            }

            if ($('#newssrc').val() === "") {
                $('#newssrc').parent().addClass('has-error');
            } else {
                $('#newssrc').parent().removeClass('has-error');
            }
        } else {
            var jsonNews = {
                newstitle: $('#newstitle').val(),
                newstype: $('#newstype').val(),
                newsimg: $('#newsimg').val(),
                newstime: $('#newstime').val(),
                newssrc: $('#newssrc').val()
            };
            //添加提交
            $.ajax({
                url: '/admin/insert',
                type: 'post',
                data: jsonNews,
                datatype: 'json',
                success: function(data) {
                        $('#newstitle').val(''),
                        $('#newstype').val(''),
                        $('#newsimg').val(''),
                        $('#newstime').val(''),
                        $('#newssrc').val('')
                    refresNews();

                }
            })
        }
    });

    //删除新闻的功能
    var deleteId = null;
    $newsTable.on('click', '.btn-danger', function(e) {
        $('#deleteModal').modal('show');
        deleteId = $(this).parent().prevAll().eq(5).html();
    });
    $('#deleteModal #confirmDelete').click(function(e) {
        if (deleteId) {
            $.ajax({
                url: '/admin/delete',
                type: 'post',
                data: { newsid: deleteId },
                success: function(data) {
                    console.log("删除成功");
                    $('#deleteModal').modal('hide');
                    refresNews();
                }
            });
        }
    });

    //编辑新闻的功能
    var updateId = null;
    $newsTable.on('click', '.btn-primary', function(e) {
        $('#updateModal').modal('show');
        updateId = $(this).parent().prevAll().eq(5).html();
        $.ajax({
            url: '/admin/curnews',
            type: 'get',
            datatype: 'json',
            data: { newsid: updateId },
            success: function(data) {
                for(var item in data[0]){
                    data[0][item]=HTMLDecode(data[0][item]);
                    console.log(data[0][item]);
                }
                $('#unewstitle').val(data[0].newstitle);
                $('#unewstype').val(data[0].newstype);
                $('#unewsimg').val(data[0].newsimg);
                $('#unewssrc').val(data[0].newssrc);
                var utime = data[0].newstime.split('T')[0];
                $('#unewstime').val(utime);
                
            }
        })
    });
    
    // 将修改后的新闻显示到列表中
    $('#updateModal #confirmUpdate').click(function(e) {
        $.ajax({
            url: '/admin/update',
            type: 'post',
            data: {
                newstitle: $('#unewstitle').val(),
                newstype: $('#unewstype').val(),
                newsimg: $('#unewsimg').val(),
                newstime: $('#unewstime').val(),
                newssrc: $('#unewssrc').val(),
                id: updateId
            },
            success: function(data) {
                $('#updateModal').modal('hide');
                refresNews();
                HTMLEncode($('#unewstitle'));
            }
        });
    });

    // 新闻列表更新，将数据库的记录显示到表格中
    function refresNews() {
        $newsTable.empty();
        $.ajax({
            url: '/admin/getnews',
            type: 'get',
            datatype: 'json',
            success: function(data) {
                data.forEach(function(item, index, array) {
                    var $tdid = $('<td>').html(item.id);
                    var $tdtype = $('<td>').html(item.newstype);
                    var $tdtitle = $('<td>').html(item.newstitle);
                    var $tdimg = $('<td>').html(item.newsimg);
                    var $tdtime = $('<td>').html(item.newstime);
                    var $tdsrc = $('<td>').html(item.newssrc);
                    var $tdctrl = $('<td>');
                    var $btnupdate = $('<button>').addClass('btn btn-primary btn-xs').html('修改');
                    var $btndelete = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
                    $tdctrl.append($btnupdate, $btndelete);
                    var $tRow = $('<tr>');
                    $tRow.append($tdid, $tdtype, $tdtitle, $tdsrc, $tdimg, $tdtime, $tdctrl);
                    $newsTable.append($tRow);
                })
            }
        })
    }
});

//对特殊字符反转义
function HTMLDecode(text)   
{   
    var temp = document.createElement("div");   
    temp.innerHTML = text;   
    var output = temp.innerText || temp.textContent;   
    temp = null;   
    return output;   
}   


