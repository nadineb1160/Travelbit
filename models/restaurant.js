// Construct Restaurant Model
module.exports = function(sequelize, DataTypes) {
    var Restaurant = sequelize.define("Restaurant", {
        // Restaurant Name - "Buddha Bar"
        restaurantName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Restaurant Address
        address: {
            type: DataTypes.STRING,
        },
        // Link - restaurant url
        link: {
            type: DataTypes.STRING,
        },
        // Notes
        notes: {
            type: DataTypes.STRING,
        },
        // Images - Array
        images: {
            type: DataTypes.STRING,
        }
    });

    Restaurant.associate = models => {
        // models.Restaurant.hasMany(models.Meals, {foriegnkey: 'id'}, {
        // });
    }

    return Restaurant;
}