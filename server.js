
const express = require('express')
const app = express()

const hbs = require('hbs')
require('./hbs/helpers')

// para heroku
const port = process.env.PORT || 3000

// middleware 
app.use( express.static( __dirname + '/public') )

// Express HBS engine
hbs.registerPartials( __dirname + '/views/parciales')
app.set('view engine','hbs')


app.get('/', (req,res) => {

    res.render( 'home',{
        nombre: 'Daniel',
    } )
}) 

app.get('/about', (req,res) => {

    res.render( 'about',{
        nombre: 'Daniel',
    } )
}) 

app.get('/data', (req,res) => {
    
    res.send('hola data')
})

app.listen( port, ()=>{
    console.log(`escuchando peticiones en el puerto ${ port }`);
})