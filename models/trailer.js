'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Trailer extends Model {
    get comedyTrailer() {
      Trailer.findAll({
        where : {
          category : 'comedy'
        }
      })
      .then(trailers => {
        return trailers
      })
    }

    get actionTrailer() {
      Trailer.findAll({
        where : {
          category : 'action'
        }
      })
      .then(trailers => {
        return trailers
      })
    }
    get tvseriesTrailer() {
      Trailer.findAll({
        where : {
          category : 'tvseries'
        }
      })
      .then(trailers => {
        return trailers
      })
    }

    static addMoreCategory(newCategory) {
      Trailer.update({
        category : newCategory,
        where : {
          id : req.params.id
        }
      })
      .then(trailer => {
        return trailer
      })
    }
  }

  Trailer.init({
    title: DataTypes.STRING,
    link: DataTypes.STRING,
    category: DataTypes.STRING,
    comment : DataTypes.STRING
  }, { sequelize })
 
  Trailer.associate = function(models) {
    // associations can be defined here
    Trailer.belongsToMany(models.User, { through : models.Review })
    Trailer.hasMany(models.Review)
  };
  return Trailer;
};