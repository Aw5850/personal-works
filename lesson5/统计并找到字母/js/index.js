var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
var ret = {};
var res = [];
var res2 = [];
var max;
for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (!ret[item]) {
        ret[item] = {};
        ret[item][item] = item;
        ret[item].count = 1;
        ret[item].index = [];
        ret[item].index.push(i);
    } else {
        ret[item].count++;
        ret[item].index.push(i);
    };
};
for (var i in ret) {
    var item = ret[i];
    res.push(item);
};
res.sort(function(a, b) {
    return a.count - b.count < 0;
});
for (var i = 0; i < res.length - 1; i++) {
    if (i === 0) {
        max = res[i].count;
    }
    if (res[i].count === max) {
        res2.push(res[i]);
    }
};

console.log(res2);
