
const http = require('http')

http.createServer( (req,res)=>{

    res.writeHead(200,{'Content-Type':'application/json'})

    let salida = {
        nombre: 'daniel',
        edad: 22,
        url: req.url
    }
    res.write( JSON.stringify( salida ) )
    //res.write('<h1> hola mundo </h1>')
    res.end()

})
.listen(8080)

console.log('escuchando el puerto  8080');