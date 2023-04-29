function redirectToProfile(){
    location.href='./profile.html'
}

function redirectToSignUp(){
    if(localStorage.getItem('token')){
        alert('Already Signed in');
        location.href='./profile.html';
    }
}


if(localStorage.getItem('user')){
    const nameElement = document.getElementById('profile-name');
    const emailElement = document.getElementById('profile-email');
    const passELement = document.getElementById('profile-pass');

    var UserFromStorage = JSON.parse(localStorage.getItem('user'));

    nameElement.innerHTML=`
    <div>Full Name : ${UserFromStorage.name}</div>
    `;

    emailElement.innerHTML=`
    <div>Email : ${UserFromStorage.email}</div>
    `;

    passELement.innerHTML=`
    <div>Password : ${UserFromStorage.password}</div>
    `;
}


document.getElementById('logout').addEventListener('click',()=>{
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    location.href='./index.html';
})   





