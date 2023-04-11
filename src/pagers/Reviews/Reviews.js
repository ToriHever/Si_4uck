import * as $ from 'jquery'
import '@styles/burger_menu.scss'
import '@media/header_footer.scss'

import {isValid} from './utils.js'

const form = document.getElementById('form')
const input = form.querySelector('#question-input')
const submitbtn = form.querySelector('#submit')

form.addEventListener('submit', submitFormHandler)

function submitFormHandler(event) {
    event.preventDefault()

    if (isValid(input.value)) {
        const question =  {
            text: input.value.trim(),
            date: new Date().toJSON()
        }

        // Async тут ассинхроный запрос на сервер
        }
}
