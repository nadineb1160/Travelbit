const db = require("../models");

// Country controller methods
module.exports = {
    findAll: (req, res) => {
        db.Country
        .findAll({
            where: {
                UserId: req.params.id
            },
            include: [{
                model: db.City
            }],
            order: [
                ['countryName', 'ASC']
            ]
        }).then(countries => {
            console.log(countries)
            res.json(countries);
        }).catch(err => {
            console.log(err);
            res.send('No data found')
        });
        
    },
    findById: (req, res) => {
        db.Country
        .findOne({
            where: {
                id: req.param.userId
                // UserId: req.params.id
            },
            include: [{
                model: db.City
            }]
        }).then(country => {
            console.log(country);
            res.json(country);
        }).catch(err => {
            console.log(err);
            res.send('No data found')
        });
    },
    create: (req, res) => {
        db.Country
        .create(req.body, {})
        .then(country => {
            res.json(country.dataValues.id)
        })
        .catch(err => {
            console.log(err);
            res.send(`Country ${country.dataValues.countryName}, was NOT created`)
        });
    },
    update: (req, res) => {
        db.Country
        .update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.json("Completed");
        }).catch(err => {
            console.log(err);
            res.send("Failed to update");
        });
    },
    remove: (req, res) => {
        db.Country
        .destroy({
            where: {
                id: req.params.id
            }
        }).then((rowsDeleted) => {
            rowsDeleted ? res.send(true) : res.send(false);
        }).catch(err => {
            console.log(err);
            res.send(false);
        });
    }
}


