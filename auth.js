// Get references to the DOM elements
const signupForm = document.getElementById('signup-form');
const profilePage = document.getElementById('profile-page');
const logoutButton = document.getElementById('logout-button');

// Signup form submit handler
signupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get the input field values
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Validate the input fields
  if (!firstName || !lastName || !email || !password) {
    alert('All fields are required.');
    return;
  }
  
  // Generate the access token
  const accessToken = generateAccessToken();
  
  // Save the user's details and access token to local storage
  const user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    accessToken: accessToken
  };
  localStorage.setItem('user', JSON.stringify(user));
  
  // Show the success message and redirect to the profile page
  alert('Signup successful.');
  window.location.href = 'profile.html';
});

// Profile page load handler
profilePage.addEventListener('load', function() {
  // Get the user's details from local storage
  const user = JSON.parse(localStorage.getItem('user'));
  
  // If there is no user or access token in local storage, redirect to the signup page
  if (!user || !user.accessToken) {
    window.location.href = '/signup';
    return;
  }
  
  // Display the user's details on the profile page
  const firstNameElement = document.getElementById('first-name');
  const lastNameElement = document.getElementById('last-name');
  const emailElement = document.getElementById('email');
  
  firstNameElement.innerText = user.firstName;
  lastNameElement.innerText = user.lastName;
  emailElement.innerText = user.email;
});

// Logout button click handler
logoutButton.addEventListener('click', function() {
  // Remove the access token and user from local storage
  localStorage.removeItem('user');
  
  // Redirect to the signup page
  window.location.href = '/signup';
});

// Generate a random 16-byte string for the access token
function generateAccessToken() {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('');
}
