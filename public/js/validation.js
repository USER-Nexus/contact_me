const form = document.querySelector("#form")
const nameSurname = document.querySelector("#name")
const email = document.querySelector("#email")
const subject = document.querySelector("#subject")
const message = document.querySelector("#message")
const secret = document.querySelector("#secret")
const button = document.querySelector('.button')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    checkInputs()
})

function checkInputs() {
    const nameSurnameValue = nameSurname.value.trim()
    const emailValue = email.value.trim()
    const subjectValue = subject.value.trim()
    const messageValue = message.value.trim()
    const secretValue = secret.value.trim()
    const buttonValue = button.value.trim()

    nameIsValid(nameSurname, nameSurnameValue) 
    emailIsValid(email, emailValue) 
    subjectIsValid(subject, subjectValue)
    messageIsValid(message, messageValue)
    secretIsValid(secret, secretValue)

    if(nameValid == true 
        && emailValid == true 
        && subjectValid == true 
        && messageValid == true 
        && secretValid == true) {
        button.innerText = 'Success!'
    }
    
}

function setErrorFor(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    formControl.className = 'form-control error'
    small.innerText = message
}

function setSuccessFor(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

var nameValid = false
function nameIsValid(nameSurname, nameSurnameValue) {
    if(nameSurnameValue === '') {
        setErrorFor(nameSurname, 'Name cannot be blank')
    } else {
        setSuccessFor(nameSurname)
        nameValid = true
    }
}

var emailValid = false
function emailIsValid(email, emailValue) {
    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank')
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid')
    } else {
        setSuccessFor(email)
        emailValid = true
    }
}

var subjectValid = false
function subjectIsValid(subject, subjectValue) {
    if(subjectValue === '') {
        setErrorFor(subject, 'Subject cannot be blank')
    } else {
        setSuccessFor(subject)
        subjectValid = true
    }
}

var messageValid = false
function messageIsValid(message, messageValue) {
    if(messageValue === '') {
        setErrorFor(message, 'Message cannot be blank')
    } else {
        setSuccessFor(message)
        messageValid = true
    }
}

var secretValid = false
var letter = /[a-z]/
var upper = /[A-Z]/
var number = /[0-9]/
function secretIsValid(secret, secretValue) {
    if(secretValue === '' || secretValue.length > 9) {
        setErrorFor(secret, 'Secret cannot be blank and longer then 9 characters')
    } else if(!letter.test(secretValue) || !upper.test(secretValue) || number.test(secretValue)) {
        setErrorFor(secret, 'Your secret must contain at least 1 upper letter and 1 lower letter')
    } else {
        setSuccessFor(secret)
        secretValid = true
    }
}