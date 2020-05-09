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
            allowNull: false
        },
        // Link - restaurant url
        link: {
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

    Restaurant.associate = models => {
        // models.Restaurant.hasMany(models.Meals, {foriegnkey: 'id'}, {
        // });
    }
}