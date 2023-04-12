export class Question {
    static create(question) {
        return fetch ( 'https://si4uck-default-rtdb.firebaseio.com//questions.json', {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        .then(response => response.json())
        .then(response => {
            question.id = response.name
            return question
        })
        .then(addTolocalStrage)
        .then(Question.renderList)
    }

    static renderList() {
        const question = getQuestionsFromLocalStorge()

        const html = question.length
        ? question.map(toCard).join('')
        : `<div class="Reviews_content_item">Ты уверен что тут будут отзыввы если ты их не напишешь?</div>`

        const list = document.getElementById('list')

        list.innerHTML = html
    }
}


function addTolocalStrage(question) {
    const all = getQuestionsFromLocalStorge()
    all.push(question)
    localStorage.setItem('question', JSON.stringify(all))
}

function getQuestionsFromLocalStorge() {
    return JSON.parse(localStorage.getItem('question') || '[]')
}

function toCard(question) {
//    return 'li'
    return`
    <div class="Reviews_content_item_data" >
        ${new Date(question.date).toLocaleDateString()}
        ${new Date(question.date).toLocaleTimeString()}
    </div>
    <div class="Reviews_content_item_text" >${question.text}</div>
    <br>
`
}
