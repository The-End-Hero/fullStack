/**
 * Created by Administrator on 2016/10/9.
 */
var index=0;
var timerId;
var inner_width;
var num1;
//num代表图片个数    append  appendChild
function lunbotu(num,origin){
    num1=num;
    //轮播图片下标
    $('.'+origin).append("<ul class='lunbotu-ul'></ul>")

    //动态创建图片个数个li
    for(var i=0;i<num;i++){
        $('.lunbotu-ul').append("<li class=pic"+i+"><a href='javascript:'><img src='l"+i+".jpg' alt=''></a></li>")
    }
    $('.lunbotu-ul').append("<li class=pic"+0+"><a href='javascript:'><img src='l"+0+".jpg' alt=''></a></li>")
    $('.lunbotu-ul').prepend("<li class=pic"+(i-1)+"><a href='javascript:'><img src='l"+(i-1)+".jpg' alt=''></a></li>")

    //动态创建图片下标
    $('.'+origin).append("<ul class='lunbotu-xiabiao'></ul>")
    for(var i=0;i<num;i++){
        $('.lunbotu-xiabiao').append("<li class='xiaobiao"+i+"'></li>")
    }
    $()
    console.log($('.lunbotu-xiabiao').width())


    $('.lunbotu-xiabiao').children().css({
        float:'left',
        margin:'0px 5px 10px 10px',
        width:'15px',
        height:'15px',
        borderRadius:'50%',
        backgroundColor:'white'
    })
    console.log($('.lunbotu-xiabiao').width())

    $('.lunbotu-xiabiao').css({
        position: 'absolute',
        bottom:'0px',
        //($('.lunbotu-xiabiao').width()为何是750？？？
        left:'50%',
        marginLeft:-($('.lunbotu-xiabiao').width()/2)+"px"
    })


    //获取li的宽度
    inner_width=$('.lunbotu-ul').children().width();
    $('.lunbotu-ul').css({
        width:(num+2)*100+"%",
        marginLeft:-inner_width+'px'
    })

    //a标签
    $('.lunbotu-ul').children().children().css({
        width:'100%',
        height:'100%'
    })

    //img标签
    $('.lunbotu-ul').children().children().children().css({
        display:'block',
        width:'100%',
        height:'100%'
    })

    //li标签
    $('.lunbotu-ul').children().css({
        width:(100/(num+2))+'%',
        float:'left'
    })

    //ul宽度需要width完全加载完成才能知道，不然是父元素的750px
    console.log($('.lunbotu-xiabiao').width())
    $('.lunbotu-xiabiao').css({
        marginLeft:-($('.lunbotu-xiabiao').width()/2)+"px"
    })


}
//定时器无法执行带参数的函数，必须用一个不带参数的返回带参数的。
//num1和num相等，无法从html页面直接获取，在lunbotu方法中获取num。
function fn(){
    return timeAuto(num1)
}
//自动轮播方法
function timeAuto(num){
    index++
    $('.lunbotu-xiabiao').children().css({
        backgroundColor:'white'
    })
    $('.lunbotu-xiabiao').children().eq(index).css({
        backgroundColor:'black'
    })
    $('.lunbotu-ul').animate({
        marginLeft:(-inner_width*(index+1))+'px'
    },200,'swing', function () {
        if(index===num){
            index=0
            $('.lunbotu-xiabiao').children().eq(index).css({
                backgroundColor:'black'
            })
            $('.lunbotu-ul').css({
                marginLeft:(-inner_width*(index+1))+'px'
            })

        }
    })
}

//自动轮播+下标跟随
function autoMove(num){
//            var index=0;
    inner_width=$('.lunbotu-ul').children().width();
    $('.lunbotu-xiabiao').children().eq(0).css({
        backgroundColor:'black'
    })
    var a=num+"";
    timerId=setInterval(fn
        ,2000)
}

//下标跟随
function xiabiao(){
    var figure=$('.lunbotu-xiabiao').children().length;
    for(var i=0;i<figure;i++){
        $('.lunbotu-xiabiao').children().eq(i).on('mouseenter', function () {
            if(timerId){
                clearInterval(timerId);
            }
            var indexLi=$(this).index();

            console.log(indexLi)
            $('.lunbotu-xiabiao').children().css({
                backgroundColor:'white'
            })
            $(this).css({
                backgroundColor:'black'
            })
            $('.lunbotu-ul').animate({
                marginLeft:(-inner_width*(indexLi+1))+'px'
            },200,'swing')
            index=indexLi;
        })
        $('.lunbotu-xiabiao').children().eq(i).on('mouseleave', function () {
            timerId=setInterval(fn,2000)
        })
    }
}