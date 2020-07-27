<?php
    include 'conn.php';
 
  if(isset($_POST['un'])){

    $username = $_POST['un'];
    $password = $_POST['pw'];
    $query = "SELECT * FROM users WHERE username='$username'";
    $result=mysqli_query($conn, $query);
    $count=mysqli_num_rows($result);
    if($count==1){
    $sonuc['error']='This user ID already exist, please select a new userid';
    }
    else
    {
    $register="INSERT INTO users(username, password) VALUES ('$username', '$password')";
    mysqli_query($conn, $register);
      $sonuc['success']='Account created, Welcome ';
    }
  }
echo json_encode($sonuc);
?>
