module.exports = (sequelize, DataTypes) =>{
    const RefreshToken = sequelize.define('RefreshToken', {
        id:{
            type:DataTypes.STRING,
            primaryKey:true,
            allowNull:false
        },
        token:{
            type: DataTypes.TEXT,
            allowNull:false
        },
        user_id:{
            type:DataTypes.STRING,
            allowNull:false
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
        tableName: 'refresh_tokens',
        timestamp: true
    });

    return RefreshToken;
}