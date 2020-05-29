// Construct Entertainment Model
module.exports = function(sequelize, DataTypes) {
    var Entertainment = sequelize.define("Entertainment", {
        // Entertainment Name - Band, Event, Festival
        eventName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Event Address
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Link - event url
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

    return Entertainment;
}