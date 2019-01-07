/**
 * @param {Number} endTime    截止时间
 * @param {Number} deviceTime 设备时间
 * @param {Number} serverTime 服务器端时间
 * @return {Object}           剩余对象时间
 */

export const  getRemainTime = (endTime) => {
    console.log(endTime)
     let t = endTime - Date.parse(new Date())
     let seconds = Math.floor((t/1000)%60);
     let minutes = Math.floor((t/1000/60)%60);
     let hours = Math.floor((t/(1000*60*60))%24)
     let days = Math.floor(t/(1000*60*60*24));
     
     return {
         'total': t,
         "days" : days,
         'hours': hours,
         'minutes': minutes,
         'seconds':seconds
     }
 }

 