document.addEventListener("DOMContentLoaded", () => {

    
    const scanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbos: 250 }
    )
    scanner.render(success)
    
    function success(decodeText, decodeResult) {
        console.log(decodeText)
        console.log(decodeResult)
        alert(">" + decodeText +":"+ decodeResult)
    }
})
