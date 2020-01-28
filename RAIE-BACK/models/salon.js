'use strict'

module.exports = (sequelize, DataTypes) => {
    const Salon = sequelize.define(   
        'salon',
        {        
            idSalon: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
            nomSalon: DataTypes.STRING,
            adresseSalon: DataTypes.STRING,
            nomCoiffeur: DataTypes.STRING,
        }
    )
    return Salon
}