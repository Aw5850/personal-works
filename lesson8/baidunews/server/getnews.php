<?php
header("Content-type:application/json;charset=utf-8");
require_once('db.php');

if ($link) {
	//执行成功的过程
	if(@$_GET['newstype']){
		$newstype=$_GET['newstype'];
		mysqli_query($link,"SET NAMES 'UTF8'");
		$sql="SELECT * FROM news WHERE newstype = '{$newstype}' order by id desc limit 0,2";
		$result=mysqli_query($link,$sql);
		$senddata=array();
		while ($row=mysqli_fetch_assoc($result)) {
		array_push($senddata,array(
			'id'=>$row['id'],
            'newstype'=>$row['newstype'],
			'newsimg'=>$row['newsimg'],
			'newstime'=>$row['newstime'],			
			'newstitle'=>$row['newstitle'],
			'newssrc'=>$row['newssrc']
			));
		}
		echo json_encode($senddata);
	}else{
		$sql='SELECT * FROM news order by id desc';
		mysqli_query($link,"SET NAMES 'UTF8'");
		$result=mysqli_query($link,$sql);
		$senddata=array();
		while ($row=mysqli_fetch_assoc($result)) {
		array_push($senddata,array(
			'id'=>$row['id'],
            'newstype'=>$row['newstype'],
			'newsimg'=>$row['newsimg'],
			'newstime'=>$row['newstime'],			
			'newstitle'=>$row['newstitle'],
			'newssrc'=>$row['newssrc']
			));
		}
		echo json_encode($senddata);
}
}else{
	echo json_encode(array('success'=>'none'));
}

mysqli_close($link);


?>