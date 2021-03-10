// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function init(){
  window.addEventListener('load', init);
  document.getElementById("typeSelection").addEventListener("change", showBus); 
  document.getElementById("phoneContact").addEventListener("click", showPhone); 
  document.getElementById("specialReq").addEventListener("click", showSpec);
  document.getElementById("submit").addEventListener("click", showThanks);
  function showPhone(){
    var phoneCheck = document.getElementById("phoneContact");
    var phoneIn = document.getElementById("phoneSection")
    if (phoneCheck.checked == true){
      phoneIn.style.display = "block";
    } else {
      phoneIn.style.display = "none";
    }
  }
  function showBus(){
    var busCheck = document.getElementById("contactType").value;
    var busIn = document.getElementById("businessName")
    if (busCheck == "business"){
      busIn.style.display = "block";
    } 
    if (busCheck == "personal") {
      busIn.style.display = "none";
    }
    if (busCheck == " ") {
      busIn.style.display = "none";
    }
  }
  function showSpec(){
    var specCheck = document.getElementById("specialReq");
    var specIn = document.getElementById("requestSection")
    if (specCheck.checked == true){
      specIn.style.display = "block";
    } else {
      specIn.style.display = "none";
    }
  }
  function showThanks(){
    var formDisp = document.getElementById("signupForm");
    var thanksDisp = document.getElementById("thanksPage");
    var subCheck = document.getElementById("acceptTC");
    if (subCheck.checked == true){  
      thanksDisp.style.display = "block";
      formDisp.style.display = "none";
    }
    else {
      alert("You must agree to be contacted or we won't be able to contact you."); 
    }
  }
}
