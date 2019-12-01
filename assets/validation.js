
    var nameisok,userok,emailok,phoneok,addressok,countryok,genderok,passok,conpassok,allisok;
    nameisok = userok = emailok = phoneok = addressok = countryok = genderok = passok = conpassok = allisok=true;
    //for Fullname
    var namerregxp=/^[a-zA-Z .]+$/;
    $('#name').blur(function(){
        if(namerregxp.test( $('#name').val())){
             $('.name-error').text('');
            $('#name').addClass('ss-border');
            nameok=true;
        }else{
            $('.name-error').text('');
             $('#name').removeClass('ss-border');
             $('.name-error').text('Invaild Name');
            nameok=false;
        }
      
    });
    
    //for username
     var userregxp=/^[a-zA-Z._0-9]+$/;
    $('#Username').blur(function(){
        if(userregxp.test( $('#Username').val())){
            $('#Username').addClass('ss-border');
             $('.username-error').text('');
            userok=true;
        }else{
            $('.username-error').text('');
            $('#Username').removeClass('ss-border');
            $('.username-error').text('Invaild Username');
            userok=false;
        }

      
    });
    //for email
    //abcd.fjs_dk99@gmail.com
     var emailregxp=/^[a-zA-Z._0-9]+@[a-z]+\.[a-z]{2,5}$/;
    $('#Email').blur(function(){
        if(emailregxp.test( $('#Email').val())){
             $('#Email').addClass('ss-border');
             $('.email-error').text('');
           emailok=true;
        }else{
             $('.email-error').text('');
            $('#Email').removeClass('ss-border');
            $('.email-error').text('Invaild Email address');
            emailok=false;
        }

      
    });
     //for phonne
    //017888888
     var phoneregxp=/^[0-9]{7,15}$/;
    $('#Phone').blur(function(){
        if(phoneregxp.test( $('#Phone').val())){
             $('#Phone').addClass('ss-border');
             $('.phone-error').text('');
            phoneok=true;
        }else{
            $('.phone-error').text('');
            $('#Phone').removeClass('ss-border');
            $('.phone-error').text('Invaild Phone number');
            phoneok=false;
        }

      
    });
     //for address
    //017888888
     var addressregxp=/^[a-zA-Z0-9 _#/.,-:]+$/;
    $('#Address').blur(function(){
        if(addressregxp.test( $('#Address').val())){
             $('#Address').addClass('ss-border');
             $('.address-error').text('');
           addressok=true;
        }else{
            $('.address-error').text('');
            $('#Phone').removeClass('ss-border');
            $('.address-error').text('Invaild Address');
            addressok=false;
        }

      
    });
 //for country
$('#country').click(function(){
    if($('#country').val == ' '){
         $('.country-error').text('country must not be empty');
        countryok=false;
        
    }else{
         $('.country-error').text('');
        countryok=true;
    }
});

    //for password
    //017888888
    $('#password').blur(function(){
        if($('#password').val().length <=6){
             $('#password').removeClass('ss-border');
           $('.password-error').text('Password must be at least 6 chracter');
            passok=false;
        }else{
             $('#password').addClass('ss-border');
            $('.password-error').text('');
           
            passok=true;
        }

      
    });
    //for con pass
     $('#conpass').blur(function(){
        if($('#password').val() == $('#conpass').val()){
           $('.con-pass-error').text('');
            $('#password').removeClass('ss-border');  
          conpassok=true;
        }else{
             $('#conpass').addClass('ss-border');
             $('.con-pass-error').text('');
             $('.con-pass-error').text('Password and Confirm Password not match');
            conpassok=false;
        }

      
    });
     
  function empty(inpname,label,empclass){
      if(inpname == ''){
                 $('.'+empclass).text(label+' must not be empty');
          allisok=false;
            }else{
                allisok=true;
            }

    }
   
   