
module.exports = (sequelize, DataTypes) => {
    const Rule = sequelize.define('Rule', {
      minCartTotalPrice: DataTypes.FLOAT,
      minItemCount: DataTypes.INTEGER,
    });
  
    Rule.associate = (models) => {
      Rule.belongsTo(models.Coupon);
    };
  
    return Rule;
  };