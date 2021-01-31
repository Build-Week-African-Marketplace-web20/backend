const express = require("express")
const welcomeRouter =  require("./Welcome/welcome-router")
//const db = require("./data/config")




const server = express()
const port =  process.env.PORT || 5000  


server.use (express.json())

server.use(welcomeRouter)





server.use((err, req, res, next) =>{
    console.log(err)
    res.status(500).json({
        message: "something went wrong"
    })
})

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})
// almost there 