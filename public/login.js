const userContainer = document.querySelector('#user-info')
const loginForm = document.querySelector('#login-form')
const registerForm = document.querySelector('#register-form')



function createUserCard(data) {
    console.log("this function recieves data",data)
    
}
//     const loginCard = document.createElement('div')
//     loginCard.classList.add('login-card')

//     loginCard.innerHTML = `
//     <p class="words-title">Word: ${word.name}</p>
//         <div class="btns-container">
//             <p class="words-title">Language level: ${word.languagelevel}</p>
//             <p class="words-title">Alphabet: ${alphabettext}</p>
//             <p class="words-title">Definition: ${word.description}</p>
//             
//         </div>
//     `
//     loginContainer.appendChild(loginCard);
// }


////login/register
const login = body => axios.post('/api/login', body).then( res => {
  localStorage.setItem('user', res.data.user_id);
  //  const data = JSON.stringify (res.data)
  //   localStorage.setItem('user', data);
    
    alert("login successfully")
    window.location.href = '/learn';
    
  }).catch(err => {
    console.log(err)
    alert('Uh oh. Your request did not work.')
  })
  
const register = body => axios.post('/api/register', body).then(res => {
  localStorage.setItem('user', res.data.user_id);
    // const data = JSON.stringify (res.data)
    // localStorage.setItem('user', data);

    
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

    // axios.get('http://localhost:4004/login', { params: { uname: username, password: password} }).then(res => {
    //     if (!res.data || res.data.length == 0) {
    //         usernameEmpty();
    //         passwordEmpty();
    //     }

    //     res.data.forEach(Word => {
    //         createWordsCard(Word, alphabettext);
    //     })
    // }
    // )
}

function usernameEmpty() {
    alert("username not found");
}
function passwordEmpty() {
    alert("Password not found");
}


////////user////


async function showUsersAuth(event) {
    event.preventDefault();

    let firstName = document.getElementById("register-firstName");
    let lastName = document.getElementById("register-lastName");
    let username = document.getElementById("register-username");
    let email = document.getElementById("register-email");
    let password = document.getElementById("register-password");
    
    // if (password.value !== password2.value) {
    //     alert("Your passwords need to match.")
    //     return
    //   }
    
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
      
    // axios.get('http://localhost:4004/register', { params: { id: userID, fname: firstname,lname: lastname, uname: username, email: email, password: password} }).then(res => {
    //     if (!res.data || res.data.length == 0) {
    //         userEmpty();
    //     }

    //     res.data.forEach(Word => {
    //         createWordsCard(Word, alphabettext);
    //     })
    // }
    // )
}

function userEmpty() {
    alert("User not found");
}


loginForm.addEventListener('submit', showLogin)
registerForm.addEventListener('submit', showUsersAuth)