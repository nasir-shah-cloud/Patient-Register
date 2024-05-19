const { Sequelize } = require('sequelize');

// Initialize Sequelize with database credentials
const sequelize = new Sequelize('hospital', 'root', 'mySecret', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false // Set to true to log SQL queries
});

// Test the database connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

// Synchronize the models with the database
(async () => {
  try {
      await sequelize.sync({ alter: true }); // This will create or update the table based on the model definition
      console.log('Database synchronized');
  } catch (error) {
      console.error('Error synchronizing database:', error);
  }
})();

module.exports = sequelize;
