const express = require('express')
const productsRouter = require('./src/routes/products.router.js')
const cartsRouter = require('./src/routes/carts.router.js')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/products',productsRouter )
app.use('/api/carts', cartsRouter )


app.listen(8080, ()=>{
    console.log('Escuchando en el puerto 8080')
} )