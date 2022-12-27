const getLoginAcess = new window.URLSearchParams(window.location.search)
if (getLoginAcess.get('userlogin') == "true") {
    document.getElementById("emailShow").innerHTML=`<h6>Make sure Purchasing for this Email ID<br><br>⏩ ${getLoginAcess.get('userEmail')} ⏪</h6>`
}
else{
    document.getElementById("smart-button-container").style.display="none"
    var seconds = 2;
    $("#dvCountDown").show();
    $("#lblCount").html(seconds);
    setInterval(function () {
        seconds--;
        $("#lblCount").html(seconds);
        if (seconds == 0) {
            $("#dvCountDown").hide();
            window.location.href = "../../index.html";
        }
    }, 1000);
}
function afterPurchase(){
    const todayDate = new Date().getTime();
    console.log(typeof orderData)
    //let url=`https://script.google.com/macros/s/AKfycbyjuNl7rY_lCouTIMT393wXsGTVJ_yUojDORCSZMfbn2GqVjaSQI-mmXEHyfdvAiYC6/exec?email=${getLoginAcess.get('userEmail')}&purchaseTs=${todayDate}`;
   // fetch(url)
    // .then(res=> res.json())
    // .then(res =>{
    //     if(res[0].status==true){
    //         document.getElementById("getDetails").style.display="none";
    //         getSpinner.display="none";
    //         var seconds = 3;  
    //         $("#dvCountDown").show();  
    //         $("#lblCount").html(seconds);  
    //         setInterval(function () {  
    //             seconds--;  
    //             $("#lblCount").html(seconds);  
    //             if (seconds == 0) {  
    //                 $("#dvCountDown").hide();  
    //                 //window.location.href = `/CanvaProSubscriptionCheck/userlogin/index.html?userlogin=true&userName=${res[0].name}&userEmail=${res[0].email}&userTs=${res[0].ts}&userKey=${res[0].key}`
    //             }  
    //         }, 800); 
    //     }else{
    //         document.getElementById("btnRegistration").style.display="block"
    //         document.getElementById("getEmail").disabled = false;
    //         document.getElementById("btnClick").style.display="block"
    //         getSpinner.display="none";
    //         alert("User Not Found! Contact Admin")
    //         if (window.confirm("Are you sure you want to Register your Acount?")) {
    //             window.location.href = "/CanvaProSubscriptionCheck/Registeration/index.html";
    //         }
    //     }}
    // )
}