// Construct User Model
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        // User Email - used as username
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        // First and Last Name
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });

    User.associate = models => {
        models.User.hasMany(models.Country, {foriegnkey: 'id'}, {
        });
        // models.User.hasMany(models.User, {foriegnkey: 'followers'})
    }

    return User;
}