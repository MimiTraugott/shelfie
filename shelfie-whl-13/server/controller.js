module.exports={
    getInventory: (req,res) => {
        const db = req.app.get('db')
        db.get_inventory().then(inventory => {
            res.status(200).send(inventory)
        }).catch(err => console.log(err))
    },
    addInventory: (req, res) => {
        const db = req.app.get('db')
        const {image_url, product_name, price} = req.body
        db.create_product([image_url, product_name, price]).then(product => {
            res.status(200).send(product)
        }).catch(err => console.log(err))
    },
    deleteFromInventory: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_from_inventory(id)
        .then(()=>res.sendStatus(200) )
        .catch(err => {
            res.status(500).send({errorMessage: 'whoops!'})
            console.log(err)
        })   
    },
    updateInventory: (req,res)=> {
        const db = req.app.get('db')
        const{params,query}=req

        db.update_inventory([params.id, query.desc])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: 'well crap!'})
            console.log(err)
        })
    }
}
