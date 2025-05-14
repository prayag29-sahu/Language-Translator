function sendOTP() {
    const email = document.getElementById('email');
    const otpver = document.getElementsByClassName('otp-btn')[0];

    let otp_val = Math.floor(Math.random()*10000);

    let emailbody = `<h2>Your OTP is </h2>${otp_val}`;
    Email.send({
        Host : "elasticemail.com/",
        Username : "sahuprayag145@gmail.com",
        Password : "35C44C70CB1BD0FAF4571C46BC1438F462E9",
        To : email.value,
        From : "sahuprayag145@gmail.com",
        Subject : "Email OTP",
        Body : emailbody,
    }).then(
        message => {
            if(message === 'OK'){
                alert("OTP sent to your email "+ email.value);

                otpverify.style.display = "flex";
                const otp_inp = document.getElementById('otp_inp');
                const otp_btn = document.getElementById('otp_btn');

                otp_btn.addEventListener('click', () => {
                    if(otp_inp.value == otp_val){
                        alert("Email Address Verified...");
                    } else {
                        alert("Invalid OTP");
                    }
                })
            }
        } 
    );
    
}

// function SendEmail(){
//     SendEmail.send({
//         Host:"smtp.elasticemail.com",
//     })
// }