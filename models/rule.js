"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rule extends Model {
    static associate(models) {
      rule.associate = (models) => {
        rule.belongsTo(models.Coupon);
      };
    }
  }
  rule.init(
    {
      minCartTotalPrice: DataTypes.FLOAT,
      minItemCount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "rule",
    }
  );
  return rule;
};
