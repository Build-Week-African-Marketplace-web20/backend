require("dotenv").config();
module.exports = {

  development: {
   
    client: 'pg', // Tells the DBMS that you are using 
     connection: {
      host:"localhost",
      port:5432,
      user:"postgres",
      database:"store",
      password: process.env.DB_PASSWORD,
      useNullAsDefault: true,
    
    },
    migrations: {
      directory: "./migrations",
    },
     seeds: {
       directory: "./seeds",
     }
  },


};