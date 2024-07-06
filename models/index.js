const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('seqnode_db', 'root', 'pass', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports=sequelize