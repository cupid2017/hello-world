/**
 * Created by wangyuquan on 2017/3/14.
 */
var row = 8;
var column = 4;
var idArray = [];
var title = ['本周', '上午', '下午', '晚上'];
var day = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
var mon = ['健康管理', '信息管理', '亲密关系，亲子教育'];
var tue = ['财富管理', '发型', '网球，游泳，羽毛球，乒乓球，防身术'];
var wen = ['人脉管理', '化妆', '品鉴-葡萄酒，鸡尾酒，威士忌'];
var thr = ['情绪管理', '服装搭配', '交谊舞，爵士舞，拉丁舞，民族舞'];
var fri = ['时间管理', '社交礼仪', '吃遍成都'];
var sat = fri;
var sun = fri;
var content = [];

content = content.concat(title, day[0], mon, day[1], tue, day[2], wen, day[3], thr, day[4], fri, day[5], sat, day[6], sun);

for (var i = 1; i <= row; i++) {
    for (var j = 1; j <= column; j++) {
        idArray.push('s' + i.toString() + j.toString());
    }
}

console.log(idArray);

for (var x = 0; x < idArray.length; x++) {
    var element = document.getElementById(idArray[x]);
    element.innerHTML = content[x];

    console.log(content[x] + content[x].length);

    if (/1+/.test(idArray[x])) {
        element.style.backgroundColor = '#5e5eff';
        element.style.fontSize = '50pt';
        element.style.color = 'white';
    } else {
        element.style.backgroundColor = 'white';
        element.style.fontFamily = '幼圆';
        element.style.color = '#5e5eff';

        if (6 < content[x].length < 10) {
            element.style.fontSize = '30pt';
        } else if (content[x].length >= 10) {
            element.style.fontSize = '20pt';
        }else {
            element.style.fontSize = '40pt';
        }
    }

}