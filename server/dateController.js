const dates = require('./list.json')
let dateId = 5

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
            id: dateId,
            name,
            imageURL
        }
        dates.push(newDate)
        res.status(200).send(dates)
        dateId++
    }
}