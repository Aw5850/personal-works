function changIcon(i){i&&$(".mine-title-icon>em").css(i.css("display").indexOf("block")>=0?{top:"3px",left:0,border:"5px dashed transparent","border-top":"5px solid #666"}:{top:0,left:"3px","border-top":"5px dashed transparent","border-left":"5px solid #666"})}$(document).ready(function(){$(".more").hover(function(){$(this).find("#box").css("display","block")},function(){$(this).find("#box").css("display","none")}),$(".s-mblock-title").hover(function(){$(this).children(".s-setbar").show()},function(){$(this).children(".s-setbar").hide()}),$(".s-block-container").on("click",function(){$(this).children(".s-mblock-content").css("display").indexOf("none")>=0?($(this).children(".s-mblock-content").css("display","block"),changIcon($(this).children(".s-mblock-content"))):($(this).children(".s-mblock-content").css("display","none"),changIcon($(this).children(".s-mblock-content")))})}),$(function(){var i=$("div.tab ul li");i.click(function(){$(this).addClass("menu-selected").siblings().removeClass("menu-selected");var e=i.index(this);$("div.tab_box > div").eq(e).show().siblings().hide()})}),$(function(){var i=$("div.title-tab ul li");i.click(function(){$(this).addClass("title-selected").siblings().removeClass("title-selected");var e=i.index(this);$("div.bg-tabBox > div").eq(e).show().siblings().hide()})});var bgImg=localStorage.getItem("bgImg");bgImg&&($("body").css("background",bgImg),$("body").css("background-size","100%"),$(".content").children(".logo").attr("src","img/logo_white.png"));var i=1;$(".skin").click(function(){$(".skin-wrapper").animate({height:"309px"},500)}),$(".back-top").click(function(){$(".skin-wrapper").animate({height:"0px"},500)}),$(".hot-box img").hover(function(){i=$(this).index();__uri("img/bg"+i+"s.jpg");$(".bg-preview").css("background","url(img) no-repeat"),$(".bg-preview").css("background-size","264px 180px")}),$(".hot-box img").click(function(){$("body").css("background","url(img/bg"+i+".jpg) no-repeat"),$("body").css("background-size","100%"),localStorage.setItem("bgImg","url(img/bg"+i+".jpg) no-repeat")}),$(".game-box img").hover(function(){i=$(this).index(),$(".bg-preview").css("background","url(img/bg"+(i+12)+"s.jpg) no-repeat"),$(".bg-preview").css("background-size","264px 180px")}),$(".game-box img").click(function(){$("body").css("background","url(img/bg"+(i+12)+".jpg) no-repeat"),$("body").css("background-size","100%"),localStorage.setItem("bgImg","url(img/bg"+(i+12)+".jpg) no-repeat")});