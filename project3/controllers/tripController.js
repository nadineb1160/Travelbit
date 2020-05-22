const db = require("../models");

// City controller methods
module.exports = {
    findAll: (req, res) => {
        db.Trip
        .findAll({
            where: {
                UserId: req.params.userId,
                cityId: req.params.cityId
            },
            include: [
                {model: db.Restaurant},
                {model: db.Entertainment},
                {model: db.Contact},
                {model: db.Store}
            ]
            // order: [
            //     ['date', 'ASC']
            // ]
        }).then(trips => {
            console.log(trips)
            res.json(trips);
        }).catch(err => {
            console.log(err);
            res.send('No data found')
        });
        
    },
    findById: (req, res) => {
        db.Trip
        .findOne({
            where: {
                UserId: req.params.userId,
                id: req.param.tripId
            },
            include: [
                {model: db.Restaurant},
                {model: db.Entertainment},
                {model: db.Contact},
                {model: db.Store}
            ]
        }).then(trip => {
            console.log(trip)
            res.json(trip);
        }).catch(err => {
            console.log(err);
            res.send('No data found')
        });
    },
    create: (req, res) => {
        db.Trip
        .create(req.body, {})
        .then(trip => {
            res.json(trip.dataValues.id)
        })
        .catch(err => {
            console.log(err);
            res.send(`Trip ${trip.dataValues.tripName}, was NOT created`)
        });
    },
    update: (req, res) => {
        db.Trip
        .update(req.body, {
            where: {
                UserId: req.params.userId,
                id: req.params.tripId
            }
        }).then(() => {
            res.json("Completed");
        }).catch(err => {
            console.log(err);
            res.send("Failed to update");
        });
    },
    remove: (req, res) => {
        db.Trip
        .destroy({
            where: {
                UserId: req.params.userId,
                id: req.params.tripId
            }
        }).then((rowsDeleted) => {
            rowsDeleted ? res.send(true) : res.send(false);
        }).catch(err => {
            console.log(err);
            res.send(false);
        });
    }
}


