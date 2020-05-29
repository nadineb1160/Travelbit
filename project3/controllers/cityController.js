const db = require("../models");

// City controller methods
module.exports = {
    findAllByCountry: (req, res) => {
        db.City
        .findAll({
            where: {
                countryId: req.params.countryId
            },
            include: [{
                model: db.Trip
            }],
            order: [
                ['cityName', 'ASC']
            ]
        }).then(cities => {
            // console.log(cities)
            res.json(cities);
        }).catch(err => {
            console.log(err);
            res.send('No data found')
        });
        
    },
    findAllByState: (req, res) => {
        console.log("req.params.stateId");
        db.City
        .findAll({
            where: {
                stateId: req.params.stateId
            },
            include: [{
                model: db.Trip
            }],
            order: [
                ['cityName', 'ASC']
            ]
        }).then(cities => {
            console.log(cities)
            res.json(cities);
        }).catch(err => {
            console.log(err);
            res.send('No data found')
        });
        
    },
    findById: (req, res) => {
        db.City
        .findOne({
            where: {
                id: req.param.cityId
            },
            include: [{
                model: db.Trip
            }]
        }).then(city => {
            // console.log(city)
            res.json(city);
        }).catch(err => {
            console.log(err);
            res.send('No data found')
        });
    },
    create: (req, res) => {
        db.City
        .create(req.body, {})
        .then(city => {
            res.json(city.dataValues.id)
        })
        .catch(err => {
            console.log(err);
            res.send(`City ${city.dataValues.cityName}, was NOT created`)
        });
    },
    update: (req, res) => {
        db.City
        .update(req.body, {
            where: {
                id: req.params.cityId
            }
        }).then(() => {
            res.json("Completed");
        }).catch(err => {
            console.log(err);
            res.send("Failed to update");
        });
    },
    remove: (req, res) => {
        db.City
        .destroy({
            where: {
                id: req.params.cityId
            }
        }).then((rowsDeleted) => {
            rowsDeleted ? res.send(true) : res.send(false);
        }).catch(err => {
            console.log(err);
            res.send(false);
        });
    }
}


