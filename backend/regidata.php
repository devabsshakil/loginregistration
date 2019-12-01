<?php
require'Database.php';
$db=new Database;
function validation($data){
    $data=trim($data);
    $data=htmlspecialchars($data);
    $data=stripcslashes($data);
    return $data;
}
?>
<?php

if(isset($_POST['key']) && $_POST['key'] == 'reg'){
    $fname=$_POST['fullname'];
    $username=validation($_POST['username']);
    $email=validation($_POST['email']);
    $phone=validation($_POST['phone']);
    $address=validation($_POST['address']);
    
    $country=validation($_POST['country']);
    $gender=validation($_POST['gender']);
    $password=validation($_POST['password']);
    
    if(empty($fname) || empty($username) || empty($email) || empty($phone) || empty($address) || empty($country) || empty($gender) || empty($password)){
       
    }else{
        echo $fname;
    }
        
}