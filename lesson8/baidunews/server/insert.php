<?php
header("Content-type:application/json;charset=utf-8");
require_once('db.php');
//添加新闻
if ($link) {
	// 执行成功的过程
	mysqli_query($link,"SET NAMES 'UTF8'");
	$newstitle=addslashes(htmlspecialchars($_POST['newstitle']));
	$newstype=addslashes(htmlspecialchars($_POST['newstype']));
	$newsimg=addslashes(htmlspecialchars($_POST['newsimg']));
	$newstime=addslashes(htmlspecialchars($_POST['newstime']));
	$newssrc=addslashes(htmlspecialchars($_POST['newssrc']));

	$sql="INSERT INTO news(newstitle,newstype,newsimg,newstime,newssrc) VALUES(
	'{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}')";

	mysqli_query($link,"SET NAMES 'UTF8'");
	$result=mysqli_query($link,$sql);
	echo json_encode(array('success'=>'连接成功'));
}
?>
