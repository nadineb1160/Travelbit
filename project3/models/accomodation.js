// Construct Accomodation Model
module.exports = function(sequelize, DataTypes) {
    var Accomodation = sequelize.define("Accomodation", {
        // Accomodation Name - "King David Hotel"
        accomodationName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Accomodation Address
        address: {
            type: DataTypes.STRING
        },
        // Link - accomodation url
        link: {
            type: DataTypes.STRING
        },
        // Notes
        notes: {
            type: DataTypes.STRING
        },
        // Images - Array
        images: {
            type: DataTypes.STRING
        }
    });

    return Accomodation;
}