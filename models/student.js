'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Student.init({
    _id: DataTypes.INTEGER,
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    date: DataTypes.STRING,
    toan: DataTypes.FLOAT,
    vatli: DataTypes.FLOAT,
    nguvan: DataTypes.FLOAT,
    sinhhoc: DataTypes.FLOAT,
    tienganh: DataTypes.FLOAT,
    tiengnga: DataTypes.FLOAT,
    lichsu: DataTypes.FLOAT,
    nguvan: DataTypes.FLOAT,
    tiengduc: DataTypes.FLOAT,
    tiengphap: DataTypes.FLOAT,
    tiengtrung: DataTypes.FLOAT,
    hoahoc: DataTypes.FLOAT,
    tiengnhat: DataTypes.FLOAT,
    diali: DataTypes.FLOAT,
    gdcd: DataTypes.FLOAT,
    khxh: DataTypes.FLOAT,
    khtn: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};