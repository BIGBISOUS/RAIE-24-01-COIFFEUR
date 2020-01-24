'use strict'

module.exports = (sequelize, DataTypes) => {
    console.log(DataTypes);
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
            dateRdv: Sequelize.DATE,
        }
    )
    return Rdv
}