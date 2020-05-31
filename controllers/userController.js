const db = require("../models");
const bcrypt = require("bcryptjs");

// City controller methods
module.exports = {
    findAll: (req, res) => {
        db.User
        .findAll({
            include: [{
                model: db.Country
            }]
        }).then(users => {
            // console.log(users)
            res.json(users);
        }).catch(err => {
            console.log(err);
            res.send('No data found')
        });
        
    },
    findByUid: (req, res) => {
        console.log(req.params.uid)
        db.User
        .findOne({
            where: {
                uid: req.params.uid
            },
            // attributes: ["id"]
        }).then(user => {
            console.log("found user by uid")
            // console.log(user.dataValues)
            res.json(user.dataValues);
        }).catch(err => {
            console.log(err);
            res.send('No data found')
        });
    },
    create: (req, res) => {
        console.log("req.body")
        console.log(req.body)
        db.User
        .create(req.body)
        .then(user => {
            console.log("user.dataValues")
            // console.log(user.dataValues)
            res.json(user.dataValues)
        })
        .catch(err => {
            console.log(err);
            res.send(`User was NOT created`)
        });
    },
    update: (req, res) => {
        db.User
        .update(req.body, {
            where: {
                id: req.params.userId
            }
        }).then(() => {
            res.json("Completed");
        }).catch(err => {
            console.log(err);
            res.send("Failed to update");
        });
    }

}


