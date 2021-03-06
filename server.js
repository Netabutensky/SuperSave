const express = require( 'express' )
const app = express()
const port = 8080
const path = require( 'path' )

const bodyParser = require( 'body-parser' )
const mongoose = require( 'mongoose' )

const router = require('./server/routes/api')

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: false } ) )

app.use( express.static( path.join( __dirname, 'dist' ) ) )
app.use( '/', router )










mongoose.connect('mongodb://localhost/hackathonDB', { useNewUrlParser: true } ).then( () => {
   app.listen( port, () => console.log( `Running server on port ${ port }` ) )
} )

