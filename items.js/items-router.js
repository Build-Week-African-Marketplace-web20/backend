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
router.delete("/items/:id", (req, res) => {
    item.remove(req.params.id)
        .then((count) => {
            if (count > 0) {
                res.status(200).json({
                    message: "The item has been nuked",
                })
            } else {
                res.status(404).json({
                    message: "The item could not be found",
                })
            }
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                message: "Error removing the item",
            })
        })
})




module.exports = router