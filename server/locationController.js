const destinations = require('./location.json')
let globalId = 5

module.exports = {
    getDestinations: (req, res) => {res.status(200).send(destinations)},

    deleteDestination: (req, res) => {
        let index = destinations.findIndex(elem => elem.id === +req.params.id)
        destinations.splice(index, 1)
        res.status(200).send(destinations)
    },

    createDestination: (req, res) => {
        let { title, imageURL } = req.body
        let newDestination = {
            id: globalId,
            title,
            imageURL
        }
        destinations.push(newDestination)
        res.status(200).send(destinations)
        globalId++
    }
}