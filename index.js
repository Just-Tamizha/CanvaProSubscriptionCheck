
// document. addEventListener( "DOMContentLoaded",init());
function init(getMail){
    const sheetID ='14y4OxGf5wXix4E_qCOGrwBMpEluT35FbmITZtTaFDx0';
    const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
    const sheetName = 'users';
    const query = encodeURIComponent(`Select B,D,E,F,I where H like "${getMail}"`);
    const url = `${base}&sheet=${sheetName}&tq=${query}`;
    const data = [];
    fetch(url)
    .then(res =>res.text())
    .then(rep=>{
        const jsonData =JSON.parse(rep.substring(47).slice(0,-2));
        const rows=jsonData.table.rows
        console.log(rows)
        if(Object.keys(rows).length>0){
            document.getElementById("getDetails").style.display="none";
            document.getElementById("name").innerHTML=rows[0].c[0].v
            document.getElementById("date").innerHTML=rows[0].c[1].f
            if(rows[0].c[2].v<=0){
                document.getElementById("days").innerHTML=0
            }else{
                document.getElementById("days").innerHTML=rows[0].c[2].v
            }
            if(rows[0].c[3].v =='Active'){
                document.getElementById("status").innerHTML=`<button type="button" class="btn btn-success btn-sm">${rows[0].c[3].v}</button>`
            }else{
                document.getElementById("status").innerHTML=`<button type="button" class="btn btn-danger btn-sm">${rows[0].c[3].v}</button>`
            }
            // document.getElementById("goto").innerHTML=""
            if(rows[0].c[3].v =='Active'){
                document.getElementById("goto").innerHTML=`<a class="btn btn-success btn-sm" href="${rows[0].c[4].v}" role="button">Go to Canva</a>`
            }else{
                alert("Your Canva Pro Subscription is Expired! Go to Purchase on Etsy")
                document.getElementById("goto").innerHTML=`<a class="btn btn-success btn-sm" href="https://www.etsy.com/in-en/listing/1311639192/canva-pro-canva-pro-for-low-price?ref=listings_manager_grid" role="button">Go to Etsy</a>`
            }
            document.getElementById("userDetails").className="d-flex justify-content-center d-block"
            
        }else{
            alert("User Not Found! Contact Admin")
        }
        // return js0.table.rows[0].c;
    })
}
function ValidateEmail() {
    var email=$("#getEmail").val().toLowerCase()
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        init(email);
    } else {
      alert("Invalid email address!");
    }
  }
