'use strict';
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('users', [
       {
         id: `user-${uuidv4()}`,
         name: 'Imam Syuhada',
         profession: 'Embedded Software',
         role: 'admin',
         email: 'imamsy11@gmail.com',
         password: await bcrypt.hash('123456', 10),
         created_at: new Date(),
         updated_at: new Date()
        },
        {
          id: `user-${uuidv4()}`,
          name: 'Cahyono Wibowo',
          profession: 'Flutter Developer',
          role: 'student',
          email: 'cahyono@gmail.com',
          password: await bcrypt.hash('123456', 10),
          created_at: new Date(),
          updated_at: new Date()
         }
      ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
