const { Module } = require('module');
const { Sequelize , DataTypes }=require('sequelize');

const db=require('../util/connection');

const product=db.define("product" , {
    pro_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    pro_name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    pro_type:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    pro_cost:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }
});


module.exports=product;