$(document).ready(function(){
    var images = ["../img/mix/img-top.jpg","../img/mix/pagBridge.jpg","../img/mix/indoorHat.jpg"];
    var cnt=2;
    //$(".next").click(function(){
    //    ("#book").fadeOut("slow");
    //});
    $( ".next" ).click(function() {
        $(".gallery-active").fadeOut("fast",function(){
            $(this).attr("src","../img/josip/"+cnt+".jpg");
            $(this).fadeIn("slow");
            cnt++;
        });
        if(cnt>6)
            cnt=1;
        });
    $(".prev").click(function(){
        $(".gallery-active").fadeOut("fast",function(){
            $(this).attr("src","../img/josip/"+cnt+".jpg");
            $(this).fadeIn("slow");
            cnt--;
        });
        if(cnt < 0)
            cnt=1;
    });

});