var link = function (height, color, url) {
    var height = height || 50;
    var color = color || 'red';
    var url = url || 'http://azat.co';
    console.log(height);
    console.log(color);
    console.log(url);
};
console.log("-----------------link()----------------------------");
link();
console.log("-----------------link(100)----------------------------");
link(100);
console.log('-----------------link(150,"blue")----------------------------');
link(150, "blue");
console.log('-----------------link(100,"yellow","http://fb.com")----------------------------');
link(100, 'yellow', 'http://fb.com');
console.log('-----------------link(null)----------------------------');
link(null, '', 0);
var a1 = undefined;
var b1 = null;
var c1 = false;
var d1 = "";
var e1 = 0;
var f1 = NaN;
var g1 = 15;
// dấu || nó sẽ bỏ qua các giá trị là false undefined null 0 " " NaN
console.log(a1 || b1 || c1 || d1 || e1 || f1 || g1);
console.log('---------------------------------------------');
var link2 = function (height, color, url) {
    if (height === void 0) { height = 50; }
    if (color === void 0) { color = 'red'; }
    if (url === void 0) { url = 'superdevvn.com'; }
    console.log(height, color, url);
};
link2();
link2(100);
link2(150, "blue");
link2(100, 'yellow', 'http://facebook.com');
link2(null, '', '0');
