module.exports={
    getInventory: (req,res) => {
        const db = req.app.get('db')
        db.get_inventory().then(inventory => {
            res.status(200).send(inventory)
        })
    },
    addInventory: (req, res) => {
        const db = req.app.get('db')
        const {image_url, product_name, price} = req.body
        db.create_product([image_url, product_name, price]).then(product => {
            res.status(200).send(product)
        })
    }
}

