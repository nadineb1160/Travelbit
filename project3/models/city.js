// Construct City Model
module.exports = function(sequelize, DataTypes) {
    var City = sequelize.define("City", {
        // City Name
        cityName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Capital
        capital: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        // Language - or for country
        language: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    City.associate = models => {
        models.City.hasMany(models.Trip, {foriegnkey: 'id'}, {
        });
    }
}