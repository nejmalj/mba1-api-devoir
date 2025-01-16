const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db.js');


const Miel = sequelize.define('Miel', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    prix: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = Miel;
