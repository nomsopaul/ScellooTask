
module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
    });
  
    return Item;
  };