module.exports = (sequelize,DataTypes,Model) => {

class User extends Model {}

User.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        defaultValue:'zellit'
    }
}, {
    sequelize,
    modelName: 'User'
});
}