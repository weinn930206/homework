$(".input").click(function(){
	$(".delete").css('display','block');
})
	


$(".delete").click(function(){
	$(".input").val("") ;	
	$(".delete").css('display','none');
})