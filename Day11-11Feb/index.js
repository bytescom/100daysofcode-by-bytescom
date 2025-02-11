const saveQrCode = document.querySelector(".qr-box");
const qrInput = document.querySelector(".input");
const qrGenerateBtn = document.querySelector(".qr-generate-btn");
const saveErrorMsg = document.querySelector(".error-msg");
const qrDownloadBtn = document.querySelector(".download-btn");

qrGenerateBtn.addEventListener("click", () => {
    validityInput();
})

qrDownloadBtn.addEventListener("click", ()=>{
    downloadQrcode();
})

function validityInput() {
    if (qrInput.value.trim().length > 0) {
        qrCodeGenerate();
        qrDownloadBtn.disabled = false;

    } else {
        saveQrCode.innerHTML = "";
        saveErrorMsg.textContent = "Enter the text and URL link to generate QR-Code"
        qrDownloadBtn.disabled = true;
    }
}

function qrCodeGenerate() {
    saveQrCode.innerHTML = "";
    new QRCode(saveQrCode, {
        text: qrInput.value,
        height: 330,
        width: 330,
        colorLight: "#fff",
        colorDark: "#000",
    });
    qrInput.value ="";
    // saveErrorMsg.textContent ="";
}

function downloadQrcode(){
    const canvas =saveQrCode.querySelector("canvas");
    if(!canvas){
        saveErrorMsg.textContent="No QR code available to download.";
        return;
    }

    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    
    link.href = url;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}



