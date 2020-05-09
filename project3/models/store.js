// Construct Store Model
module.exports = function(sequelize, DataTypes) {
    var Store = sequelize.define("Store", {
        // Store Name - "Cath Kidson"
        storeName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Store Address
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Link - store url
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
}