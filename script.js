gsap.from('.heading',{ duration: 1, y:'-100%', ease: 'bounce'});
    gsap.fromTo('.password-label',{ duration: 1,opacity: 0 , scale: 0},{duration:1,opacity:1,scale:1,delay:.4});
    gsap.fromTo('.length',{ duration: 1,opacity: 0 , scale: 0},{duration:1,opacity:1,scale:1,delay:.6});
    gsap.fromTo('.input-length',{ duration: 1,opacity: 0 , scale: 0},{duration:1,opacity:1,scale:1,delay:.6});
    gsap.fromTo('.settings',{ duration: 1,opacity: 0 , scale: 0},{duration:1,opacity:1,scale:1,delay:.8});
    gsap.fromTo('.setting-container',{ duration: 1,opacity: 0 , scale: 0},{duration:1,opacity:1,scale:1,delay:1});
    gsap.fromTo('.generate-btn',{ duration: 1,opacity: 0 , scale: 0},{duration:1,opacity:1,scale:1,delay:1.2});
function generate() {
    let passwordContent = "";
    let pwdLength = document.getElementById('inputLength').value;
    if (document.getElementById('upperCase').checked) {
        passwordContent += "QWERTYUIOPASDFGHJKLZXCVBNM";
    }
    if (document.getElementById('lowerCase').checked) {
        passwordContent += "qwertyuiopasdfghjklzxcvbnm";
    }
    if (document.getElementById('numbers').checked) {
        passwordContent += "1234567890";
    }
    if (document.getElementById('symbols').checked) {
        passwordContent += "!@#$%^&*()_+-={}[];<>:";
    }
    let passwordContentLength = passwordContent.length;
    let password = "";
    for (let i = 0; i < pwdLength; i++) {
        let randomIndex = Math.floor(Math.random() * passwordContentLength);
        password += passwordContent[randomIndex];
    }
    document.getElementById('generatedPassword').innerHTML = password;
    document.getElementById('generatedPassword').style.color = "green";
    document.getElementById('generatedPassword').style.fontSize = "20px";
    document.getElementById('generatedPassword').style.fontWeight = "700";
    document.getElementById('generatedPassword').style.opacity = "1";
    document.getElementById('generatedPassword').style.fontFamily = "cursive";
    
}