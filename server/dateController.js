const dates = require('./list.json')
let globalId = 5

module.exports = {
    getWaitlist: (req, res) => res.status(200).send(dates),

    removeFromWaitlist: (req, res) => {
        let index = dates.findIndex(elem => elem.id === +req.params.id)
        dates.splice(index, 1)
        res.status(200).send(dates)
    },

    addToWaitlist: (req, res) => {
        let { name, imageURL } = req.body
        let newDate = {
            id: globalId,
            name,
            imageURL
        }
        dates.push(newDate)
        res.status(200).send(dates)
        globalId++
    }
}