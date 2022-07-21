let form = document.querySelector("form");
let signupLS = JSON.parse(localStorage.getItem("signup")) || []
form.addEventListener("submit",function(event){
    event.preventDefault();
    let obj={
        fistName: form.fistName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        password: form.password.value,
        confPass: form.confPass.value,
    }
    if(obj.email == "" || obj.password == "" || obj.confPass == "" ){
        alert("Field Empty")
        return
    }
    signupLS.push(obj);
    localStorage.setItem("signup",JSON.stringify(signupLS));
    window.location.href="login.html";
})