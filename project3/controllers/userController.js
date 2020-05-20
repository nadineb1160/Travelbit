const db = require("../models");
const bcrypt = require("bcryptjs");

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
    },

    // Check Existing User at Signup
    // checkExisting: (req, res) => {
    //     const { email, password } = req.body;

    //     // Check all fields
    //     if (!email || !password) {
    //         return res.status(400).json({ msg: "Please enter all fields"});
    //     }

    //     db.User
    //     .findOne({
    //         where: {
    //             email: email
    //         }
    //     }).then(user => {
    //         if (user) return res.status(400).json( {msg: "User already exists"});

    //         const newUser = new User({
    //             name,
    //             email,
    //             password
    //         })

    //         // Create hash and salt
    //         bcrypt.genSalt(10, (err, salt) => {
    //             bcrypt.hash(newUser.password, salt, (err, hash) => {
    //                 if (err) throw err;
    //                 newUser.password = hash;
    //                 newUser.save()
    //                 .then(user => {
    //                     res.json({
    //                         user: {
    //                             id: user.id,
    //                             name: user.name,
    //                             email: user.email
    //                         }
    //                     })
    //                 })
    //             })
    //         })
    //     })
    // }
}


