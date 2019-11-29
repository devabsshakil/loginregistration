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

    
});