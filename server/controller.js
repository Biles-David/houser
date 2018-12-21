const express = require("express");
const {json} = require("body-parser");

const getListings = ( req, res, next ) => {
  const db = req.app.get('db');
  db.getListings().then ( listings => res.status( 200 ).json(listings))
  .catch( err => {res.status(500); console.log(err)}) 
}

const newListing = ( req, res, next ) => {
  const db = req.app.get('db');
  let { name, address, city, state, zip } = req.body
  db.newListing([name, address, city, state, zip])
  .then( response => {
    db.getListings().then( response => res.json( response ))
    res.json(response)
  }) 
  // console.log(req.body);
}

const deleteListing = ( req, res, next ) => {
  const db = req.app.get('db')

  db.deleteListing(req.params.id)
  .then( () => res.sendStatus(200))
  .catch( err => {
    res.status(500).send({errorMessage: "Something has gone wrong, we will work on that"});
    });
  // console.log(req.params)
}

module.exports = {
  getListings,
  newListing,
  deleteListing
}