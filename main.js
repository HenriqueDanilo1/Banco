//test database
let database_user = [ "pobre", "rico", "probre pro max" ]
let database_pass = [ "1234", "onetwothreefour", "Porta01!" ]

//bank name
bn = "BL Bank"

//login system
let validate = (user, pass) => {
    for(i = 0; i < database_user.length; i++){
        if(database_user[i] == user){
            if(database_pass[i] == pass){
                return 1
            } else {
                return -1
            }
        }
    }
    return 0
}

//alert system
function falert(n){
    arlert = document.getElementById("alert")
    if(n == 0){
        n = "Password incorrect!"
    } else{
        n = "User not found"
    }
    arlert.innerHTML=n
    arlert.style.display="block"
    document.getElementById("arrow").style.top="306px"
}

//login ui function
function submit(){
    const user = document.querySelector('#user').value
    const pass = document.querySelector('#pass').value
    if(validate(user, pass) == 1){
        document.location.href="gg.html"
    } else{
        (validate(user, pass) == -1) ? falert(0) /* wrong password*/ : falert(1) // wrong username
    }
}

//pass verifier for internal functions
function passverifier(pass1, pass2) {
    if(pass1 == pass2) {
        if(pass1.length >= 8) {
            let n = /[0-9]/
            let char = /[!@#$%&*|?:;=+\-\...]/
            if(n.test(pass1) == true && char.test(pass1) == true) {
                return 0
            } else {return 3}
        } else {return 2}
    } else {return 1}
}

//creat an acc function
function register(){
    //get data with DOM manipulation
    let c_user = document.getElementById("c_user").value 
    //let c_email = document.getElementById("c_email").value no one care for emails THIS IS MY BANK AND I DO WHAT I WANT
    let c_pass1 = document.getElementById("c_pass1").value 
    let c_pass2 = document.getElementById("c_pass2").value
    let c_alert = document.getElementById("c_alert")
    if(validate(c_user) == 0) {
        switch(passverifier(c_pass1, c_pass2)) {
            case 0: //successful
                database_user.push(c_user)
                database_pass.push(c_pass1)
                c_alert.style.display="block"
                c_alert.innerHTML=("Register conclude with successful")
                break;
            case 1: //pass are different
                c_alert.style.display="block"
                c_alert.innerHTML=("Passwords are different")
                break;
            case 2: //pass too short
                c_alert.style.display="block"
                c_alert.innerHTML=("Password too short")
                break;
            case 3: //pass is too easy
                c_alert.style.display="block"
                c_alert.innerHTML=("Password doesn't meet minimum requirements")
        }
    } else {
        c_alert.innerHTML="User already exists"
    }
}

//create button - isnt working
function create(){
    let body = document.getElementsByTagName("body")[0]
    let ui = document.getElementById("create")
    //add blur and complete ui
    ui.style.transform="translate(-50%, -50%) scale(1)"
}
//i really dont care for this function, my bad
function forget(){
    alert("I'm really sorry but WE DON'T FREAKING CARE!")
}
