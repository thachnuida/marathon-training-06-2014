$(document).ready(function(){
	$(".process").each(function(){
		var value = $(this).find(".number").text();
		$(this).css("background", 'rgb('+Math.floor(Math.random() * 255)+','+Math.floor(Math.random() * 255)+','+Math.floor(Math.random() * 255)+')');
		$(this).animate({
		opacity: 0.75,
   		width: value*100,
   		});
	});
	$('.lc').hover(function(){
		$(this).find('.img').attr("src", STATIC_URL+"polls/images/coins-in-hand-icon.png");
	}, function(){
		$(this).find('.img').attr("src", STATIC_URL+"polls/images/Hand-icon.png");
	});
});
