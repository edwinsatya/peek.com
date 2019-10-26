'use strict';
const hashPassword = require('../helpers/hashPassword')
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class User extends Model {}

  User.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: `email format is incorrect`
        },
        isUnique() {
          return User.findOne({
              where: {
                email: this.email
              }
            })
            .then(user => {
              if (user && user.id === this.id) {
                return true
              } else if (!user) {
                return true
              } else {
                throw (`Email is already registered`)
              }
            })
        }
      }
    },
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    salt: DataTypes.STRING
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user, options) => {
        let secret = `selamat-menikmati-trailernya-ya${user.name}`
        let password = user.password
        const hashed = hashPassword(password, secret)
        user.setDataValue('password', hashed)
        user.setDataValue('salt', secret)
      }
    }
  })

  User.associate = function (models) {
    // associations can be defined here
    User.belongsToMany(models.Trailer, {
      through: models.Review
    })
    User.hasMany(models.Review)
  };
  return User;
};