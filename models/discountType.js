
module.exports = (sequelize, DataTypes) => {
    const DiscountType = sequelize.define('DiscountType', {
      type: DataTypes.STRING, // 'fixed' or 'percent'
      value: DataTypes.FLOAT,
    });
  
    DiscountType.associate = (models) => {
      DiscountType.belongsTo(models.Coupon);
    };
  
    return DiscountType;
  };