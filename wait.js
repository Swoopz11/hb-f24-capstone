const datesContainer = document.querySelector('#dates-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:5500/api/dates`

const datesCallback = ({ data: dates }) => displayDates(dates)
const errCallback = err => console.log(err.response.data)

const getAllDates = () => {axios.get(baseURL).then(datesCallback).catch(errCallback)}

const addToWaitlist = body => axios.post(baseURL, body).then(datesCallback).catch(errCallback)

const removeFromWaitlist = id => {axios.delete(`${baseURL}/${id}`).then(datesCallback).catch(errCallback)}
console.log('hi')

function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        name: name.value,
        imageURL: imageURL.value
    }

    addToWaitlist(bodyObj)

    name.value = ''
    imageURL.value = ''
}

function createDateCard(date) {
    const dateCard = document.createElement('div')
    dateCard.classList.add('date-card')

    dateCard.innerHTML = `<img alt='date cover' src=${date.imageURL} class="date-cover"/>
    <p class="date-name">${date.name}</p>
    <button onclick="removeFromWaitlist(${date.id})">delete</button>`

    datesContainer.appendChild(dateCard)
}

function displayDates(arr) {
    datesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createDateCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllDates()