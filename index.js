const express = require("express")
const welcomeRouter =  require("./Welcome/welcome-router")
const UserRouter = require("./users/users-router")
const itemRouter = require("./items.js/items-router")
const session = require("express-session")
const ConnectSessionKnex = require("connect-session-knex")(session)                           // all these are step 12 
const db = require("./data/config")




const server = express()
const port =  process.env.PORT || 5000  


server.use (express.json())
server.use(session({ 
	resave: false, // avoid creating sessions that have not changed                       // THIS IS STEP 8
	saveUninitalized: false, // GDPR laws againts setting cookies automaticall 
	secret: " kee it secret, keep it safe", // cryptogrphycally sign the cookie 
	store: new ConnectSessionKnex({
		knex: db, // configured instance of knewx
		createtable: true, // create a sessions table in the db if it doesnt exist 
	})
}))    

server.use(welcomeRouter)
server.use(UserRouter)
server.use(itemRouter)




server.use((err, req, res, next) =>{
    console.log(err)
    res.status(500).json({
        message: "Try loggin in :)"
    })
})

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})
// almost there 