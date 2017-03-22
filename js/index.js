var count = 67;
$(function(){
    var pic = Math.floor(Math.random()*count) + 1;
    $('body').css({"background-image":'url("images/' + pic + '.jpg")'});
    $('body').css({"background-size":'100% 100%'});
});
$('#sub').click(function(){
    window.open('https://www.baidu.com/s?ie=UTF-8&wd=' + $('#content').val());
});
// function getNowFormatDate() {
//     var date = new Date();
//     var HH = date.getHours();
//     if (HH >= 0 && HH <= 9) {
//         HH = "0" + HH;
//     }
//     var mm = date.getMinutes();
//     if (mm >= 0 && mm <= 9) {
//         mm = "0" + mm;
//     }
//     var time;
//     time = HH + " : " + mm;
//     return time;
// }
function showLocale(objD)
{
    var str;
    var yy = objD.getYear();
    if(yy<1900) yy = yy+1900;
    var MM = objD.getMonth()+1;
    if(MM<10) MM = '0' + MM;
    var dd = objD.getDate();
    if(dd<10) dd = '0' + dd;
    var hh = objD.getHours();
    if(hh<10) hh = '0' + hh;
    var mm = objD.getMinutes();
    if(mm<10) mm = '0' + mm;
    var ss = objD.getSeconds();
    if(ss<10) ss = '0' + ss;
    var ww = objD.getDay();
    if  (ww==0)  ww="星期日";
    if  (ww==1)  ww="星期一";
    if  (ww==2)  ww="星期二";
    if  (ww==3)  ww="星期三";
    if  (ww==4)  ww="星期四";
    if  (ww==5)  ww="星期五";
    if  (ww==6)  ww="星期六";
    colorfoot=""
    str = hh + ":" + mm + ":" + ss +"<br/><span>" + yy + "-" + MM + "-" + dd + " " +  "  " + ww +"</span>";
    // str = colorhead + yy + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss + "  " + ww + colorfoot;
    return(str);
}
function tick()
{
    var today;
    today = new Date();
    $('#time').html(showLocale(today));;
    window.setTimeout("tick()", 1000);
}
tick();