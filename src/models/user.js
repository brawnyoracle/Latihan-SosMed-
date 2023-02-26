'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KategoriBuku extends Model{}
    KategoriBuku.init(
      {
        nama:{
          type:DataTypes.STRING(255),
          allowNull:true
        }
    })
  
  class Buku extends Model {
    static associate(models) {}
  }
  Buku.init(
    {
      buku_id:{
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      }
    },
    {
      sequelize,
      modelName: 'Buku',
    }
  );
  return Buku;
};