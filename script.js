const signUp = document.getElementById('signup');
const message = document.getElementById('message');


function redirectToProfile(){
    if(localStorage.getItem('token')){
        location.href='./profile.html';
    }
    else{
        alert('Please Sign Up')
        location.href='./index.html';
    }

}

function redirectToSignUp(){
    location.href='./index.html';
}


signUp.addEventListener('click',()=>{
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const conPass = document.getElementById('confirm-pass').value;

    if(name=='' || email=='' || pass=='' || conPass==''){
        message.innerHTML=`<div style='color:#FF4F4F;'>Error : All the fields are mandatory</div>`;
        return;
    }

    if(pass!=conPass){
        message.innerHTML=`<div style='color:#FF4F4F;'>Error : Passwords should be Same</div>`;
        return;
    }

    let user = {
        name:name,
        email:email,
        password:pass
    }

    localStorage.setItem("user",JSON.stringify(user));

    let token = '';
    for (let i = 0; i < 16; i++) {
      token += String.fromCharCode(Math.floor(Math.random() * 256));
    }
    
    // Store the token in local storage
    localStorage.setItem('token', btoa(token));

    message.innerHTML=`<div style='color:#7ECD71;'>Successfully Signed Up!</div>`;

    location.href='./profile.html';
})




