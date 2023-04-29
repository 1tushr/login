let fname = document.getElementById("fullname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let btn = document.getElementById("btn");




btn.addEventListener("click", give);


function redirect(){
    window.location.href='profile.html';
}

function give() {
  const values = {
    fullName: fname.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  };

  details.push(values);
  localStorage.setItem('details',JSON.stringify('details'));
  console.log(details);
  redirect();
}
const details = [];



