function init(){
  window.addEventListener('load', init);
  document.getElementById("typeSelection").addEventListener("change", showBus); 
  document.getElementById("phoneContact").addEventListener("click", showPhone); 
  document.getElementById("specialReq").addEventListener("click", showSpec);
  document.getElementById("acceptTC").addEventListener("click", showSubmit);
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
  function showSubmit(){
    var subCheck = document.getElementById("acceptTC");
    var subIn = document.getElementById("submitContain")
    if (subCheck.checked == true){
      subIn.style.display = "block";
    } else {
      subIn.style.display = "none";
    }
  }
}