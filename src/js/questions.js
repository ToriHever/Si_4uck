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

    static fetch(token){
        if (!token) {
            return Promise.resolve('<p class="error">ГДЕ ТВОЙ ТОКЕН?</p>')
        }
        return fetch(`https://si4uck-default-rtdb.firebaseio.com//questions.json?auth=${token}`)
            .then(response => response.json())
            .then(response => {
                if (response && response.error) {
                    return `<p class="error">${response.error}</p>`
                }

                return response ? Object.keys(response).map(key => ({
                    ...response[key],
                    id: key
                })) : []
        })
    }

    static renderList() {
        const question = getQuestionsFromLocalStorge()

        const html = question.length
        ? question.map(toCard).join('')
        : `<div class="Reviews_content">Ты уверен что тут будут отзыввы если ты их не напишешь?</div>`

        const list = document.getElementById('list')

        list.innerHTML = html
    }

    static listToHTML (questions) {
        return questions.length
        ? `<ol>${questions.map(q => `<li>${q.text}</li>`).join('')}</ol>`
        : `<p>Круто, ты первый кто оставит свой отзыв</p>`
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
    return`
    <div class="Reviews_content_inner_element">
                      <div class="Reviews_content_inner_element-avatar"><img src="./assets/icons/avatar.png" alt=""></div>
                       <div class="Reviews_content_inner_element-text">
                            <div class="Reviews-data">
                                ${new Date(question.date).toLocaleDateString()}
                                ${new Date(question.date).toLocaleTimeString()}
                            </div>
                            <p>${question.text}</p>
                        </div>
                    </div>
`
}
