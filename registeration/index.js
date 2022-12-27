function registerUser(email,name){
    let url="https://script.google.com/macros/s/AKfycbx6yRgJGC0PQpQLfKi7nq0G0qg9PpBsXpnZtOr7JJyxRd5ao7zXRSV14tJib7zgsful/exec";
    fetch(url,{method:'POST',cache:'no-cache',redirect:'follow',mode:'no-cors',credentials:'omit',headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            name: name,
            email:email,
        })
    })
    return true;
}
function ValidateEmail() {
    let name=$("#getName").val();
    let email=$("#getEmail").val().toLowerCase()
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && name !='') {
        document.getElementById("getName").disabled = true;
        document.getElementById("getEmail").disabled = true;
        let getbtn=document.getElementById("btnClick").style
        getbtn.display="none";
        let getSpinner=document.getElementById("spinner").style
        getSpinner.justifyContent="center";
        getSpinner.paddingTop="30px";
        getSpinner.display="block";
        let getResult;
        setTimeout(function() { 
            getResult=registerUser(email,name)
            if(getResult){
                document.getElementById("getDetails").style.display="none";
                document.getElementById("actCreated").style.display="block";
                getSpinner.display="none";
                var seconds = 2;  
                $("#dvCountDown").show();  
                $("#lblCount").html(seconds);  
                setInterval(function () {  
                    seconds--;  
                    $("#lblCount").html(seconds);  
                    if (seconds == 0) {  
                        $("#dvCountDown").hide();  
                        window.location.href = "../index.html";  
                    }  
                }, 1000); 
            }
        }, 1000);
        
    } else {
      alert("Invalid Name or Email address!");
    }
  }