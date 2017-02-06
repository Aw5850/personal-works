//创建对象
var calculator = new Calculator();
var calculator1 = new Calculator1();

/*定义全局变量*/
var val = 0; //放入输入的值
var xval = 0; //保存第二次输入的值
var temp = 0; //保存第一次输入的值    
var oper = ""; //保存输入的操作符
var oper1 = ""; //保存三角函数的操作符
var oper2 = "";
var summ = false;
var isCal = false; //是否已经计算过一次
var lastResu = 0; //第一轮结果

//加载完毕后光标自动对应到输入框
function onLoad() {
    document.getElementById("resultIpt").focus();
}
onLoad();

//定义一个Calculator类
function Calculator(e) {
    this.jisuan = function(num1, num2, oper) {
        var res = 0;
        if ((oper === '÷') && (num2 === 0)) {
            alert("除数不能为0");
            return "NaN";
        } else {
            switch (oper) {
                case "+":
                    res = parseFloat((num1 + num2).toFixed(8));
                    break;
                case "-":
                    res = parseFloat((num1 - num2).toFixed(8));
                    break;
                case "×":
                    res = parseFloat((num1 * num2).toFixed(8));
                    break;
                case "÷":
                    res = parseFloat((num1 / num2).toFixed(8));
                    break;
            }
            isCal = false;
            summ = true;
            return res;
        }
    }

    //未输入第二个数
    this.ji = function(num1, oper) {
        var res1 = 0;
        if ((oper === '÷') && (num1 === 0)) {
            alert("除数不能为0");
            return "NaN";
        } else {
            switch (oper) {
                case "+":
                    res1 = parseFloat((num1 + num1).toFixed(8));
                    break;
                case "-":
                    res1 = parseFloat((num1 - num1).toFixed(8));
                    break;
                case "×":
                    res1 = parseFloat((num1 * num1).toFixed(8));
                    break;
                case "÷":
                    res1 = parseFloat((num1 / num1).toFixed(8));
                    break;
            }
            isCal = false;
            summ = true;
            return res1;
        }
    }
}
// 获取输入的值
function inputEvent(e) {
    var resultIpt = document.getElementById("resultIpt");
    if (summ == true) {
        resultIpt.value = "";
        oper = "";
        summ = false;
    }
    document.getElementById('resultIpt').value += document.getElementById(e).value;
}

//输入操作符
function inputOper(e) {
    var resultIpt = document.getElementById("resultIpt");

    oper += e.value;
    console.log(oper);
    //判断运算符
    var reg = new RegExp(/^[+-×\÷]+$/, "g");
    var re = reg.test(oper);
    if (re == true) {
        oper = oper.substring(oper.length - 1, oper.length);
        console.log(oper);
    }
    if (isCal == true) {
        xval = parseFloat(resultIpt.value);
        lastResu = resultIpt.value = calculator.jisuan(temp, xval, oper);
        oper2 = e.value;
        return lastResu;
    }
    temp = parseFloat(resultIpt.value);
    //保存上次计算结果，并对字符串进行转换Number类型
    if (isNaN(resultIpt.value)) {
        alert("您输入的不是数字，无法计算！请重新输入！");
        resultIpt.value = "";
        return;
    }
    //设置上一次输入值为空
    resultIpt.value = "";
    isCal = true;
}
//cos  sin tan 计算
function inputFuhao(e) {
    var resultIpt = document.getElementById("resultIpt");
    oper1 = e.value;
    temp = parseFloat(resultIpt.value);
    resultIpt.value = calculator1.suan(temp, oper1);
}

function Calculator1(e) {
    this.suan = function(num1, oper) {
        var res1 = 0;
        switch (oper) {
            case "cos":
                res1 = parseFloat(Math.cos(num1 * Math.PI / 180).toFixed(8));
                break;
            case "sin":
                res1 = parseFloat(Math.sin(num1 * Math.PI / 180).toFixed(8));
                break;
            case "tan":
                res1 = parseFloat(Math.tan(num1 * Math.PI / 180).toFixed(8));
                break;
            case "√￣":
                res1 = parseFloat(Math.sqrt(num1).toFixed(8));
                break;
        }
        summ = true;
        return res1;
    }
}
//计算结果
function inputEquel(e) {
    console.log(temp);
    var resultIpt = document.getElementById("resultIpt");
    if (e.value == "=") {
        // 判断第二次输入的值
        if (isNaN(resultIpt.value)) {
            alert("您输入的不是数字，无法计算！请重新输入！");
            resultIpt.value = "";
            return;
        }
    }
    //保留第二次输入的值;
    xval = parseFloat(resultIpt.value);
    //用户未输入第二个数，调用方法
    if (isNaN(xval)) {
        resultIpt.value = calculator.ji(temp, oper);
        return resultIpt.value;
        oper = "";
    };
    //用户输入第二个数，调用对象方法
    var reg3 = new RegExp(/^[+-×\÷]{1}?$/, "g");
    var re3 = reg3.test(oper);
    if (re3 == true && xval !== NaN) {
        resultIpt.value = calculator.jisuan(temp, xval, oper);
        oper = "";
        return resultIpt.value;
    }

    resultIpt.value = calculator.jisuan(lastResu, xval, oper2);
    oper2 = "";
}

//输入负数
function jian(e) {
    var resultIpt = document.getElementById("resultIpt");
    resultIpt.value = "-" + resultIpt.value;
}

//退格
function tuiGe() {
    var arr = document.getElementById("resultIpt");
    arr.value = arr.value.substring(0, arr.value.length - 1);
}

//清屏
function clearTo() {
    var resultIpt = document.getElementById("resultIpt");
    resultIpt.value = "";
    oper = "";
};

//鼠标按下按钮更换背景
function changeBg(e, skin) {
    var Bg0 = 'baseBtnCommonCss0';
    var Bg1 = 'baseBtnCss11 baseBtnCommonCss';
    var Bg2 = 'baseBtnCss22 baseBtnCommonCss';
    var Bg3 = 'baseBtnCss33 baseBtnCommonCss';
    var Bg4 = 'baseBtnCss44 baseBtnCommonCss';
    if (skin == 0) {
        document.getElementById(e).className = Bg0;
    } else if (skin == (-1)) {
        document.getElementById(e).className = Bg1;
    } else if (skin == (-2)) {
        document.getElementById(e).className = Bg2;
    } else if (skin == (-3)) {
        document.getElementById(e).className = Bg3;
    } else if (skin == (-4)) {
        document.getElementById(e).className = Bg4;
    }

}
//鼠标松开按钮还原背景
function changeBgUp(e, skin) {
    var bgBack0 = 'baseBtnCommonCss';
    var bgBack1 = 'baseBtnCss1 baseBtnCommonCss';
    var bgBack2 = 'baseBtnCss2 baseBtnCommonCss';
    var bgBack3 = 'baseBtnCss3 baseBtnCommonCss';
    var bgBack4 = 'baseBtnCss4 baseBtnCommonCss';
    if (skin == 0) {
        document.getElementById(e).className = bgBack0;
    } else if (skin == (-1)) {
        document.getElementById(e).className = bgBack1;
    } else if (skin == (-2)) {
        document.getElementById(e).className = bgBack2;
    } else if (skin == (-3)) {
        document.getElementById(e).className = bgBack3;
    } else if (skin == (-4)) {
        document.getElementById(e).className = bgBack4;
    }
}
