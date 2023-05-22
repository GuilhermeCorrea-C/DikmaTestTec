const { Model, DataTypes, INTEGER, DATE } = require('sequelize');
const sequelize = require('../config/db');
const empresa = require('./empresa');

class Area extends Model{};

Area.init({
    idArea: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    descricao: DataTypes.STRING
}, {
    sequelize,
    modelName: 'area',
    timestamps: false
})

//Area.belongsTo(empresa, {foreignKey: 'idEmp'});

module.exports = Area;