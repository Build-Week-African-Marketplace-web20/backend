const express = require("express")
//const { restrict } = require("./users-middleware")
item = require("./items-model")
const router = express.Router()

router.get("/items", async (req , res, next) =>{
    try {
        const items = await item.find()
        res.json(items)
    }catch(err){
        next(err)
    }
})

router.post("/items", async (req, res, next) => {
	try {
        const {name, description, price, location} = req.body
		const newitem = await item.add({
			name, description, price , location
 		})

		res.status(201).json(newitem)
	} catch(err) {
		next(err)
	}
})





module.exports = router