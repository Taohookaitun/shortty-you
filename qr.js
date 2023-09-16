function generateQRCode() {
    var qrText = document.getElementById("qr-text").value;
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: qrText,
        width: 128,
        height: 128
    });
}
