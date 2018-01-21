$(document).ready(function(){
    var cnt=2;
    $( ".next" ).click(function() {
        $(".gallery-active").fadeOut("fast",function(){
            $(this).attr("src","../img/Josip/"+cnt+".jpg");
            $(this).fadeIn("fast");
            cnt++;
        });
        if(cnt>6)
            cnt=1;
        });
    $(".prev").click(function(){
        $(".gallery-active").fadeOut("fast",function(){
            $(this).attr("src","../img/Josip/"+cnt+".jpg");
            $(this).fadeIn("fast");
            cnt--;
        });
        if(cnt < 1)
            cnt=6;
    });

});