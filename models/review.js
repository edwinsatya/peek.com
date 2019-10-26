'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Review extends Model {
   
  }

  Review.init({
    id : {
      type : DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true
    },
    UserId: DataTypes.INTEGER,
    TrailerId: DataTypes.INTEGER,
    comment : {
      type : DataTypes.STRING,
      
    }
  }, {sequelize })
 
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User)
    Review.belongsTo(models.Trailer)
  };
  return Review;
};