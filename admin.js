function getUser(userEmail,getSpinner,password,accessKey,getbtn){
    let url=`https://script.google.com/macros/s/AKfycbzZo3lhi95LQwr4koiuvVvEXHHGU1Thbc9nKAmnDiagmqAb9TMFsFJ650umM3XgJtxU7A/exec?email=${userEmail}&password=${password}&key=${accessKey}`;
    console.log(url)
    fetch(url).then(res=> res.json()).then(res =>{
        if(res[0].status==true){
            getSpinner.display="none";
            getbtn.display="block"
            document.getElementById("actCreated").style.display="block";

            var seconds = 5;  
            setInterval(function () {  
                seconds--;  
                if (seconds == 0) { 
                    document.getElementById("actCreated").style.display="none";
                }  
            }, 1000); 
        }else{
            alert("Invalid Data: Key is not updated")
            getSpinner.display="none";
            getbtn.display="block"
            document.getElementById("getEmail").disabled = false;
            document.getElementById("getPassword").disabled = false;
        }}
    )
}
function ValidateEmail() {
    let email=$("#getEmail").val().toLowerCase()
    let password=$("#getPassword").val()
    let accessKey=$("#getAccessKey").val()
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && password !='' && accessKey !='') {
        document.getElementById("getEmail").disabled = true;
        document.getElementById("getPassword").disabled = true;
        let getbtn=document.getElementById("btnClick").style
        getbtn.display="none";
        let getSpinner=document.getElementById("spinner").style
        getSpinner.justifyContent="center";
        getSpinner.paddingTop="30px";
        getSpinner.display="block";
        let getResult;
        setTimeout(function() { 
            getUser(email,getSpinner,password,accessKey,getbtn);
        }, 1000);
        // init(email);
    } else {
      alert("Enter your correct Details!");
    }
  }
// document.getElementById("getEmail").addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         ValidateEmail();
//     }
// });