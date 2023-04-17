import {Question} from './questions'
import {createModal, isValid} from './utils'
import * as $ from 'jquery'
import '@styles/burger_menu.scss'
import '@media/header_footer.scss'



document.getElementById('auth-form')
    .addEventListener('submit', authFormHandler, {
        once: true
    })

function authFormHandler(event) {
    event.preventDefault()

    const btn = event.target.querySelector('button')
    const email = event.target.querySelector('#email').value
    const password = event.target.querySelector('#password').value

    btn.disabled = true
    authWithEmailAndPassword(email, password)
    .then(Question.fetch)
    .then(renderModalAfterAuth)
    .then(() => btn.disabled = false )
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

function renderModalAfterAuth(content) {
    if (typeof content === 'string') {
        createModal('Ошибка', content)
    } else {
        createModal('Список отзывов', Question.listToHTML(content))
    }
}
