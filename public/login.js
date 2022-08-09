const userContainer = document.querySelector('#user-info')
const loginForm = document.querySelector('#login-form')
const registerForm = document.querySelector('#register-form')



function createUserCard(data) {
    console.log("this function recieves data",data)   
}

////login/register
const login = body => axios.post('/api/login', body).then( res => {
  localStorage.setItem('user', res.data.user_id);
    
    alert("login successfully")
    window.location.href = '/learn';
    
  }).catch(err => {
    console.log(err)
    alert('Uh oh. Your request did not work.')
  })
  
const register = body => axios.post('/api/register', body).then(res => {
  localStorage.setItem('user', res.data.user_id);
    
    alert("Register successfully")
    window.location.href = '/learn'
  }).catch(err => {
    console.log(err)
    alert('Uh oh. Your request did not work.')
  })


///login/////
function showLogin(event) {
    event.preventDefault();

    let username = document.getElementById("login-username");
    let password = document.getElementById("login-password");

    let bodyObj = {
        username: username.value,
        password: password.value
    }

    login(bodyObj)

    username.value = ''
    password.value = ''
}

function usernameEmpty() {
    alert("username not found");
}
function passwordEmpty() {
    alert("Password not found");
}


//user//
async function showUsersAuth(event) {
    event.preventDefault();

    let firstName = document.getElementById("register-firstName");
    let lastName = document.getElementById("register-lastName");
    let username = document.getElementById("register-username");
    let email = document.getElementById("register-email");
    let password = document.getElementById("register-password");
    
      let bodyObj = {
          username: username.value,
          email: email.value,
          first_name: firstName.value,
          last_name: lastName.value,
          password: password.value
      }
    
      await register(bodyObj)
    
      username.value = ''
      email.value = ''
      firstName.value = ''
      lastName.value = ''
      password.value = ''
      
}

function userEmpty() {
    alert("User not found");
}


loginForm.addEventListener('submit', showLogin)
registerForm.addEventListener('submit', showUsersAuth)