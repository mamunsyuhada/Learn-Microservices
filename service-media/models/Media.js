module.exports = (sequelize, DataTypes) => {
    const Media = sequelize.define('Media', {
        id:{
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        image: {
            field:'image',
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt:{
            field:'created_at',
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt:{
            field:'updated_at',
            type: DataTypes.DATE,
            allowNull: false
        }
    },{
        tableName:'media'
    });

    return Media;
}