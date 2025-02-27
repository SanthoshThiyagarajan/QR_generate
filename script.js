document.addEventListener("DOMContentLoaded", () => {
    const qrInput = document.getElementById("qr-text");
    const generateBtn = document.getElementById("generate-btn");
    const qrResult = document.getElementById("qr-result");
    const eyes = document.querySelectorAll(".eye");
    
    for (let i = 0; i < 100; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        document.querySelector(".background").appendChild(star);
    }
    
    generateBtn.addEventListener("click", () => {
        const qrText = qrInput.value.trim();
        if (qrText !== "") {
            const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText)}`;
            qrResult.innerHTML = `<img src="${qrCodeUrl}" alt="QR Code">`;
        } else {
            alert("Please enter text or a URL to generate a QR code.");
        }
    });
    
    document.addEventListener("mousemove", (event) => {
        const { clientX, clientY } = event;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const dx = (clientX - centerX) / 50;
        const dy = (clientY - centerY) / 50;

        eyes.forEach(eye => {
            eye.style.transform = `translate(${dx}px, ${dy}px)`;
        });
    });
});