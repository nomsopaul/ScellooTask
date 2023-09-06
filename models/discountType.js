"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class discountType extends Model {
    static associate(models) {
      discountType.associate = (models) => {
        discountType.belongsTo(models.Coupon);
      };
    }
  }
  discountType.init(
    {
      type: DataTypes.STRING,
      value: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "discountType",
    }
  );
  return discountType;
};
