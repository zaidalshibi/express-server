'use strict';

const supertest = require( 'supertest' );
const server = require( '../server' );
const request = supertest( server.app );

describe( 'API server', () => {
    it( 'Home page works', async () => {
        const res = await request.get( '/' );
        expect( res.status ).toEqual( 200 );
        expect( res.text ).toEqual( 'Hello World' );
    } );
    it( 'Person route works', async () => {
        const res = await request.post( '/person' ).query( {
            name: 'zaid', age: 23,
            gender: 'male'
        } );
        expect( res.status ).toEqual( 200 );
        expect( res.text ).toEqual( '28' );
    } );
}
)