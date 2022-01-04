/*document.getElementById("link-conta").addEventListener("click",function (){
   console.log("O usuário clicou no link criar conta.")
})*/
const myModal = new bootstrap.Modal("#register-modal")
let logged = sessionStorage.getItem("logged")
const session = localStorage.getItem("session")

checkLogged()
// logar no sistema
document.getElementById("form-login").addEventListener("submit",function (e){
    e.preventDefault()
     
    const email = document.getElementById("email-input").value
    const password = document.getElementById("password-input").value
    const checkSession = document.getElementById("session-section").checked

   const account = getAccount(email)
   if(!account){
    alert("Conta Não Existe! Verifique seu E-mail e a Senha.")
    return
   }
   if(account){
    if(account.password !== password){
        alert("Verifique seu E-mail e a Senha.")
        return
    }
    saveSession(email,checkSession)
    window.location.href="home.html"
   }
   
})
// criar conta
document.getElementById("create-form").addEventListener("submit",function(e){
    e.preventDefault();

    const email = document.getElementById("email-create-input").value
    const password = document.getElementById("password-create-input").value
   if(email.length < 5){
    alert("Preencha o campo com um e-mail válido")
    return
}
if(password.length < 4){
    alert("Preencha a senha com no minimo 4 digitos")
    return
}
savaAccount({
    login: email,
    password: password,
    transaction: []
})
myModal.hide()
alert("conta criada com Sucesso!!")
    
})
function checkLogged(){
    if(session){
        sessionStorage.setItem("logged",session)
        logged = session
    }
    if(logged){
        saveSession(logged,session)
        window.location.href="home.html"

    }


}
function savaAccount(data){
    localStorage.setItem(data.login, JSON.stringify(data))

}

function saveSession(data,saveSession){
    if(saveSession){
        localStorage.setItem("session",data)
    }
    sessionStorage.setItem("logged",data)

}
function getAccount(key){
    const account = localStorage.getItem(key)
    if(account){
        return JSON.parse(account)
    }
    return ""
}

