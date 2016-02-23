<?php
//header('Access-Control-Allow-Origin:*');
require_once "jssdk.php";
if(isset($_POST['url'])){
	$url=$_POST['url'];
//echo $url;
$jssdk = new JSSDK("wx8d54578297ea2a5b", "f494b578d16db6f1283aab0c29c96ff0",$url);
$signPackage = $jssdk->GetSignPackage();
echo json_encode($signPackage);
//$arr=array('status'=>1,'message'=>"\u6210\u529f",'data'=>$signPackage);
//echo  json_encode($arr);
}

?>