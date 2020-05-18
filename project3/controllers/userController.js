const db = require("../models");

// City controller methods
module.exports = {
    // findAll: (req, res) => {
    //     db.User
    //     .findAll({
    //         include: [{
    //             model: db.Country
    //         }]
    //     }).then(users => {
    //         console.log(users)
    //         res.json(users);
    //     }).catch(err => {
    //         console.log(err);
    //         res.send('No data found')
    //     });
        
    // },
    findById: (req, res) => {
        db.User
        .findOne({
            where: {
                id: req.param.id
            },
            include: [{
                model: db.Country
            }]
        }).then(user => {
            console.log(user)
            res.json(user);
        }).catch(err => {
            console.log(err);
            res.send('No data found')
        });
    },
    create: (req, res) => {
        db.User
        .create(req.body, {})
        .then(user => {
            res.json(user.dataValues.id)
        })
        .catch(err => {
            console.log(err);
            res.send(`User ${city.dataValues.name}, was NOT created`)
        });
    },
    update: (req, res) => {
        db.User
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
    }
}


