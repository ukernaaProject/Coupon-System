// Random Coupon Code Generator

var couponCode_span = document.getElementById("couponCode")
var copyButton = document.getElementById("copyButton")

function generateCouponCode(len = 12) {
    let alphanumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

    let couponCode = new Array()

    for (let i = 0; i < len; i++) {
        let index = Math.floor(Math.random() * alphanumeric.length)
        couponCode.push(alphanumeric.charAt(index))
    }

    couponCode = couponCode.join("")
    return couponCode
    
}


couponCode = generateCouponCode();

if (localStorage.getItem("coup") == null) {
    localStorage.setItem("coup", couponCode);
}
else{
    couponCode = localStorage.getItem("coup");
}
couponCode_span.innerText = couponCode;
// Copy Coupon Code to Clipboard


copyButton.onclick = function() {
    navigator.clipboard.writeText(couponCode_span.innerHTML)
    copyButton.innerHTML = "COPIED!"
    copyButton.style.background = "linear-gradient(150deg, #130047, #ED7D8F)"
    copyButton.style.color = "#fff"
    setTimeout(function() {
        copyButton.innerHTML = "COPY"
        copyButton.style.color = "#000"
        copyButton.style.background = "#fff"
}, 3000)
}