// Construct City Model
module.exports = function(sequelize, DataTypes) {
    var City = sequelize.define("City", {
        // City Name
        cityName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Card Image
        img: {
            type: DataTypes.STRING
        }
    });

    City.associate = models => {
        models.City.hasMany(models.Trip, {foriegnkey: 'id'}, {
        });
    }

    return City;
}