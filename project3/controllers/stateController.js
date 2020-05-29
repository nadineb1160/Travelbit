const db = require("../models");

// State controller methods
module.exports = {
    findAll: (req, res) => {
        db.State
        .findAll({
            where: {
                countryId: req.params.countryId
            },
            include: [{
                model: db.City
            }],
            order: [
                ['stateName', 'ASC']
            ]
        }).then(states => {
            // console.log(states)
            res.json(states);
        }).catch(err => {
            console.log(err);
            res.status(400).send(err);
        });
        
    },
    findById: (req, res) => {
        db.State
        .findOne({
            where: {
                id: req.param.stateId
            },
            include: [{
                model: db.City
            }]
        }).then(state => {
            // console.log(state)
            res.json(state);
        }).catch(err => {
            console.log(err);
            res.send('No data found')
        });
    },
    create: (req, res) => {
        db.State
        .create(req.body, {})
        .then(state => {
            res.json(state.dataValues.id)
        })
        .catch(err => {
            console.log(err);
            res.send(`City ${city.dataValues.cityName}, was NOT created`)
        });
    },
    update: (req, res) => {
        db.State
        .update(req.body, {
            where: {
                id: req.params.stateId
            }
        }).then(() => {
            res.json("Completed");
        }).catch(err => {
            console.log(err);
            res.send("Failed to update");
        });
    },
    remove: (req, res) => {
        db.State
        .destroy({
            where: {
                id: req.params.stateId
            }
        }).then((rowsDeleted) => {
            rowsDeleted ? res.send(true) : res.send(false);
        }).catch(err => {
            console.log(err);
            res.send(false);
        });
    }
}


