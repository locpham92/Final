balance();
function balance() {
    let balance = 923214330;
    console.log(balance);
    document.getElementById("total-value").innerHTML = formatCurrency(balance, "đ");

}
function formatCurrency(value, currencySymbol) {
    return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "  " + currencySymbol;
}

function hideBalance() {
    console.log(1);
    let eyeslash = document.querySelector(".overview .total-balance .total-value .eye");
    eyeslash.style.display = block;
    let eye = document.querySelector(".eye");
    eye.style.display = none;
    document.getElementById('total-value').innerHTML = "***********";
}