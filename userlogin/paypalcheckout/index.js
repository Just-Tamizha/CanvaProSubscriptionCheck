const getLoginAcess = new window.URLSearchParams(window.location.search)
if (getLoginAcess.get('userlogin') == "true") {
    document.getElementById("emailShow").innerHTML=`<h4>Make sure Purchasing for this Email ID<br><br>${getLoginAcess.get('userEmail')}</h4>`
}
else{
    document.getElementById("paypalCheckout").style.display="none"
    var seconds = 5;
    $("#dvCountDown").show();
    $("#lblCount").html(seconds);
    setInterval(function () {
        seconds--;
        $("#lblCount").html(seconds);
        if (seconds == 0) {
            $("#dvCountDown").hide();
            window.location.href = "/index.html";
        }
    }, 1000);
}