// 对两个数进行运算
function calc() {
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var operator = document.getElementById('op').value;
    var result = calculator(num1, num2, operator);
    document.getElementById('result').innerText = result;
}

function calculator(n1, n2, oper) {
    // 判断用户是否输入是数字
    if (isNaN(Number(n1)) || isNaN(Number(n2))) {
        alert("您输入的不是数字，请重新输入！");
    } else {
        // 判断除数是否为0
        if ((oper === '/') && (n2 === 0)) {
            alert("除数不能为0");
            return "NaN";
        } else {
            // 判断用户选择什么操作符
            switch (oper) {
                case '+':
                    return parseFloat((n1 + n2).toFixed(8));
                case '-':
                    return parseFloat((n1 - n2).toFixed(8));
                case '*':
                    return parseFloat((n1 * n2).toFixed(8));
                case '/':
                    return parseFloat((n1 / n2).toFixed(8));
            }
        };
    };
};
