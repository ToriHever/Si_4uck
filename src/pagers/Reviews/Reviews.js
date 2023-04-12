import {Question}  from './questions'
import {isValid}  from './utils'
import * as $ from 'jquery'
import '@styles/burger_menu.scss'
import '@media/header_footer.scss'



const form = document.getElementById('form')

const input = form.querySelector('#question-input')
const submitBtn = form.querySelector('#submit')

//window.addEventListener('load', Question.renderList)
form.addEventListener( 'submit', submitFormHandler)
//modalBtn.addEventListener( 'click', openModal)

input.addEventListener('input', () => {
    submitBtn.disabled = !isValid(input.value)
})

function submitFormHandler(event) {
    event.preventDefault()

    const value = input.value

    if (isValid(input.value)){
        const question = {
            text: input.value.trim(),
            date: new Date().toJSON()
        }

        submitBtn.disabled = true

        //Отправака на сервер
        Question.create(question).then(() =>{
            input.value = ''
            input.className = ''
            submitBtn.disabled = false
        })

    }
}
