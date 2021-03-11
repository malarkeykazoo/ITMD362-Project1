// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function init(){
  //Add listeners for different events
  window.addEventListener('load', init);
  document.getElementById("typeSelection").addEventListener("change", showBus); 
  document.getElementById("phoneContact").addEventListener("click", showPhone); 
  document.getElementById("specialReq").addEventListener("click", showSpec);
  document.getElementById("newSubmit").addEventListener("click", newSub);
  document.getElementById("signupForm").addEventListener("submit", showThanks);
  //Shows the phone number entry and sets it required if user requests a call back, hides it otherwise
  function showPhone(){
    var phoneCheck = document.getElementById("phoneContact");
    var phoneIn = document.getElementById("phoneSection")
    if (phoneCheck.checked == true){
      phoneIn.style.display = "block";
      document.getElementById("phoneNum").required = true;
    } else {
      phoneIn.style.display = "none";
      document.getElementById("phoneNum").required = false;
    }
  }

   //Shows the business name entry and sets it required if user is filling out for a business, hides it otherwise
  function showBus(){
    var busCheck = document.getElementById("contactType").value;
    var busIn = document.getElementById("businessName")
    if (busCheck == "business"){
      busIn.style.display = "block";
      document.getElementById("cName").required = true;
    } 
    if (busCheck == "personal") {
      busIn.style.display = "none";
      document.getElementById("cName").required = false;
    }
    if (busCheck == " ") {
      busIn.style.display = "none";
      document.getElementById("cName").required = false;
    }
  }

  //Shows special request comment box if use is making a request, hides it if they just want the alerts
  function showSpec(){
    var specCheck = document.getElementById("specialReq");
    var specIn = document.getElementById("requestSection")
    if (specCheck.checked == true){
      specIn.style.display = "block";
      document.getElementById("details").required = true;
    } else {
      specIn.style.display = "none";
      document.getElementById("details").required = false;
    }
  }

  //Hides the form and shows the thank you after user submits. Also does sanity check on Terms acceptance.
  function showThanks(){
    event.preventDefault();
    var formDisp = document.getElementById("signupForm");
    var thanksDisp = document.getElementById("thanksPage");
    var subCheck = document.getElementById("acceptTC");
    var headDisp = document.getElementById("formIntro")
    if (subCheck.checked == true){  
      thanksDisp.style.display = "block";
      formDisp.style.display = "none";
      headDisp.style.display = "none";
    }
    else {
      alert("You must agree to be contacted or we won't be able to contact you."); 
    }
  }

  //Clears the form and show it again (hiding the thank you) for multiple submissions.
  function newSub(){
    var formDisp = document.getElementById("signupForm");
    var thanksDisp = document.getElementById("thanksPage");
    var headDisp = document.getElementById("formIntro")
    document.getElementById("signupForm").reset();
    thanksDisp.style.display = "none";
    formDisp.style.display = "block";
    headDisp.style.display = "block";
  }
}
