// Construct Note Model
module.exports = function(sequelize, DataTypes) {
    var Note = sequelize.define("Note", {
        // Note
        note: {
            type: DataTypes.STRING
        }
    });

    return Note;
}