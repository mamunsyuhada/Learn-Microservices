module.exports = (sequelize, DataTypes) =>{
    const User = sequelize.define('User', {
        id:{
            type: DataTypes.STRING,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false
        },
        password: {
            type:DataTypes.STRING,
            allowNull:false
        },
        role:{
            type: DataTypes.ENUM,
            values:['admin', 'student'],
            allowNull: false
        },
        avatar:{
            type:DataTypes.STRING,
            allowNull:true
        },
        profession:{
            type:DataTypes.STRING,
            allowNull:true
        },
        createdAt: {
            type:DataTypes.DATE,
            allowNull:false
        },
        updatedAt: {
            type:DataTypes.DATE,
            allowNull:false
        }
    },
    {
        tableName: 'users',
        timestamp: true
    });

    return User;
}