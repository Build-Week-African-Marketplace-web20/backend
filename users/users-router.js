const express = require("express")
const bcrypt = require("bcryptjs")  
const Users = require("./users.model")
const { restrict } = require("./users-middleware")
const router = express.Router()



router.get("/users", restrict() ,async (req, res, next) => {                            // STEP 6 ADD THE RESTRICT MIDDLEWARE TO THE FUNCTIONS
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

	     const passwordValid = await bcrypt.compare(password, user.password)
		if (!user || !passwordValid) {
			return res.status(401).json({
				message: "Invalid Credentials",
			})
		}
		 // generate a new session and send it back to the client                                   //STEP 9
	    req.session.user = user
		res.json({
			message: `Welcome ${user.username}!`,
		})
	} catch(err) {
		next(err)
	}
})
router.get("/logout", async (req, res, next) =>{
			try {
				req.session.destroy((err) =>{
	            if (err){
					next(err)
				}else{
					res.status(204).end()
				}
			})	
			} catch (err) {
				next(err)
			}
	  })
	  router.delete("/users/:id", (req, res) => {
		Users.remove(req.params.id)
			.then((count) => {
				if (count > 0) {
					res.status(200).json({
						message: "The user has been nuked",
					})
				} else {
					res.status(404).json({
						message: "The user could not be found",
					})
				}
			})
			.catch((error) => {
				console.log(error)
				res.status(500).json({
					message: "Error removing the user",
				})
			})
	})
	router.put("/users/:id", (req, res) => {
		
	
		Users.update(req.params.id, req.body)
			.then((user) => {
				if (user) {
					res.status(200).json(user)
				} else {
					res.status(404).json({
						message: "The user could not be found",
					})
				}
			})
			.catch((error) => {
				console.log(error)
				res.status(500).json({
					message: "Error updating the user",
				})
			})
	})
	

module.exports = router