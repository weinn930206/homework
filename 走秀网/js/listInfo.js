$(".back").click(function(){
	history.go(-1);
});

function GetQueryString(name){
    /*定义正则，用于获取相应参数*/
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    /*字符串截取，获取匹配参数值*/
    var r = window.location.search.substr(1).match(reg);
    /*返回会参数值*/
    if(r!=null)return  decodeURI(r[2]); return null;
}

$.ajax({
	    type:"POST",
	    url:"  http://datainfo.duapp.com/shopdata/getGoods.php",
	    dataType: "jsonp",
	    data:{classID:GetQueryString("classID")},
	    success:function(data){
	    	console.log(data); 
	    	
	    	$.each(data,function(i){		
	    		var $div = $("<div>");
		 		$div.html('<div class="goods" goodsID=' + data[i].goodsID + '><img class="imgs" src=" '+data[i].goodsListImg+' "><h4 class="name">' + data[i].goodsName+ '</h4><h4 class="price">¥' +data[i].price +'</h4></div>');
				$(".content").append($div);	
	 		})
	    }
   });
