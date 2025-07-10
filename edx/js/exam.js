let user = document.getElementById("user-field")
let password = document.getElementById("password-field")
//question 1
user.required = false
password.required = false

function createAgeInput() {
    let ageDiv = document.createElement("div")
    ageDiv.classList.add("form-group")
    let ageInput = document.createElement("input")
    ageInput.id = "age-field"
    ageInput.placeholder ="Age"
    ageInput.classList.add("form-control")
    
     ageDiv.appendChild(ageInput)
    let userdiv = document.getElementsByClassName("form-group")
    userdiv.item(0).after(ageDiv)
    
    
  }
  function isUserValue(){
    let user = document.getElementById("user-field");
    if(user.value == false){
        let userSpan = document.createElement("div")
        userSpan.classList.add("from-group")
        userSpan.style.color = "red"
        userSpan.textContent = "veuillez remplir ce champs"
        user.after(userSpan);
        setTimeout(() => {
           userSpan.textContent = ""
        }, 1000);
    }
} 
function isAgeValue(){
    let age = document.getElementById("age-field");
    if(!age.value){
        let ageSpan = document.createElement("div")
        ageSpan.classList.add("from-group")
        ageSpan.style.color = "red"
        ageSpan.textContent = "veuillez remplir ce champs"
        age.after(ageSpan);
        setTimeout(() => {
            ageSpan.textContent = ""
         }, 1000);
    }
}    
function isPasswordValue(){
    let password = document.getElementById("password-field");
    if(!password.value){
        let passwordSpan = document.createElement("div")
        passwordSpan.classList.add("from-group")
        passwordSpan.style.color = "red"
        passwordSpan.textContent = "veuillez remplir ce champs"
        password.after(passwordSpan);
        setTimeout(() => {
            passwordSpan.textContent = ""
         }, 1000);
    }
} 


  createAgeInput()
  ageInput = document.getElementById("age-field")
  let button =  document.getElementsByClassName("btn")
  button.item(0).addEventListener("click",function(e){
    console.log(ageInput.value)
    console.log(user.value)
    console.log(password.value)
    if(ageInput.value && user.value && password.value){
        
        if(ageInput.value < 20){
            alert("Vous n' êtes pas authoriser a continuer")
            window.location.href = "main.html"
        }
    }
    isUserValue()
    isAgeValue()
    isPasswordValue()
    
  })