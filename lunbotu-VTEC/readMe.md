#轮播图小插件说明
###基于jQurey1.0版本，兼容IE6、7、8
####V1.0输入参数（图片数量,需要插入的div的类名），动态生成轮播图
####图片名称为"l"+num+'.jpg',例如l0.jpg.
>```javascript
>$(function () {
>	var num=6
>    var origin=document.querySelector('.lunbotu-		origin').className
>    alert(origin);
>    console.log(origin)
>    lunbotu(num,origin)
>    autoMove(num)
>    xiabiao()
>})
>```