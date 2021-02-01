const express = require("express")
const bcrypt = require("bcryptjs")  
const Users = require("./users.model")
const { restrict } = require("./users-middleware")
const router = express.Router()



router.get("/users", restrict() ,async (req, res, next) => {
	try {
		res.json(await Users.find())
	} catch(err) {
		next(err)
	}
})


router.post("/users", async (req, res, next) => {
	try {
		const { username, password } = req.body
		const user = await Users.findBy({ username }).first()
       // const passwordValid = await bcrypt.compare(password, user.password)
		if (user) {
			return res.status(409).json({
				message: "Username is already taken",
			})
		}

		const newUser = await Users.add({
			username,
			// has password with a time complexity of 10
			password: await bcrypt.hash (password, 14)                              // this will call the bcrypt and hash your password 
 		})

		res.status(201).json(newUser)
	} catch(err) {
		next(err)
	}
})


router.post("/login", async (req, res, next) => {
	try {
		const { username, password } = req.body
		const user = await Users.findBy({ username }).first()
		
		if (!user) {
			return res.status(401).json({
				message: "Invalid Credentials",
			})
		}
		 // generate a new session and send it back to the client 
	
		res.json({
			message: `Welcome ${user.username}!`,
		})
	} catch(err) {
		next(err)
	}
})


module.exports = router