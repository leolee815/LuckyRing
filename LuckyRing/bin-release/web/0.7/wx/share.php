<?php
//header('Access-Control-Allow-Origin:*');
require_once "jssdk.php";
if(isset($_POST['url'])){
	$url=$_POST['url'];
//echo $url;
$jssdk = new JSSDK("wx8ba5d505c2dc8d34", "c20c90aa88d9e1f828f4b4d239a91682",$url);
$signPackage = $jssdk->GetSignPackage();
echo json_encode($signPackage);
//$arr=array('status'=>1,'message'=>"\u6210\u529f",'data'=>$signPackage);
//echo  json_encode($arr);
}

?>