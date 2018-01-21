$(document).ready(function(){
    var cnt=1;
    $( ".next" ).click(function() {
        $(".gallery-active").fadeOut("fast",function(){
            cnt++;
            if(cnt>6)
                cnt=1;
            $(this).attr("src","../img/Josip/"+cnt+".jpg");
            $(this).fadeIn("fast");

        });
        
        });
    $(".prev").click(function(){
        cnt--;
        if(cnt < 1)
            cnt=6;
        $(".gallery-active").fadeOut("fast",function(){
            $(this).attr("src","../img/Josip/"+cnt+".jpg");
            $(this).fadeIn("fast");
        });
        
    });

});