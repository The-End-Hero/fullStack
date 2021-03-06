/**
 * Created by VTEC on 2016/10/12.
 */
function guaguale(arr){
    //1.先绘制奖品信息
    //1.1每次奖品都不一样，所以，需要获取一个随机数
    var r=Math.random(),
        rIndex=Math.floor(r*arr.length),
        prize=arr[rIndex],
        isDown=false,//控制鼠标是否按下
        radius=30;      //绘制圆的半径

    //1.2将奖品信息绘制到画布中去
    ctx.textAlign='center';
    ctx.textBaseline='middle';
    ctx.font='30px 微软雅黑';
    ctx.fillStyle=prize.color;
    ctx.fillText(prize.name,cv.width/2,cv.height/2);


    //1.3 将绘制的内容转化为图片，然后将图片设置为canvas画布的背景
    //第一个参数：表示图片格式
    //第二个参数：表示图片质量
    //作用，将canvas画布转化为base64编码的字符串
    var dataURL=cv.toDataURL('image/jpg',1);
    cv.style.backgroundImage='url('+dataURL+')';

    //2绘制覆盖层
    ctx.beginPath();
    ctx.fillStyle='silver';
    ctx.fillRect(0,0,cv.width,cv.height);

    //3给画布绑定鼠标移动的事件
    //鼠标按下执行事件
    //作用：控制开关的开启
    cv.addEventListener('mousedown', function () {
        isDown=true;
    });

    //如果抬起鼠标按键的时候，是在画布的外面，此时这个事件不会执行
    cv.addEventListener('mouseup', function () {
        isDown=false;
        ctx.globalCompositeOperation='source-over';
    });
    //给文档绑定鼠标抬起的事件
    document.addEventListener('mouseup', function () {
        isDown=false;
        //重置为默认值
        ctx.globalCompositeOperation='source-over';
    })

    //鼠标移动的事件
    cv.addEventListener('mousemove', function (event) {//原生js中e才是鼠标事件，jQurey中不一样哦。
        if(isDown){
            //需要开启新的路径
            ctx.beginPath();
            //设置destination-out,新绘制的内容会与原来的内容中重叠的部分变成透明
            ctx.globalCompositeOperation='destination-out';

            //只有鼠标按下去了，才可以执行刮的动作
            //获取到画布的位置
            var posObj=cv.getBoundingClientRect();
            //获取到画布距离左边和上边的距离
            var left=posObj.left;
            var top=posObj.top;

            //获取鼠标的位置，通过事件对象
            //event.clientX/event/clientY
            var x= event.clientX-left,
                y=event.clientY-top;

            ctx.arc(x,y,radius,0,Math.PI*2);
            ctx.fill();

        }
    })
}