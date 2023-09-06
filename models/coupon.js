"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Coupon extends Model {
    static associate(models) {
      Coupon.associate = (models) => {
        Coupon.Rule = Coupon.hasMany(models.rule);
        Coupon.DiscountType = Coupon.hasMany(models.discountType);
      };
    }
  }
  Coupon.init(
    {
      code: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Coupon",
    }
  );
  return Coupon;
};
