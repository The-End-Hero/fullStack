/**
 * Created by VTEC on 2016/10/10.
 */
function  pieChart(){
    //绘制饼状图的思路：
    //1先绘制圆饼
    //2绘制线
    //3绘制文字
    ctx.font='16px 微软雅黑'

    var startAngle=-90,             //起始角度
        angleStep= 0,           //每个数据的角度
        x0=cv.width/ 2,         //圆心点的x坐标
        y0=cv.height/ 2,        //圆心点的y坐标
        radius=100,             //半径
        item=null,              //数组中的每一项
        lineAngle= 0,           //线的角度
        text2Line=20,           //线与圆弧之间的距离
        textX= 0,               //线终点的x坐标
        textY= 0,               //线终点的y坐标
        textWidth= 0,           //文字的宽度
        textpadding=20;         //文字距离线的终点左右距离

    for(var i=0;i<data.length;i++){
        ctx.beginPath();
        item=data[i];
        //1绘制圆饼
        //1.1遍历对象
        //1.2根据每一项的value值，计算出当前扇形的角度
        angleStep=360*item.value;
        ctx.moveTo(x0,y0);
        ctx.arc(x0,y0,radius,toRadian(startAngle),toRadian(startAngle+=angleStep));
        ctx.fillStyle=item.color;
        ctx.fill();

        ctx.beginPath();
        //2绘制线
        //每条线的角度
        lineAngle=startAngle-angleStep/2;
        //根据公式绘制线
        //x=x0+r*Math.cos(a);
        //y=y0+r*Math.sin(a);
        textX=x0+(radius+text2Line)*Math.cos(toRadian(lineAngle))
        textY=y0+(radius+text2Line)*Math.sin(toRadian(lineAngle))
        ctx.moveTo(x0,y0);
        ctx.lineTo(textX,textY);
        ctx.strokeStyle=item.color;
        ctx.stroke();

        ctx.beginPath();
        //2.1绘制横线
        //计算文字的宽度
        textWidth=ctx.measureText(item.title).width;

        //判断绘制的横线是在左边还是右边
        if(lineAngle>90&&lineAngle<270){
            textWidth=-textWidth;
            //让文字右对齐
            ctx.textAlign='right';
            textpadding=-textpadding
        }

        ctx.moveTo(textX,textY);
        ctx.lineTo(textX+textWidth+textpadding,textY);
        ctx.stroke();

        //绘制文字
        ctx.beginPath();
        //让文字往左右两边移动，向上移动

        ctx.fillText(item.title,textX+textpadding,textY-10);

        textpadding=20;
    }
}