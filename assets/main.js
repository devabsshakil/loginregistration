$(document).ready(function(){
    ///for design
    $('#username').focus(function(){
        $('#username').closest('.lg-inp-gp').addClass('focus');
    });
    $('#username').blur(function(){
       if($('#username').val()==''){
            $('#username').closest('.lg-inp-gp').removeClass('focus');
       }
    });
      $('#password').focus(function(){
        $('#password').closest('.lg-inp-gp').addClass('focus');
    });
    $('#password').blur(function(){
       if($('#password').val()==''){
            $('#password').closest('.lg-inp-gp').removeClass('focus');
       }
    });
    $('#tgpass').click(function(){
        if($('#password').attr('type','password')){
            $('#password').attr('type','text');
        }else if($('#password').attr('type','text')){
            $('#password').attr('type','password');
        }
        
    });
    //for development
    var namerregxp=/^[a-zA-Z .]+$/;
    $('#name').blur(function(){
        if(namerregxp.test( $('#name').val())){
           
        }else{
            $('.name-error').text('Invaild Name');
        }
      
    });
    
    
     var userregxp=/^[a-zA-Z._0-9]+$/;
    $('#Username').blur(function(){
        if(userregxp.test( $('#Username').val())){
           
        }else{
            $('.username-error').text('Invaild Username');
           var userlength=str.length($('#Username').val());
            if(userlength <6){
                 $('.username-error').text('username limti 6');
            }
            
        }
      
    });
    
});