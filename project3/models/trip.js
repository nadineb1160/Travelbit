// Construct Trip Model
module.exports = function(sequelize, DataTypes) {
    var Trip = sequelize.define("Trip", {
        // Trip Name - "Summer Travels with Mom"
        tripName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Trip Date - "Summer 2014"
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Notes
        notes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        // Phrases
        phrases: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Trip.associate = models => {
        models.Trip.hasMany(models.Restaurant, {foriegnkey: 'id'}, {
        });
        models.Trip.hasMany(models.Adventure, {foriegnkey: 'id'}, {
        });
        models.Trip.hasMany(models.Enterainment, {foriegnkey: 'id'}, {
        });
        models.Trip.hasMany(models.Contact, {foriegnkey: 'id'}, {
        });
        models.Trip.hasMany(models.Store, {foriegnkey: 'id'}, {
        });
    }
}