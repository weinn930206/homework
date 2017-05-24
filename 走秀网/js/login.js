$(".submit").click(function(){
	$name = $("#name").val();
	$password = $("#password").val();
	if($name == "" && $password == ""){
		$(".warning").css("display","block");
		$(".warning span").html("您好！用户名或密码不能为空");
	}else{	
		$.ajax({
			type:"post",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			data:{status:"login",userID:$name,password:$password},
			success:function(data){
//				console.log(data);
				if(data == 0){
					$(".warning").css("display","block");
		            $(".warning span").html("用户名不存在");
				}else if(data == 2){
					$(".warning").css("display","block");
		            $(".warning span").html("用户名密码不符");
				}else{
					console.log(1)
					window.location.href = "index.html";
				};
			}
		});
	}
})
$(".back").click(function(){
	history.go(-1);
})
$("#show").click(function(){
	if($("#show").is(":checked")){
		$("#password").attr("type","text");
	}else{
		$("#password").attr("type","password");
	}
})

function setCookie(key,value,time){
	var date  = new Date;
	date.setDate(date.getDate()+time);
	document.cookie = key + "=" + value + "; expires = " + date;
}
function getCookie(key){
	var arr = document.cookie.split("; ");
	for(var i = 0; i < arr.length; i++){
		var arr2 = arr[i].split("=");
		if(key == arr2[0]){
			return arr2[1]
		}
	}
}
$("#remember").click(function(){
	if($("#remember").is(":checked")){
		setCookie('name',$("#name").val(),1200);
        setCookie("password",$("#password").val(),1200);
	    console.log(document.cookie);
//	    console.log(getCookie("name"));	    
	}else{
		setCookie('name',$("#name").val(),-1);
        setCookie("password",$("#password").val(),-1);
	    console.log(document.cookie);
	    $("#name").val("");
        $("#password").val("");
	}
})
var username = getCookie("name");
var password = getCookie("password");

$("#name").val(name);
$("#password").val(password);

  

