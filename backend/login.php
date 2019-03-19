<?php

header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');

//服务器
$ini=parse_ini_file("login.ini");
$con=mysqli_connect($ini["servername"],$ini["username"],$ini["password"],$ini["dbname"]);
// $con=mysqli_connect("localhost","root","Continue.LJL666","baibuti");
mysqli_query($con,"SET NAMES utf8mb4");

//本地
// $con=mysqli_connect("localhost","root","","baibuti");

$username=$_POST["username"];
$password=$_POST["password"];

$sql="SELECT `password` FROM `admin` WHERE username=?";
$stmt=mysqli_prepare($con,$sql);
mysqli_stmt_bind_param($stmt,"s",$username);
mysqli_execute($stmt);

$res=mysqli_stmt_get_result($stmt);
$row=mysqli_fetch_array($res);

if($username != $row["username"])
{
    echo "账号不存在";
    exit;
}

if($password != $row["password"]){
    echo "密码错误";
    exit;
}

echo "登陆成功";





?>
