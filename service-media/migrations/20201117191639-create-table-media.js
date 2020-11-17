'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('media', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable('media', { 
      id: {
        type:Sequelize.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      image: {
        type:Sequelize.STRING,
        allowNull: false
      },
      created_at:{
        type:Sequelize.DATE,
        allowNull: false
      },
      updated_at:{
        type:Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('media');
     */
    return queryInterface.dropTable('media');
  }
};
