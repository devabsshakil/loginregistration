<?php include'backend/Database.php';
$db=new Database();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login Registration</title>
    <!--bootstrap  css-->
    <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css">
    <!--fontawesome  css-->
    <link rel="stylesheet" href="vendor/fontawesome/css/all.css">
    <!--main style-->
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
   <div class="img-bg">
   <img src="assets/img/regbg.svg" alt="">
   </div>
   <div class="container registerpage">
    
               <div class="register-area mt-5 p-5">
                  <div class="card shadow-lg">
                      <div class="card-head">
                            <h2 class="text-center mb-4 mt-3">Register Now</h2>
                      </div>
                      <div class="card-body">
                           <form action="" >
                       <div class="form-group">
                          <div class="row">
                              <div class="col-2">
                                   <label for="name">Name</label>
                              </div>
                              <div class="col-10">
                                   <input type="text" name="name" id="name" class="form-control">
                                   <div class="name-error val-error"></div>
                              </div>
                          </div>  
                       </div>
                       <div class="form-group">
                          <div class="row">
                              <div class="col-2">
                                   <label for="Username">Username</label>
                              </div>
                              <div class="col-10">
                                   <input type="text" name="Username" id="Username" class="form-control">
                                    <div class="username-error val-error"></div>
                              </div>
                          </div>  
                       </div>
                          <div class="form-group">
                          <div class="row">
                              <div class="col-2">
                                   <label for="Email">Email</label>
                              </div>
                              <div class="col-10">
                                   <input type="email" name="Email" id="Email" class="form-control">
                              </div>
                          </div>  
                       </div>
                         <div class="form-group">
                          <div class="row">
                              <div class="col-2">
                                   <label for="Phone">Phone</label>
                              </div>
                              <div class="col-10">
                                   <input type="text" name="Phone" id="Phone" class="form-control">
                              </div>
                          </div>  
                       </div>
                         <div class="form-group">
                          <div class="row">
                              <div class="col-2">
                                   <label for="country">Country</label>
                              </div>
                              <div class="col-10">
                                   <select name="country" id="country" class="form-control">
                                       <option value="">select your country</option>
                                        <option value="BN">Bangladesh</option>
                                         <option value="IN">India</option>
                                          <option value="PK">Pakistan</option>
                                           <option value="SL">Srilanka</option>
                                   </select>
                              </div>
                          </div>  
                       </div>
                       <div class="form-group">
                          <div class="row">
                              <div class="col-2">
                                   <label for="Address">Address</label>
                              </div>
                              <div class="col-10">
                                 <textarea name="Address" id="Address" class="form-control"></textarea>
                              </div>
                          </div>  
                       </div>
                         <div class="form-group">
                          <div class="row">
                              <div class="col-2">
                                   <label for="Address">Gender</label>
                              </div>
                              <div class="col-10">
                                <input type="radio" name="gender" id="gender">Male
                                 <input type="radio" name="gender" id="gender">Female
                              </div>
                          </div>  
                       </div>
                        <div class="form-group">
                          <div class="row">
                              <div class="col-2">
                                   <label for="Password">Password</label>
                              </div>
                              <div class="col-10">
                               <input type="password" name="password" id="password" class="form-control">
                              </div>
                          </div>  
                       </div>
                         <div class="form-group">
                          <div class="row">
                              <div class="col-2">
                                   <label for="conpass">Confirm Password </label>
                              </div>
                              <div class="col-10">
                               <input type="password" name="conpass" id="conpass" class="form-control">
                              </div>
                          </div>  
                       </div>
                       <input type="submit" value="Register Now" class="btn our-btn btn-block btn-lg">
                   </form>
                      </div>
                  </div>
                 
                  
               </div>
           </div>
   <!--jquery-->
   <script src="vendor/jquery/jquery-3.4.1.min.js"></script>
   <!--popper js-->
   <script src="vendor/bootstrap/js/popper.min.js"></script>
   <!--bootstrap js-->
   <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
   <!--main js-->
   <script src="assets/main.js"></script>
</body>
</html>