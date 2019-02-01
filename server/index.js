const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const massive = require('massive')


const ctrl = require('./controller')

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
.then((db) => {app.set('db',db)})
.catch((err) => {console.log(err)})

app.get('/api/houses',ctrl.getHouses)
app.post('/api/house',ctrl.postHouse)
app.delete('/api/house/:id',ctrl.deleteHouse)

const PORT = 4000;
app.listen(PORT, ()=> console.log(`Loud and clear at ${PORT}`))