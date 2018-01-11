$(document).ready(function(){
    var images = ["img/plitvice.jpg","img/cetina.jpg","img/sv-velebit.jpg"]
    var titles = ["Plitvička jezera", "Cetina", "Sjeverni Velebit"];
    var subtitles = ["Nacionalni park Plitvička Jezera", "Ušće cetine u Omišu", "Pogled s sjevernog velebita"]
    
    $(".attraction").click(function(){
        setContent($(".attraction").index(this));
    });

    function setContent(index)
	{
		if(index < 0 || index > titles.length || pastIndex == index){return;}
		
		pastIndex = index;
		
		$(".attractions .image").fadeOut("fast", function()
		{
			$(this).attr("src", images[index]);
			$(this).fadeIn("fast");
		});
		
		$(".attractions .title").fadeOut("fast", function()
		{
			$(this).text(titles[index]);
			$(this).fadeIn("fast");
		});
		
		$(".attractions .caption").fadeOut("fast", function()
		{
			$(this).text(subtitles[index]);
			$(this).fadeIn("fast");
		});
	}
});