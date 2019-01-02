export default {
    setCookie,
    getCookie,
    deleteCookie
}
function setCookie(c_name,value,expiredays){
    // 将值编码，使得所有电脑适用
    var userInfo = `${c_name}=${escape(value)}`
    var exdate = new Date();
    exdate.setDate(exdate.getDate()+expiredays)
    // 比如 exdate 为2017-12-12 ，expire days 为2
    // 则exdate操作之后为 2017-12-14
    document.cookie = `${userInfo};${expiredays===null?"":"expires="+exdate.toGMTString()}`
}
function getCookie(c_name){
    let cookie = document.cookie;
    if(cookie.length>0) {
        var  c_start = cookie.indexOf(c_name+'=');
        if(c_start!=-1){
            c_start=c_start+c_name.length+1;
           var c_end = document.cookie.indexOf(";",c_start);
             if (c_end==-1) c_end=document.cookie.length
return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return "";
}
function deleteCookie(name) {
    setCookie(name,"",-1);
    //设置过期时间超时
}