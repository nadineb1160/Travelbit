// Construct Contact Model
module.exports = function(sequelize, DataTypes) {
    var Contact = sequelize.define("Contact", {
        // Contact Name 
        name: {
            type: DataTypes.STRING,
        },
        // email
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        // Phone
        phone: {
            type: DataTypes.STRING
        },
        // Notes
        notes: {
            type: DataTypes.STRING
        },
        // Contact Image
        image: {
            type: DataTypes.STRING
        }
    });
}