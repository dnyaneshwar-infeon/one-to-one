
const { Module } = require('module');
const { Model } = require('sequelize');
const Sequelize= require('sequelize');

const sequelize=new Sequelize("practice" , "root" , "" ,{
    host:"localhost",
    dialect:"mysql"
});

module.exports=sequelize;
