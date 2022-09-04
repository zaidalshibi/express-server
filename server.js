'use strict';

const express = require( 'express' );
const app = express();

app.get( '/', ( req, res ) => {
    res.status( 200 ).send( 'Hello World' );
} );

app.post( '/person', ( req, res ) => {
    const name = req.query.name;
    const age = req.query.age;
    const gender = req.query.gender
    const newAge = parseInt( age ) + 5;
    res.status( 200 ).send( `${newAge}` );
} );

function start ( port ) {
    app.listen( port, () => console.log( `server up a wake` ) );
}

module.exports = {
    app: app,
    start: start
};