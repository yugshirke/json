
const changeMod=() => {
    let myboy = document.body;     
    myboy.classList.toggle('myDark');  
}


function onloadPage(){
    document.getElementById('coupon').style.visibility='visible';
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility='hidden';
}