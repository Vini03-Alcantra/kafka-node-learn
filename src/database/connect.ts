import {Sequelize} from "sequelize"

const dbName = process.env.DB_NAME!; // passar os dados do .env para as constantes
const dbUser = process.env.DB_USER!;
const dbHost = process.env.DB_HOST!;
const dbPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    //passar os dados para o sequelize
    dialect: "postgres", //informar o tipo de banco que vamos utilizar
    host: dbHost, //o host, neste caso estamos com um banco local
  });
  
  export {sequelize};