module.exports = {
    getHouses: (req,res,next) => {
        const dbInstance = req.app.get('db')
        dbInstance.getHouses()
        .then((house => {res.status(200).send(house)}))
        .catch((err) => res.status(500).send(err))
    },
    postHouse: (req,res,next) => {
        const dbInstance = req.app.get('db')
        const newHouse = {
            name: req.body.property_name,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip
        }

        dbInstance.postHouse([newHouse.name,newHouse.address,newHouse.city,newHouse.state,newHouse.zip])
        .then(() => {res.sendStatus(200)})
        .catch((err) => {res.status(500).send(err)})
    },
    
    deleteHouse: (req,res,next) => {
        const {params} = req;
        const dbInstance = req.app.get('db');

        dbInstance.deleteHouse([params.id])
        .then(() => {res.sendStatus(200)})
        .catch((err) => {res.status(500).send(err)})

    }
}