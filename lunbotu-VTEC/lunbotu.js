/**
 * Created by VTEC on 2016/10/9.
 */
var index=0;
var timerId;
var inner_width;
var num1;
var origin1;
var start= function (num,origin,arr) {
    lunbotu(num,origin,arr)
    autoMove(num,origin)
    xiabiao(origin)
}
//num代表图片个数    append  appendChild
function lunbotu(num,origin,arr){
    num1=num;
    origin1=origin
    //轮播图片下标
    $('.'+origin).append("<ul class='lunbotu-ul'></ul>")

    //动态创建图片个数个li
    for(var i=0;i<num;i++){
        $('.'+origin+'>.lunbotu-ul').append("<li class=pic"+i+"><a href='javascript:'><img src='"+arr[i]+"' alt=''></a></li>")
    }
    $('.'+origin+'>.lunbotu-ul').append("<li class=pic"+0+"><a href='javascript:'><img src='"+arr[0]+"' alt=''></a></li>")
    $('.'+origin+'>.lunbotu-ul').prepend("<li class=pic"+(i-1)+"><a href='javascript:'><img src='"+arr[num-1]+"' alt=''></a></li>")

    //动态创建图片下标
    $('.'+origin).append("<ul class='lunbotu-xiabiao'></ul>")
    for(var i=0;i<num;i++){
        $('.'+origin+'>.lunbotu-xiabiao').append("<li class='xiaobiao"+i+"'></li>")
    }
    $()
    //console.log($('.lunbotu-xiabiao').width())


    $('.'+origin+'>.lunbotu-xiabiao').children().css({
        float:'left',
        margin:'0px 5px 10px 10px',
        width:'15px',
        height:'15px',
        borderRadius:'50%',
        backgroundColor:'white'
    })
    //console.log($('.lunbotu-xiabiao').width())

    $('.'+origin+'>.lunbotu-xiabiao').css({
        position: 'absolute',
        bottom:'0px',
        //($('.lunbotu-xiabiao').width()为何是750？？？
        left:'50%',
        marginLeft:-($('.'+origin+'>.lunbotu-xiabiao').width()/2)+"px"
    })


    //获取li的宽度
    inner_width=$('.'+origin+'>.lunbotu-ul').children().width();
    $('.'+origin+'>.lunbotu-ul').css({
        width:(num+2)*100+"%",
        marginLeft:-inner_width+'px'
    })

    //a标签
    $('.'+origin+'>.lunbotu-ul').children().children().css({
        width:'100%',
        height:'100%'
    })

    //img标签
    $('.'+origin+'>.lunbotu-ul').children().children().children().css({
        display:'block',
        width:'100%',
        height:'100%'
    })

    //li标签
    $('.'+origin+'>.lunbotu-ul').children().css({
        width:(100/(num+2))+'%',
        float:'left'
    })
    //console.log($('.'+origin+' .lunbotu-ul').children())
    //ul宽度需要width完全加载完成才能知道，不然是父元素的750px
    //console.log($('.lunbotu-xiabiao').width())
    $('.'+origin+'>.lunbotu-xiabiao').css({
        marginLeft:-($('.'+origin+'>.lunbotu-xiabiao').width()/2)+"px"
    })


}
//定时器无法执行带参数的函数，必须用一个不带参数的返回带参数的。
//num1和num相等，无法从html页面直接获取，在lunbotu方法中获取num。
function fn(){
    return timeAuto(num1,origin1)
}
//自动轮播方法
function timeAuto(num,origin){
    index++
    $('.'+origin+'>.lunbotu-xiabiao').children().css({
        backgroundColor:'white'
    })
    $('.'+origin+'>.lunbotu-xiabiao').children().eq(index).css({
        backgroundColor:'black'
    })
    $('.'+origin+'>.lunbotu-ul').animate({
        marginLeft:(-inner_width*(index+1))+'px'
    },200,'swing', function () {
        if(index===num){
            index=0
            $('.'+origin+'>.lunbotu-xiabiao').children().eq(index).css({
                backgroundColor:'black'
            })
            $('.'+origin+'>.lunbotu-ul').css({
                marginLeft:(-inner_width*(index+1))+'px'
            })

        }
    })
}

//自动轮播+下标跟随
function autoMove(num,origin){
//            var index=0;
    inner_width=$('.'+origin+'>.lunbotu-ul').children().width();
    $('.'+origin+'>.lunbotu-xiabiao').children().eq(0).css({
        backgroundColor:'black'
    })
    //var a=num+"";
    timerId=setInterval(fn
        ,2000)
}

//下标跟随
function xiabiao(origin){
    var figure=$('.'+origin+'>.lunbotu-xiabiao').children().length;
    for(var i=0;i<figure;i++){
        $('.'+origin+'>.lunbotu-xiabiao').children().eq(i).on('mouseenter', function () {
            if(timerId){
                clearInterval(timerId);
            }
            var indexLi=$(this).index();

            //console.log(indexLi)
            $('.'+origin+'>.lunbotu-xiabiao').children().css({
                backgroundColor:'white'
            })
            $(this).css({
                backgroundColor:'black'
            })
            $('.'+origin+'>.lunbotu-ul').animate({
                marginLeft:(-inner_width*(indexLi+1))+'px'
            },200,'swing')
            index=indexLi;
        })
        $('.'+origin+'>.lunbotu-xiabiao').children().eq(i).on('mouseleave', function () {
            timerId=setInterval(fn,2000)
        })
    }
}