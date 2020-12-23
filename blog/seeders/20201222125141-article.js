'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 修改表的名字为Articles
    await queryInterface.bulkInsert('Articles', [
      {
        title: '小明',
        context: "小明好看",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: '小红',
        context: "小红不好看",
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Articles', null, {});
  }
};
