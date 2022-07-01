const express=require('express');
const app=express();
const con=require('./util/connection');
const table=require('./controller/all');
const table1=require('./controller/all');
const insertpro=require('./controller/all');
const insertcust=require('./controller/all');
const findcust=require('./controller/all');
const update=require('./controller/all');

const initApp=async()=>
{
    console.log("Testing DAtabase Connection");
    try
    {
        await con.authenticate();
        console.log("Database Connected");
    }catch(error)
    {
        console.log("unable to Create Connection");
    }
}
initApp();
app.get('/table' , table.table);
app.get('/table1' , table1.table1);
app.post('/insertpro' , insertpro.insertpro);
app.post('/insertcust' , insertcust.insertcust);
app.get('/findcust' , findcust.findcust);
app.patch('/update' , update.update);

app.listen(8000, ()=>{console.log(`Listeninng on port ${8000}`);});

