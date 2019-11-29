$(document).ready(function(){
    var nameok = userok = emailok = phoneok = addressok = countryok = genderok = passok = conpassok = allisok=true;
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
           emailok=true;
        }else{
            $('.email-error').text('Invaild Email address');
            emailok=false;
        }

      
    });
     //for phonne
    //017888888
     var phoneregxp=/^[0-9]{7,15}$/;
    $('#Phone').blur(function(){
        if(phoneregxp.test( $('#Phone').val())){
           phoneok=true;
        }else{
            $('.phone-error').text('Invaild Phone number');
            phoneok=false;
        }

      
    });
     //for address
    //017888888
     var addressregxp=/^[a-zA-Z0-9 _#/.,-:]+$/;
    $('#Address').blur(function(){
        if(addressregxp.test( $('#Address').val())){
           addressok=true;
        }else{
            $('.address-error').text('Invaild Address');
            addressok=false;
        }

      
    });
    //for password
    //017888888
    $('#password').blur(function(){
        if($('#password').val().length <=6){
           $('.password-error').text('Password must be at least 6 chracter');
            passok=false;
        }else{
            passok=true;
        }

      
    });
    //for con pass
     $('#conpass').blur(function(){
        if($('#password').val() == $('#conpass').val()){
          conpassok=true;
        }else{
             $('.con-pass-error').text('Password and Confirm Password not match');
            conpassok=false;
        }

      
    });
     
  function empty(inpname,label,empclass){
      if(inpname == ''){
                 $('.'+empclass).text(label+' must not be empty');
          allisok=false;
            }

    }
    $('#regibtn').click(function(e){
        e.preventDefault();
        var name=$('#name').val();
        var Username=$('#Username').val();
        var Email=$('#Email').val();
        var phone=$('#Phone').val();
        var country=$('#country').val();
        var Address=$('#Address').val();
        var gender=$('#gender').val();
        var password=$('#password').val();
        var conpass=$('#conpass').val();

        empty(name,'Full Name','name-error');
        empty(Username,'User Name','username-error');
        empty(Email,'Email','email-error');
        empty(phone,'phone','phone-error');
        empty(country,'country','country-error');
        empty(Address,'Address','address-error');
        empty(gender,'gender','gender-error');
        empty(password,'password','password-error');
        empty(conpass,'confirm password','con-pass-error');

    });
    
    
});