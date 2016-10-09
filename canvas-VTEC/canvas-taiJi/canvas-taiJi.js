/**
 * Created by VTEC on 2016/10/9.
 */
function taiJi(startX,startY,radius){
    //左右黑白半圆
    ctx.arc(startX, startY, radius, toRadian(-90), toRadian(90));
//			ctx.stroke();
    ctx.fillStyle='white';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(startX,startY ,radius,toRadian(90),toRadian(-90));
    ctx.fillStyle='black';
//			ctx.stroke();
    ctx.fill();

    //小左右黑白半圆
    ctx.beginPath();
    ctx.arc(startX,startY-radius/2,radius/2,toRadian(90),toRadian(-90));
    ctx.fillStyle='white';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(startX,startY+radius/2,radius/2,toRadian(-90),toRadian(90));
    ctx.fillStyle='black';
    ctx.fill();
    ctx.beginPath();

    //黑白小圆
    ctx.arc(startX,startY+radius/2 ,radius/5,toRadian(0),toRadian(360));
    ctx.fillStyle='white';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(startX,startY-radius/2 ,radius/5,toRadian(-90),toRadian(270));
    ctx.fillStyle='black';
    ctx.fill();
}