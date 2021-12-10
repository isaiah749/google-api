const displaySection = document.querySelector('.data');
let html;

let nameContainer = document.querySelector('#name');
let emailContainer = document.querySelector('#email')

const signOut = document.querySelector('.sign-out');
let signOutMessage = document.querySelector('.signout-message')



function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    let name = profile.getName();
    let email = profile.getEmail();
    let imgUrl = profile.getImageUrl();


    html += `
    <p class="name">Name</p>
    <p id="name">${name}</p>
    <p class="profile-picture">Profile Picture</p>
    <img src="${imgUrl}" width="100" height="100" alt="" class="img" id="image">
    <p class="email">Email</p>
    <p id="email">${email}</p>
    `;

    displaySection.insertAdjacentHTML('afterbegin', html)
  }

  signOut.addEventListener('click', function() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
      console.log('user signed out')
      signOutMessage.textContent = 'User Signed Out..';
      nameContainer.textContent = '';
      emailContainer.textContent = '';
    })
  })