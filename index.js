function getUser(userEmail,getSpinner){
    let url="https://script.google.com/macros/s/AKfycbyA5Sd7CbX4p5fZAOMM-QX8TCjtYgK6RxaI31f7XYMC17ToAQq9Q-mcDaYoJsSsATrY/exec?email="+userEmail;
    fetch(url).then(res=> res.json()).then(res =>{
        if(res[0].status==true){
            document.getElementById("getDetails").style.display="none";
            getSpinner.display="none";
            var seconds = 3;  
            $("#dvCountDown").show();  
            $("#lblCount").html(seconds);  
            setInterval(function () {  
                seconds--;  
                $("#lblCount").html(seconds);  
                if (seconds == 0) {  
                    $("#dvCountDown").hide();  
                    window.location.href = `/CanvaProSubscriptionCheck/userlogin/index.html?userlogin=true&userName=${res[0].name}&userEmail=${res[0].email}&userTs=${res[0].ts}&userKey=${res[0].key}`
                }  
            }, 800); 
        }else{
            document.getElementById("btnRegistration").style.display="block"
            document.getElementById("getEmail").disabled = false;
            document.getElementById("btnClick").style.display="block"
            getSpinner.display="none";
            alert("User Not Found! Contact Admin")
            if (window.confirm("Are you sure you want to Register your Acount?")) {
                window.location.href = "/CanvaProSubscriptionCheck/registeration/index.html";
            }
        }}
    )
}
function ValidateEmail() {
    var email=$("#getEmail").val().toLowerCase()
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        document.getElementById("getEmail").disabled = true;
        let getbtn=document.getElementById("btnClick").style
        getbtn.display="none";
        document.getElementById("btnRegistration").style.display="none"
        let getSpinner=document.getElementById("spinner").style
        getSpinner.justifyContent="center";
        getSpinner.paddingTop="30px";
        getSpinner.display="block";
        let getResult;
        setTimeout(function() { 
            getUser(email,getSpinner);
        }, 800);
        // init(email);
    } else {
      alert("Invalid email address!");
    }
  }
document.getElementById("getEmail").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        ValidateEmail();
    }
});