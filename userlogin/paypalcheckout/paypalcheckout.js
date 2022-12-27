const getLoginAcess = new window.URLSearchParams(window.location.search)
if(getLoginAcess.get('userlogin') == "true"){
    document.getElementById("emailShow").innerHTML=`<h6>Make sure Purchasing for this Email ID<br><br>⏩ ${getLoginAcess.get('userEmail')} ⏪</h6>`
}else{
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