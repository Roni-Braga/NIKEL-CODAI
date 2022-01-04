const myModal = new bootstrap.Modal("#transaction-modal")
let logged = sessionStorage.getItem("logged")
const session = localStorage.getItem("session")
let data = {
    transaction:[]
}

document.getElementById("button-logout").addEventListener("click", logout)
// Adicionar Lançamento

   



document.getElementById("trans-form").addEventListener("submit",function(e){
    e.preventDefault()
    const value = parseFloat(document.getElementById("value-input").value)
    const description = document.getElementById("description-input").value
    const date = document.getElementById("date-input").value
    const type = document.querySelector('input[name="type-input"]:checked').value

    data.transaction.unshift({
        value:value,
        type:type,
        description:description,
        date:date
    })
    saveData(data)
    e.target.reset()
    myModal.hide()
    getTransaction()
    alert("Lançamento realizado com Sucesso !!!!")

})
checkLogged()

function checkLogged(){
    if(session){
        sessionStorage.setItem("logged",session)
        logged = session
    }
    if(!logged){
       
        window.location.href="index.html"
        return

    }
    
const dataUser = localStorage.getItem(logged)
if(dataUser){
    data = JSON.parse(dataUser)
}

getTransaction()
}

function getTransaction(){
    const transaction = data.transaction
    let transactionHtml = ``

    if(transaction.length){
        transaction.forEach((item) =>{
            let type = "Entrada"

            if(item.type ==="2"){
                type = "Saída"
            }

            transactionHtml +=`
                <tr>
                <th scope="row">${item.date}</th>
                <td>${item.value.toFixed(2)}</td>
                <td>${type}</td>
                <td>${item.description}</td>
            </tr>
            `
        })

    }
    document.getElementById("transaction-list").innerHTML = transactionHtml
}


function logout(){
    sessionStorage.removeItem("logged")
    localStorage.removeItem("session")

    window.location.href="index.html"
}

   
function saveData(data){
    localStorage.setItem(data.login,JSON.stringify(data))
}
