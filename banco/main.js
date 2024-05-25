const buser = localStorage.getItem('local-user')
const bpass = localStorage.getItem('local-pass')
const admuser = "pobre"
const admpass = "1234"

function submit(){
    const user = document.querySelector('#user').value
    const pass = document.querySelector('#pass').value
    if(user == admuser && pass == admpass){
        alert('adm')
    } else if(buser == user && bpass == pass){
        document.location.href="indexx.html"
    } else if(buser != user){
        alert('Usuario não identificado!')
    } else{
        alert('Senha incorreta!')
    } 
}
function create(){
    const admuser = "pobre"
    alert("I'll make 4 questions for you okay?")
    alert("Oh right, that was the first one, lets for the second one")
    const buser = prompt('What will your nick be?')
    if(buser != admuser){
        alert(`Your nick is ${buser}`)
        const bpass = prompt("Write yoour password here. NO. THIS NOT A QUESTION HAAHHAAHAH")
        const bpass2 = prompt('Now write again hahaahahhahahaha')
        if(bpass === bpass2){
            localStorage.setItem('local-pass', bpass)
            localStorage.setItem('local-user', buser)
            alert('Wait a second please, the system is very slow.')
            alert('Wait a second please, the system is very slow.')
            alert('Wait a second please, the system is very slow.')
            alert('Wait a second please, the system is very slow.')
            alert('Wait a second please, the system is very slow.')
            alert('Wait a second please, the system is very slow.')
            alert('Wait a second please, the system is very slow.')
            alert('Wait a second please, the system is very slow.')
            alert('Wait a second please, the system is very slow.')
            alert('Wait a second please, the system is very slow.')
            alert('Wait a second please, the system is very slow.')
            alert('Wait a second please, the system is very slow.')
            alert('Wait a second please, the system is very slow.')
            alert('Wait a second please, the system is very slow.')
            alert('Wait a second please, the system is very slow.')
            alert('Your account is ready for use.')
            location.reload()
        } else{
            alert('The passwords dont match, please try again.')
        }
    } else {
        alert('This username already exists. Please try again.')
    }
}
function forget(){
    prompt('Write  a text to describe your problem.')
    let name = prompt('What your name?')
    alert(`BUT I DON'T CARE ${name} KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK`)
}