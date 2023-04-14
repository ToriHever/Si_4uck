import {Question} from '../Reviews/questions'
import * as $ from 'jquery'
import '@styles/burger_menu.scss'
import '@media/header_footer.scss'


document.getElementById('auth-form')
    .addEventListener('submit', authFormHandler, {
        once: true
    })

function authFormHandler(event) {
    event.preventDefault()

    const email = event.target.querySelector('#email').value
    const password = event.target.querySelector('#password').value

    authWithEmailAndPassword(email, password)
    .then(Question.fetch)
}

function authWithEmailAndPassword(email, password) {
    const apiKey = 'AIzaSyA2bHXG9c3gOH1NANka5yEX6dzSW0Mv3ng'
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => data.idToken)
}
