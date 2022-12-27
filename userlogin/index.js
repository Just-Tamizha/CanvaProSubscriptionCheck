const getLoginAcess = new window.URLSearchParams(window.location.search)
console.log(getLoginAcess.get('userlogin'))
if(getLoginAcess.get('userlogin')=="true"){
    document.getElementById("userDetails").style.display="block";
    document.getElementById("name").innerHTML=getLoginAcess.get('userName')
    var getTsResult=tsToChangeDate(getLoginAcess.get('userTs'))
    let generateLink=`https://www.canva.com/brand/join?token=${getLoginAcess.get('userKey')}&referrer=team-invite`;
    let checkoutLink=`./paypalcheckout/paypalcheckout.html?userlogin=true&userName=${getLoginAcess.get('userName')}&userEmail=${getLoginAcess.get('userEmail')}&userTs=${getLoginAcess.get('userTs')}&userKey=${getLoginAcess.get('userKey')}`

    if(getTsResult.remainingDay>0){
        document.getElementById("status").innerHTML=`<button type="button" class="btn btn-success btn-sm">Active</button>`
        document.getElementById("goto").innerHTML=`<button type="submit" class="btn btn-success btn-md" onclick="document.location.href='${generateLink}'">Go To Canva Pro 😍</button>`
    }else{
        document.getElementById("status").innerHTML=`<button type="button" class="btn btn-danger btn-sm">Expired</button>`
        document.getElementById("goto").innerHTML=`<button type="submit" class="btn btn-danger btn-md" onclick="document.location.href='${checkoutLink}'">Go To Purchase</button>`
    }
    document.getElementById("date").innerHTML=getTsResult.purchasedDate
    document.getElementById("days").innerHTML=getTsResult.remainingDay

}
else{
    document.getElementById("userDetails").style.display="none";
    document.getElementById("goto").style.display="none"
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
function tsToChangeDate(getTs){
    if(getTs != "null"){
        const todayDate = new Date().getTime();
        let purchasedDate=new Date(parseInt(getTs)).toUTCString();
        const diffTime = parseInt(getTs)+2592000000-todayDate;
        let remainingDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if(remainingDay<0){
            remainingDay=0
        }
        return {purchasedDate,remainingDay};
    }
    else{
        let purchasedDate='-'
        let remainingDay=0
        return {purchasedDate,remainingDay}
    }
}