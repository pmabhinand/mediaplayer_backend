//import json-server library in index.js
const jsonServer = require('json-server')

//create server using json-server library
const mediaPlayerServer = jsonServer.create()

//create a path to db.json
const router= jsonServer.router('db.json')

//middleware to convert js to json
const middleware= jsonServer.defaults() 

//connect
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//setup port for server
const port=5001 || process.env.PORT

//monitor 5001
mediaPlayerServer.listen(port,()=>{
    console.log(`media player server is listening to ${port} and waiting for the request`);
})