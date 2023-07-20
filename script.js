let eyeicon = document.getElementById("eyeicon");

let password = document.getElementById("password");

    eyeicon.onclick = function() {
        if(password.type == "password"){
            password.type = "input";
            eyeicon.src = "./images/visible-eye.png";
        } else {
            password.type = "password";
            eyeicon.src = "./images/eye.png"
        }
    }




