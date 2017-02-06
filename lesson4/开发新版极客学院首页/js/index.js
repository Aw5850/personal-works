// 显示搜索框
function show1() {
    if (searchbox.style.display == "none") {
        searchbox.style.display = "block";
    } else {
        searchbox.style.display = "none";
    }
}
// 关闭搜索框
function close1() {
    if (searchbox.style.display == "block") {
        searchbox.style.display = "none";
    } 
    else {
        searchbox.style.display = "block";
    }
}
window.onload = function showDiv() {
    var search = document.getElementById('search');
    var searchbox = document.getElementById('searchbox');
    search.onclick = show1;
}
function closeDiv() {
    var close = document.getElementById('close');
    close.onclick = close1;
}
