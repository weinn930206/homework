$(".submit").click(function(){
	$name = $("#name").val();
	$password = $("#password").val();
	$confilm = $("#confilm").val();
	if($name !=="" && $password !== "" && $confilm !== "" ){
		if($password == $confilm){
			if($("#checked").is(':checked')){
				$.ajax({
					type:"post",
					url:"http://datainfo.duapp.com/shopdata/userinfo.php",
					data:{status:"register",userID:$name,password:$password},
					success:function(data){	
						if(data == 1){
					       $(".warning").css("display","none");
							window.location.href = "index.html";
						}else{
							$(".warning").css("display","block");
						    $(".warning span").html("用户名已存在");
						}	 
					}
				});
			}else {
				$(".warning").css("display","block");
			    $(".warning span").html("请阅读并勾选服务条款");
			}	
		}else{
			$(".warning").css("display","block");
			$(".warning span").html("您两次输入的密码不一致");
		}
	}else{
		$(".warning").css("display","block");
		$(".warning span").html("您好！用户名或密码不能为空");
	}
});
$(".back").click(function(){
	history.go(-1);
});
