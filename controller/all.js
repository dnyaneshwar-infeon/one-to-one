

const product=require('../model/product');
const customer=require('../model/custumer');

const sequelize=require('sequelize');

const table=function(req , res)
{
    product.sync({alter:true});
    console.log("table Created");
    res.json("table Created");
}
const table1=function(req , res)
{
    customer.sync();
    console.log("table Created");
    res.json("Table Created");
}
const insertpro=function(req , res)
 {
    product.create({
        pro_id:req.query.pro_id,
        pro_name:req.query.pro_name,
        pro_type:req.query.pro_type,
        pro_cost:req.query.pro_cost,
     }).then((result)=>{
        res.json(result);
     }).catch((error)=>
     {
        console.log(error);
     })
 }
 const insertcust=function(req , res)
 {
    customer.create({
        cust_id:req.query.cust_id,
        cust_name:req.query.cust_name,
        cust_city:req.query.cust_city,
        cust_email:req.query.cust_email,
    }).then((result)=>{
        return res.json(result);
    }).catch((error)=>{
        return res.json(error);
    })
 }

 const findcust=function(req,res)
 {
    customer.findOne({
        attribute:["pro_id" , "pro_name" , "pro_city" , "pro_cust", "customerId"],
        where:{
            id:req.query.id,
        },
    }).then((result)=>{
        return res.json(result);
    }).catch((error)=>{
        return res.json(error);
    })
}

const update=function(req , res)
{
    product.update({
        customerId:req.query.customerId,
    },
    {
        where:{pro_id:req.query.pro_id,}
    }
    ).then((result)=>{
        return res.json(result);
    }).catch((error)=>{
        return res.json(error);
    })
}
module.exports.table=table;
module.exports.table1=table1;
module.exports.insertpro=insertpro;
module.exports.insertcust=insertcust;
module.exports.findcust=findcust;
module.exports.update=update;