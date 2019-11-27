<?php
class Database{
    private $host='localhost';
    private $user='root';
    private $pass='';
    private $dbname='login_registration';
    public $conn;
    public $error;
    public function __construct(){
        $this->connect();
    }
    public function connect(){
       $conn= new mysqli($this->host,$this->user,$this->pass,$this->dbname);
        if($conn){
            return $this->conn;
        }else{
            return false;
        }
    }
}
    
?>