const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json()); 
app.use(cors());

// Controller Functions ---

const {
    getDestinations,
    createDestination,
    deleteDestination
} = require('./locationController')

const {
    getWaitlist,
    addToWaitlist,
    removeFromWaitlist
} = require('./dateController')

// ----

// Endpoints

app.get(`/api/destinations`, getDestinations)
app.get(`/api/destinations/:id`, deleteDestination)
app.get(`/api/destinations`, createDestination)

app.get(`/api/dates`, getWaitlist)
app.get(`/api/dates/:id`, addToWaitlist)
app.get(`/api/dates`, removeFromWaitlist)

// ----


app.listen(5500, console.log('chillin at port 5500'))