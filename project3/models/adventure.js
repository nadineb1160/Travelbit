// Construct Adventure Model
module.exports = function(sequelize, DataTypes) {
    var Adventure = sequelize.define("Adventure", {
        // Adventure Name - Park, Walk, explore
        adventure: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // general location - Map pinpoint (multiple?)
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Notes
        notes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        // Images - Array
        images: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    // Multiple locations or images association?

    return Adventure;

}