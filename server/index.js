require('dotenv').config()
const express = require('express');
const massive = require('massive');
const { json } = require('body-parser');
const { getListings, newListing, deleteListing } = require('./controller');
let { SERVER_PORT, CONNECTION_STRING } = process.env


const app = express();

app.use(json());

massive(CONNECTION_STRING).then( db => {
  app.set('db', db)
  console.log('Database connected')
}).catch(err => console.log(err));

app.get("/api/listings", getListings)
app.post("/api/listings", newListing)
app.delete(`/api/listings/:id`, deleteListing)

const port = SERVER_PORT
app.listen(port, () => console.log(`Listening on port ${port}`))