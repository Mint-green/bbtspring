<?php


session_start();
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
// header("Content-type: text/html; charset:utf-8");
//服务器
$ini=parse_ini_file("login.ini");
$con=mysqli_connect($ini["servername"],$ini["username"],$ini["password"],$ini["dbname"]);
// $con=mysqli_connect("localhost","root","Continue.LJL666","baibuti");
mysqli_query($con,"SET NAMES utf8mb4");

//本地
// $con=mysqli_connect("localhost","root","","baibuti");
// mysqli_query($con,'set names utf8');
// mysqli_query("set names 'utf8'",$con);
if(!$con){
    $result=["code" => 1, "msg" => "连接错误"];
    echo json_encode($result);
    exit;
}
    
$name=$_POST["name"];
$phone=$_POST["phone"];

if($name==null){
    $result=["code" => 2, "msg" => "请输入您的姓名"];
    echo json_encode($result);
    exit;
}

if($phone==null){
    $result=["code" => 3, "msg" => "请输入您的手机号"];
    echo json_encode($result);
    exit;
}

if(is_numeric($phone)==false || iconv_strlen($phone,"utf-8") != 11){
    $result=["code" => 4, "msg" => "请输入11位手机号码"];
    echo json_encode($result);
    exit;
}

$sql="SELECT * FROM information WHERE phone=?";
$stmt=mysqli_prepare($con,$sql);
mysqli_stmt_bind_param($stmt,"s",$phone);
mysqli_execute($stmt);

$res=mysqli_stmt_get_result($stmt);
$row=mysqli_fetch_array($res);

if($name != $row["name"]){
    $result=["code" => 5, "msg" => "报名系统没有您的信息，快去报名吧"];
    echo json_encode($result);
    exit;
}
else{
    $result=["code" => 0, "msg" => ""];
}


$_SESSION["name"]=$name;
$_SESSION["phone"]=$phone;


echo json_encode($result);









?>
