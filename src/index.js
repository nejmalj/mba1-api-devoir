const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
});

const Miel = require('./models/mielModel');
const Tag = require('./models/tagModel');

module.exports = { sequelize, Miel, Tag };
