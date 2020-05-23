// Construct State Model
module.exports = function(sequelize, DataTypes) {
    var State = sequelize.define("State", {
        // State Name
        stateName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    State.associate = models => {
        models.State.hasMany(models.City, {foriegnkey: 'id'}, {
        });
    }

    return State;
}