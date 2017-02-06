// 计算该生为几等生
    function assess() {
        var score = parseInt(document.getElementById('sco').value);
        var rank = document.getElementById('rank');
        if (score >= 90 && score <= 100) {
            rank.innerText = "一等生";
        } else if (score >= 80 && score < 90) {
            rank.innerText = "二等生";
        } else if (score >= 70 && score < 80) {
            rank.innerText = "三等生";
        } else if (score >= 60 && score < 70) {
            rank.innerText = "四等生";
        } else if (score >= 50 && score < 60) {
            rank.innerText = "五等生";
        } else if (score >= 40 && score < 50) {
            rank.innerText = "六等生";
        } else if (score >= 30 && score < 40) {
            rank.innerText = "七等生";
        } else if (score >= 20 && score < 30) {
            rank.innerText = "八等生";
        } else if (score >= 10 && score < 20) {
            rank.innerText = "九等生";
        } else if (score >= 0 && score < 10) {
            rank.innerText = "十等生";
        } else {
            alert("输入有误！请输入0-100之间的数字");
        }
    }