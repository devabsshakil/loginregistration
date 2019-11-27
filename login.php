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
   <div class="container loginpage">
               <div class="register-area mt-5 p-5">
                  <div class="card shadow-lg">
                      <div class="card-head">
                           <div class="card-img-top ">
                               <img src="assets/img/prfilepic.svg" class="img-fluid w-25 h-25 mx-auto d-block" alt="">
                           </div>
                            <h2 class="text-center mb-4 mt-3">Login Now</h2>
                      </div>
                      <div class="card-body">
                           <form action="" >
                      <div class="lg-inp-gp">
                          <div class="i"><i class="fas fa-user"></i></div>
                          <div class="input-gp username-group">
                              <h4>Username</h4>
                              <input type="text" name="username" id="username" class="l-inp-box">
                          </div>
                      </div>
                       <div class="lg-inp-gp">
                          <div class="i">
                          <i class="fas fa-lock"></i>
                          </div>
                          <div class="input-gp password-group">
                              <h4>Password</h4>
                              <input type="password" name="password" id="password" class="l-inp-box">
                              <div class="tgpass" id="tgpass"><i class="fas fa-eye"></i></div>
                             
                          </div>
                      </div>
                     <div class="remeber-area">
                          <label for="remember">Remember Me</label>
                      <input type="checkbox" name="" id="remember">
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