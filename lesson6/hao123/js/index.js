// 获取上次保存的主题
var x = localStorage.Bgtheme;
changeSkin(x);

// 根据传入不同的id值获取不同的主题
function changeSkin(id) {
    if (id == "red") {
        var skin = "skin-red";
        document.body.className = skin;
        var colorRen = "#f98dba";
        document.getElementById('menus').style.backgroundColor = "#f0b4d0";
        document.getElementById('toutiao').style.color = colorRen;
        document.getElementById('one').style.color = colorRen;
        document.getElementById('taobao').style.color = colorRen;
        document.getElementById('haoTo').style.color = colorRen;
        document.getElementById('shopping').style.color = colorRen;
        document.getElementById('phone').style.color = colorRen;
        localStorage.setItem('Bgtheme', 'red');
    }
    if (id == "green") {
        var skin = "skin-green";
        document.body.className = skin;
        var colorGreen = "#88bf82";
        document.getElementById('menus').style.backgroundColor = "#95d28f";
        document.getElementById('toutiao').style.color = colorGreen;
        document.getElementById('one').style.color = colorGreen;
        document.getElementById('taobao').style.color = colorGreen;
        document.getElementById('haoTo').style.color = colorGreen;
        document.getElementById('shopping').style.color = colorGreen;
        document.getElementById('phone').style.color = colorGreen;
        localStorage.setItem('Bgtheme', 'green')
    }
    if (id == "blue") {
        var skin = "skin-blue";
        document.body.className = skin;
        var colorGreen = "#01b3ef";
        document.getElementById('menus').style.backgroundColor = "#5dd7ff";
        document.getElementById('toutiao').style.color = colorGreen;
        document.getElementById('one').style.color = colorGreen;
        document.getElementById('taobao').style.color = colorGreen;
        document.getElementById('haoTo').style.color = colorGreen;
        document.getElementById('shopping').style.color = colorGreen;
        document.getElementById('phone').style.color = colorGreen;
        localStorage.setItem('Bgtheme', 'blue')
    }
}
