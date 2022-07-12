const locationsContainer = document.getElementById('locations-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:5500/api/destinations`

const locationsCallback = ({ data: destinations }) => displayDestinations(destinations)
const errCallback = err => console.log(err.response.data)

const getAllDestinations = () => {axios.get(baseURL).then(locationsCallback).catch(errCallback)}

const createDestination = body => axios.post(baseURL, body).then(locationsCallback).catch(errCallback)

const deleteDestination = id => axios.delete(`${baseURL}/${id}`).then(locationsCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        title: title.value,
        imageURL: imageURL.value
    }

    createDestination(bodyObj)

    title.value = ''
    imageURL.value = ''
}

function createDestinationCard(destination) {
    const destinationCard = document.createElement('div')
    destinationCard.classList.add('destination-card')

    destinationCard.innerHTML = `<img alt='destination cover' src=${destination.imageURL} class="destination-cover"/>
    <p class="destination-title">${destination.title}</p>
    <button onclick="deleteDestination(${destination.id})">delete</button>
    `

    locationsContainer.appendChild(destinationCard)
}

function displayDestinations(arr) {
    locationsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createDestinationCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllDestinations()