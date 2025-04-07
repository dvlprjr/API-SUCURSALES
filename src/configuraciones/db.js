const { Sequelize } = require("sequelize");
require("dotenv").config({ path: "../../../.env" }); // Especifica la ruta al archivo .env

const db = new Sequelize(
    process.env.BASE_NOMBRE,
    process.env.BASE_USUARIO, 
    process.env.BASE_CONTRASENA,
    {
        host: process.env.BASE_SERVIDOR,
        dialect: process.env.BASE_DIALECT || "mssql",
        port: process.env.BASE_PORT || 1433,
        dialectOptions: {
            options: {
                trustedConnection: true,
                encrypt: false, // Considerar true en producción
                trustServerCertificate: true, // Considerar false en producción
            },
        },
    }
);

module.exports = db;
