const {Model,DataTypes } = require('sequelize');
const sequelize = require('./index')

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

module.exports=User