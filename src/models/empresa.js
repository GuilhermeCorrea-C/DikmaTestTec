const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const area = require('./area');

class Empresa extends Model{};

Empresa.init({

    idEmp: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: DataTypes.STRING
}, {
    sequelize,
    modelName: 'empresa',
    timestamps: false
})

//Empresa.hasMany(area, {foreignKey: idEmp});

module.exports = Empresa;