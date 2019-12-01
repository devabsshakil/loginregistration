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
     
if(nameisok == true && userok == true && emailok == true && phoneok == true && addressok == true && countryok == true && genderok == true && passok == true && conpassok == true && allisok == true){

    $.ajax({
        url:'backend/regidata.php',
        type:'post',
        data:{
            key:'reg',
            fullname:name,
            username:Username,
            email:Email,
            phone:phone,
            address:Address,
            country:country,
            gender:gender,
            password:password
            
        },
        success:function(data){
            alert(data);
        }
    });
    
    
    
   console.log('Everything is Fair&lovely');
}else{
     console.log('Everything is Uganda');
}

    });
