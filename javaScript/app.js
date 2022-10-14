// Random Coupon Code Generator

var couponCode_span = document.getElementById("couponCode")
var copyButton = document.getElementById("copyButton")

function generateCouponCode(len = 5) {
    let alphanumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

    let couponCode = new Array()

    for (let i = 0; i < len; i++) {
        let index = Math.floor(Math.random() * alphanumeric.length)
        couponCode.push(alphanumeric.charAt(index))
    }

    couponCode = couponCode.join("")
    return couponCode
    
}
couponCode_span.innerHTML = generateCouponCode()

// Copy Coupon Code to Clipboard


copyButton.onclick = function() {
    navigator.clipboard.writeText(couponCode_span.innerHTML)
    copyButton.innerHTML = "COPIED!"
    copyButton.style.background = "#130047"
    copyButton.style.color = "#fff"
    setTimeout(function() {
        copyButton.innerHTML = "COPY"
        copyButton.style.color = "#000"
        copyButton.style.background = "#fff"
}, 3000)
}