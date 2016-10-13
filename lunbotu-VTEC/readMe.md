#轮播图小插件说明
###基于jQurey1.0版本，兼容IE至6
####V1.0输入参数（图片数量,需要插入的div的类名），动态生成轮播图
####图片名称为"l"+num+'.jpg',例如l0.jpg.
>```javascript
>$(function () {
>	var num=6
>    var origin=document.querySelector('.lunbotu-		origin').className
>    console.log(origin)
>    lunbotu(num,origin)
>    autoMove(num)
>    xiabiao()
>})
>```



#### V2.0版本

#### V2.0

- 图片文件名称放入数组，动态从数组调用图片数量和图片名称
- 基本封装完成


仍然存在的问题：

- 无法再同一页面中多次复用
- 1. 无法复用timeId重叠
  2. index重叠