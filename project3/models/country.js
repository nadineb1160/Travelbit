// Construct Country Model
module.exports = function(sequelize, DataTypes) {
    var Country = sequelize.define("Country", {
        // Country Name
        countryName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Country Continent
        continent: {
            type: DataTypes.STRING,
            allowNull: true,
        },
         // Capital
        //  capital: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // // Language
        // language: {
        //     type: DataTypes.STRING,
        //     allowNull: true
        // }
    });

    Country.associate = models => {
        models.Country.hasMany(models.City, {foriegnkey: 'id'}, {
        });
        models.Country.hasMany(models.State, {foriegnkey: 'id'}, {
        });
    }

    return Country;
}