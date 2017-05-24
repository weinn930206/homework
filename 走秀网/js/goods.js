/*获取URL参数方法*/
function GetQueryString(name){
	/*定义正则，用于获取相应参数*/
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	 /*字符串截取，获取匹配参数值*/
     var r = window.location.search.substr(1).match(reg);
	 /*但会参数值*/
     if(r!=null)return  decodeURI(r[2]); return null;
}
$.ajax({
	    type:"POST",
	    url:"  http://datainfo.duapp.com/shopdata/getGoods.php",
	    dataType: "jsonp",
	    data:{goodsID:GetQueryString("goodsID")},
	    success:function(data){
	    	console.log(data);   		
	    	$.each(data,function(i){	
	    		console.log(data[i]. detail); 
	    		var img = eval(data[i].goodsBenUrl);
	    		console.log(img); 	    		
	    		for(var j = 0; j <img.length; j++){
	    			var $div = $("<div>");
			 		$div.html('<div goodsID=' + data[i].goodsID + '><img class="Imgs" src=" '+img[j]+ ' "><p>' +data[i]. detail + '</p> </div>');
					$(".goods").append($div);					
					$(".check").click(function(){
			 			window.location = "goods.html?goodsID="+$(this).attr("goodsID");
			 	      })
				}
	    	})
	    }
})




