// Construct Country Model
module.exports = function(sequelize, DataTypes) {
    var Country = sequelize.define("Country", {
        // Country Name
        countryName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, // Check
        },
        // Country Continent
        continent: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });

    Country.associate = models => {
        models.Country.hasMany(models.City, {foriegnkey: 'id'}, {
        });
    }
}