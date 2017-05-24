$.ajax({
	    type:"POST",
	    url:"  http://datainfo.duapp.com/shopdata/getclass.php",	    
	    dataType:"json",
	    success:function(data){
//	    	console.log(data);   		
	    	for(var i = 0 ; i < data.length;i++){	
//	    	console.log(data[i].className);   			    		
	    		var $div = $("<div>");
		 		$div.html ("<div class='rows' classID = " +data[i].classID+"><span class='kinds'>"+data[i].className+"</span><img src='../img/class/jiantou-right.jpg'/></div>");
		 		$(".content").append($div);
		 		$(".rows").click(function(){
		 			window.location = "listInfo.html?classID="+$(this).attr("classID")
		 		})
	 		}
	    	
	    }
   });