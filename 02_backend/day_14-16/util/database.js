const Sequelize=require('sequelize')

const sequelize=new Sequelize("session","postgres","sarvesh111@",{
    host:"localhost",
    dialect:"postgres"
})


module.exports=sequelize