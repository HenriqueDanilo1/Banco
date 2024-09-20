//test database
let database_user = [ "pobre", "rico", "probre pro max" ]
let database_pass = [ "1234", "onetwothreefour", "Porta01!" ]

//bank name
bn = "BL Bank"

//validate system
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

//alert system]
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

//submit function
function submit(){
    const user = document.querySelector('#user').value
    const pass = document.querySelector('#pass').value
    if(validate(user, pass) == 1){
        document.location.href="gg.html"
    } else if(validate(user, pass) == -1){
        falert(0) // 0 = pass
    } else{
        falert(1) // 1 = user
    }
}
function create(){
    let body = document.getElementsByTagName("body")[0]
    let ui = document.getElementById("create")
    //add blur and complete ui
    ui.style.transform="translate(-50%, -50%) scale(1)"
    // const newuser = prompt("First create your username:")
    // if(newuser == null){return}
    // if(validate(newuser) == 0){
    //     const newpass_1 = prompt("Now create your password: ")
    //     if(newpass_1 == null){return}
    //     const newpass_2 = prompt("Finally repeat your password: ")
    //     if(newpass_1 == newpass_2){
    //         database_user.push(newuser)
    //         database_pass.push(newpass_1)
    //         alert(`Wellcome to ${bn}, it's great to have you with us!`)
    //     } else{
    //         alert("Oh no! The passwords are different, please try again!")
    //     }
    // } else{
    //     alert("Oh no! This user already exist. Please try again.")
    //     create()
    // }
    }
function forget(){
    alert("I'm really sorry but WE DON'T FREAKING CARE!")
}
