let form = document.querySelector("form");
  let signupLS = JSON.parse(localStorage.getItem("signup")) || []

  form.addEventListener("submit",function(event){
     event.preventDefault();
    if(signupLS.length === 0){
      alert("No user till Now");
      return;
    }
    let obj={
      email:form.email.value,
      password:form.password.value
    }

    let flag=false;
    signupLS.forEach(function(ele){
      if(ele.email===obj.email && ele.password===obj.password){
        flag=true;
        localStorage.setItem("signin",JSON.stringify(ele));
        alert("Sign up Sucessfully");
         window.location.href="homePage.html";

      }
    })
    if(flag===false){
      alert("User Doesnot Exist");

    }

  })