<?php

header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
header("Content-type: text/html;charset=utf-8");

//服务器
$ini=parse_ini_file("login.ini");
$con=mysqli_connect($ini["servername"],$ini["username"],$ini["password"],$ini["dbname"]);
// $con=mysqli_connect("localhost","root","Continue.LJL666","baibuti");
mysqli_query($con,"SET NAMES utf8mb4");


//本地
// $con=mysqli_connect("localhost","root","","baibuti");

if(!$con){
    echo "连接错误";
    exit;
}

$name=$_POST["name"];
$gender=$_POST["gender"];//男为"male"  女为"female"
$grade=$_POST["grade"];//大一为"gradeOne"  大二为"gradeTwo"
$college=$_POST["college"];
$dormitory=$_POST["dormitory"];
$phone=$_POST["phone"];
$first=$_POST["first"];
$second=$_POST["second"];
$adjust=$_POST["adjust"];//服从为"adjustYes"  不服从为"adjustNo"
$introduction=$_POST["introduction"];

if($name==null){
    echo "请输入您的姓名";
    exit;
}

if($college==null){
    echo "请输入您的学院";
    exit;
}

if($dormitory==null){
    echo "请输入您的宿舍";
    exit;
}

if($phone==null){
    echo "请输入您的手机号";
    exit;
}

if($first==null){
    echo "请输入您的第一志愿";
    exit;
}

if(is_numeric($phone) == false  ||  iconv_strlen($phone,"utf-8") != 11){
    echo "请输入11位手机号码";
    exit;
}

$sql="SELECT `name` FROM information WHERE phone=?";
$stmt=mysqli_prepare($con,$sql);
mysqli_stmt_bind_param($stmt,"s",$phone);
mysqli_execute($stmt);

$res=mysqli_stmt_get_result($stmt);

$row=mysqli_fetch_array($res);

if($name == $row["name"]){
    echo "您已经报名过了，可查询报名信息";
    exit;
}



$sql="INSERT INTO information(`name`,gender,grade,college,dormitory,phone,`first`,second,adjust,introduction)
      VALUES (?,'$gender','$grade','$college',?,?,'$first','$second','$adjust',?)";

$stmt=mysqli_prepare($con,$sql);
mysqli_stmt_bind_param($stmt,"ssss",$name,$dormitory,$phone,$introduction);
mysqli_execute($stmt);

echo "报名成功";













?>
