
module.exports = (sequelize, DataTypes) => {
    const Coupon = sequelize.define('Coupon', {
      code: DataTypes.STRING,
    });
  
    Coupon.associate = (models) => {
      Coupon.Rule = Coupon.hasMany(models.Rule);
      Coupon.DiscountType = Coupon.hasMany(models.DiscountType);
    };
  
    return Coupon;
  };