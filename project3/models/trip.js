// Construct Trip Model
module.exports = function(sequelize, DataTypes) {
    var Trip = sequelize.define("Trip", {
        // Trip Name - "Summer Travels with Mom"
        tripName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Trip Description
        decription: {
            type: DataTypes.STRING
        },
        // Trip Start Date
        startDate: {
            type: DataTypes.STRING
        },
        // Trip End Date
        endDate: {
            type: DataTypes.STRING
        },
        // Card Image
        img: {
            type: DataTypes.STRING
        }
    });

    Trip.associate = models => {
        models.Trip.hasMany(models.Restaurant, {foriegnkey: 'id'}, {
        });
        models.Trip.hasMany(models.Adventure, {foriegnkey: 'id'}, {
        });
        models.Trip.hasMany(models.Entertainment, {foriegnkey: 'id'}, {
        });
        models.Trip.hasMany(models.Contact, {foriegnkey: 'id'}, {
        });
        models.Trip.hasMany(models.Accomodation, {foriegnkey: 'id'}, {
        });
        models.Trip.hasMany(models.Note, {foriegnkey: 'id'}, {
        });
        // Stretch
        models.Trip.hasMany(models.Store, {foriegnkey: 'id'}, {
        });
    }

    return Trip;
}