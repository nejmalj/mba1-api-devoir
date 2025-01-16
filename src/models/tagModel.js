const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db.js');


const Tag = sequelize.define('Tag', {
    tag: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    timestamps: true,
});

module.exports = Tag;
