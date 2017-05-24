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
	    		var discount = (data[i].discount == 0) ? 1 : (data[i].discount/10) ; 	
	    		var $div = $("<div>");
		 		$div.html('<div goodsID=' + data[i].goodsID + '><img class="Img" src='+data[i].goodsListImg+'><div class="detail"><h3 class="name" id="name">'+ data[i].goodsName +'</h3><div class="money"><h3 class="new" id="new">¥'+ data[i].price  +'</h3><h3 class="old" id="old">¥'+ parseInt(Math.floor(data[i].price/discount))  +'</h3></div><h3>尺码 :160/84A  165/88A</h3><h3>数量 :1 </h3></div></div><div class="check"><img class="icon_1" src="../img/info_bg.png"/><span>查看商品详情</span><img class="icon_2" src="../img/info_icon.png"/></div>');
				$(".goods").append($div);					
				$(".Img").click(function(){
		 			window.location = "goods.html?goodsID="+$(this).attr("goodsID")
		 		})
	 		})
	    }
   });