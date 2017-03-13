/**
 * Created by asus on 2017/3/13.
 */
$(".ols li").last().on("click",function(){
    $(".add").show();
    $(".fa-times-circle").show();
})
$("#btn").on("click",function(){
    var val=$("#text").val();
    if(val==""){
        alert("请输入添加的内容")
    }else if(val.length>5){
        alert("字数不能多于5个")
        $("input").val("");
    }else{
        $(".ols li").last().before('<li class="col-md-3 text-center">'+val+'<i class="fa fa-times-circle"></i></li>');
        $("input").val("");
        $(".add").hide();
        $(".fa-times-circle").show();
    }
})