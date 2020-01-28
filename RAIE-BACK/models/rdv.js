'use strict'

module.exports = (sequelize, DataTypes) => {
    const Rdv = sequelize.define(   
        'rdv',
        {        
            idRdv: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
            nomClient: DataTypes.STRING,
            prenomClient: DataTypes.STRING,
            nomCoiffeur: DataTypes.STRING,
            dateRdv: DataTypes.DATE,
        }
    )
    return Rdv
}