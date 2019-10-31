var champfirstname=document.getElementById('first-name');
var champlastname=document.getElementById('last-name');
var champadress=document.getElementById('text-adress');
var champemail=document.getElementById('e-mail');
var champpassword=document.getElementById('pass-word');
var champtextarea=document.getElementById('textarea');
var btn=document.getElementById('button1');



function globale(){
 controle()
if  (validationpwd()==true)
{
    checkEmail()

    
}
}

function controle(){
    
    if((champfirstname.value == "")||(champlastname.value == "")||(champadress.value == "")||(champemail.value == "")||(champpassword.value== "")||(champtextarea.value == "")){
   
  
  
  
   alert('Le champ ne peut pas rester vide !! Veuillez introduire votre formule de calcul');

      }
    
    };

    

   

function validationpwd(){

let reg=/([aA-Z]|[0-9])/g

   if (champpassword.value.length<7){
   alert("erreur psw moins de 8 caractère");
 add.focus();
 return false;
    }
    else
if (champpassword.value.match(reg))
{return true}
else alert("ereeeeeur Digit and Upper Case")
};


function myFunction() {
 document.getElementById("myform").reset();
};



function checkEmail() {

  var email = document.getElementById('champemail');
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!filter.test(email.value)) {
  alert('Please provide a valid email address');
  email.focus;
  return false;
};
}