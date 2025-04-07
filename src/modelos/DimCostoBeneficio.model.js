const { DataTypes } = require('sequelize');
const db = require('../configuraciones/db'); // Asegúrate de que la ruta sea correcta

const DimCostoBeneficio = db.define(
    'DimCostoBeneficio',
    {
        idCostoBeneficio: {
            type: DataTypes.BIGINT, // Corregido a BIGINT
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            field: 'idCostoBeneficio' // Especifica el nombre de la columna en la DB si difiere del nombre del atributo
        },
        Codigo: {
            type: DataTypes.INTEGER, // Corregido a INTEGER (int)
            allowNull: true,
            field: 'Codigo'
        },
        NombreCostoBeneficio: {
            type: DataTypes.STRING(80), // Usando STRING para nchar
            allowNull: true,
            field: 'NombreCostoBeneficio'
        },
        TipoCostoBeneficio: {
            type: DataTypes.STRING(10), // Usando STRING para nchar
            allowNull: true,
            field: 'TipoCostoBeneficio'
        },
        Zona: {
            type: DataTypes.STRING(40), // Usando STRING para nchar
            allowNull: true,
            field: 'Zona'
        },
        Zonificacion: {
            type: DataTypes.STRING(60), // Usando STRING para nchar
            allowNull: true,
            field: 'Zonificacion'
        },
        ClasiBantrab: {
            type: DataTypes.STRING(60), // Usando STRING para nchar
            allowNull: true,
            field: 'ClasiBantrab'
        }
    },
    {
        timestamps: false,
        tableName: 'DimCostoBeneficio',
    }
);

module.exports = DimCostoBeneficio;