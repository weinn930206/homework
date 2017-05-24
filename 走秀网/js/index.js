var mySwiper = new Swiper('.swiper-container', {
	    autoplay:3000,//可选选项，自动滑动
		pagination : '.swiper-pagination',
		paginationClickable :true,
        loop:true,
})

   $.ajax({
	    type:"POST",
	    url:"  http://datainfo.duapp.com/shopdata/getGoods.php",
	    dataType: "jsonp",
	    success:function(data){
	    	console.log(data);   		
	    	$.each(data,function(i){	
	    		var img = data[i].goodsListImg;
	    		var discount = (data[i].discount == 0) ? 1 : (data[i].discount/10) ; 		
	    		var $div = $("<div>");
		 		$div.html ("<ul class='con' goodsID = " +data[i].goodsID+" ><li class='goods'><img src=" + img +"  class='goodsImg'><div class='right'><h4 class='name'>"+data[i].goodsName+"</h4><div class='money'><h3 class='new'>¥"+data[i].price+"</h3><h6 class='old'>"+parseInt(Math.floor(data[i].price/discount)) +"</h6><div class='car'><img src='../img/home/bg_car.png' /></div></div><h6 class='fav'>"+data[i].discount+"折</h6></div></li><div class='clear'></div></ul>");
		 		$(".content").append($div);
		 		
		 		$(".con").click(function(){
		 			window.location = "detail.html?goodsID="+$(this).attr("goodsID")
		 		})
	 		})
	    }
   });
   
