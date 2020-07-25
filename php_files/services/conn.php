<?php 
    //Prevent cors error
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');  
    
    //Specify database information
    $url = "localhost";
    $database = "netas";
    $username = "root";
    $password = "";
   
    //Establish a db connection
    $conn = mysqli_connect($url, $username, $password, $database);
   
    $sonuc = Array();

    if(!$conn){
        die("Connection failed: " .$conn -->connect_error);
    }

?>