const getLoginAcess = new window.URLSearchParams(window.location.search)
if (getLoginAcess.get('userlogin') == null) {
    var seconds = 5;
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
if(getLoginAcess.get('userlogin')=="true"){
    document.getElementById("name").innerHTML=getLoginAcess.get('userName')
    var getTsResult=tsToChangeDate(parseInt(getLoginAcess.get('userTs')))
    let generateLink=`https://www.canva.com/brand/join?token=${getLoginAcess.get('userKey')}&referrer=team-invite`;
    let checkoutLink=`/userlogin/paypalcheckout/index.html?userlogin=true&userName=${getLoginAcess.get('userName')}&userEmail=${getLoginAcess.get('userEmail')}&userTs=${getLoginAcess.get('userTs')}&userKey=${getLoginAcess.get('userKey')}`

    if(getTsResult.remainingDay<0){
        document.getElementById("status").innerHTML=`<button type="button" class="btn btn-success btn-sm">Active</button>`
        document.getElementById("goto").innerHTML=`<button type="submit" class="btn btn-success btn-md" onclick="document.location.href='${generateLink}'">Go To Canva Pro 😍</button>`
    }else{
        document.getElementById("status").innerHTML=`<button type="button" class="btn btn-danger btn-sm">Expired</button>`
        document.getElementById("goto").innerHTML=`<button type="submit" class="btn btn-danger btn-md" onclick="document.location.href='${checkoutLink}'">Go To Purchase</button>`
    }
    document.getElementById("date").innerHTML=getTsResult.purchasedDate
    document.getElementById("days").innerHTML=getTsResult.remainingDay

}
function tsToChangeDate(getTs){
    const todayDate = Date.now();
    const olddate = new Date(getTs);
    const purchasedDate=olddate.getDate() + '-' +  olddate.getMonth() + '-' + olddate.getFullYear();
    const diffTime = olddate - todayDate;
    let remainingDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if(remainingDay<0){
        remainingDay=0
    }
    return {purchasedDate,remainingDay};
}
function redirect(getLink){
    alert(getLink)
}