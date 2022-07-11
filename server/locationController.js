const destinations = require('./location.json')
let globalId = 4

module.exports = {
    getDestinations: (req, res) => res.status(200).send(destinations),

    deleteDestination: (req, res) => {
        let index = destinations.findIndex(elem => elem.id === +req.params.id)
        movies.splice(index, 1)
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