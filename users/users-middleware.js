const bcrypt = require("bcryptjs")
const Users = require("./users.model")


function restrict() {
	// Create a middleware function that restricts routes to authorized users only.
	   //It should get the username and password from the request headers.
        return async (req, res, next) => {
	 	const authError = { message: "invalid credentials",
	 }
	  	try{
	// // 		// make sure the values arent emty 
	// 		const{ username, password} = req.headers 
	// 	if(!username || !password){
	// 			return RegExp.status(401).json(authError)
	// 		}
	// // 		//make suere the user exists in the database 
	//  		const user = await Users.findBy({ username}).first()
	// 		if (!user){
	// 			return res.status(401).json(authError)
	//  		}
	// // 		// make sure the password is valid 
	// 		const passwordValid = await bcrypt.compare(password, user.password)
	// 		if (!passwordValid) {
 	// 		return res.status(401).status(authError)
	// 		}
			// we are authorized by this point 
			if (!req.session || !req.session.user){                                 // STEP 10
				return restrict.status(401).json(authError)
			}
			next ()
		}catch (err){
			next(err)
		}
	}
}

module.exports = {
	restrict,
}