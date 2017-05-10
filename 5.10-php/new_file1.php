<?php 
$msg = "";
$msgClass = "";
$names = array("abc","bcd","cde","def","efg","fgh");
if(filter_has_var(INPUT_POST, 'submit')){
	$name = htmlentities($_POST['username']);
	$password = htmlentities($_POST['password']);
	$confirm = htmlentities($_POST['confirm']);
	if (!empty($name) && !empty($password) && !empty($confirm)) {
		// 内容不为空
		for ($i=0; $i < count($names); $i++) { 
			if ($names[$i] === $name) {
				// 未被注册
				if ($password === $confirm) {
					// 密码一样
					$msg = "注册成功";
					$msgClass = "alert-success";
					array_push($names, $name);
					echo $names;
				}else{
					// 密码不同
					$msg = "密码不正确,请重新输入";
					$msgClass = "alert-danger";
				}
			}else{
			    // 已注册
			    $msg = "用户名已存在";
				$msgClass = "alert-danger";
			}		
		}		
	}else{
		// 内容为空
		$msg = "请输入全部信息";
		$msgClass = "alert-danger";
    }
}
 ?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>注册</title>
	<link rel="stylesheet" href="http://bootswatch.com/united/bootstrap.min.css">
</head>
<body>
	<nav class="navbar navbar-default">
		<div class="container">
			<div class="navheader">
				<a href="new_file1.php" class="navbar-brand">注册</a>
			</div>
		</div>
	</nav>

	
	<div class="container">
	
		<?php if ($msg != ""): ?>
		<div class="alert <?php echo $msgClass; ?>"><?php echo $msg ?></div>
		<?php endif; ?>

		<form action="" method="post">
			<div class="form-group">
			    <label >用户名: </label>
				<input type="text" class="form-control" name="username">
			</div>
			<div class="form-group">
			    <label >新密码: </label>
				<input type="password" class="form-control" name="password">
			</div>
			<div class="form-group">
			    <label >确认新密码: </label>
				<input type="password" class="form-control" name="confirm">
			</div>
			<button type="submit" class="btn btn-primary" name="submit">提交</button>
		</form>
	</div>
</body>
</html>