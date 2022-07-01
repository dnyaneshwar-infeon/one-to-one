const { Sequelize , DataTypes, INTEGER }=require('sequelize');

const db=require('../util/connection');
const product = require('./product');

const customer=db.define("customer" , {
    cust_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primeryKey:true,
        //autoIncrement:true
    },
    cust_name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    cust_city:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    cust_email:{
        type:DataTypes.STRING,
        allowNull:true
    }
});
customer.hasOne(product, {foreignKey:"cust_pro"});
product.belongsTo(customer);
module.exports=customer;