const dates = require('./list.json')

module.exports = {
    getWaitlist: (req, res) => res.status(200).send(dates),

    removeFromWaitlist: (req, res) => {
        let index = dates.findIndex(elem => elem.id === +req.params.id)
        dates.splice(index, 1)
        res.status(200).send(dates)
    },

    addToWaitlist: (req, res) => {
        // let { title}
    }
}