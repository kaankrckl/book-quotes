<?php
    require"conn.php";

    //check if post request hast un parameter
    if(isset($_POST['un'])){

  	   $username = $_POST['un'];
       $password = $_POST['pw'];

  	   $query = "SELECT * FROM users WHERE username='$username' AND password='$password'";

       $result=mysqli_query($conn, $query);
       $count=mysqli_num_rows($result);

       //check if the query return anything
       if($count>0){
        
        $sonuc['username']=$username;
        $sonuc['success']="Login successful";
      
     }
     else
     {
      $sonuc['error']="Invalid username or password";
     }

     }

	echo json_encode($sonuc);

?>