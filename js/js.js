$(function(){
    var z = /^1[34578]\d{9}$/;
    var nums = null;
    var Num = '';
    var status = false;
    var time = 10;
    var set;
    for( var i = 0; i < 4; i++){
        Num += (Math.round(Math.random()*10)) + '';  
    }
    $(".auth_code").on("click",function(){
        Num = '';
        nums = $(".mobile_num").val();
        if(nums == ''){
            $(".verify").text("手机号不能为空").show();
        }else if(!z.test(nums)){
            $(".verify").text("请输入正确的手机号码").show();
        }else{
            $(".verify").text("请输入正确的手机号码").hide();
              if(status == 0){
                  status = 1;
                  var time = 60;
                  for(var i =0; i < 4; i++){
                      Num +=
                      Math.round((Math.random()*9));
                  }
                  
                      alert(Num);
                      set=setInterval(function(){
                          if(time >0){
                              time--;
                              $(".auth_code").text(time+"秒");
                          }else{
                              clearInterval(set);
                              status = 0;
                              $(".auth_code").text("点击发送短信");
                          }
                      },1000)
              }
            
        }
    })

})