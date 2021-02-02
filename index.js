/* IMPORTACIONES DE MODULOS*/
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes");
const path = require("path");
const morgan = require("morgan");
const mysql = require("mysql");
const myConnection = require("express-myconnection");
const config = require("./config/config");
const cors = require("cors");
/*INSTANCIANDO EXPRESS*/
const app = express();

app.use(morgan("dev"));
/*SE USA CORS PARA PODER HACER PETICIONES CURZADAS*/
app.use(cors());
/*CONECCION A LA BASE DE DATOS*/
app.use(myConnection(mysql, config, "single"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

/*IMPORTA LAS RUTAS*/
app.use("/api", router);

/*ASIGNACION DE PUERTO*/
app.set("port", process.env.PORT || 3030);

app.listen(app.get("port"), () => {
  console.log("Server on port " + app.get("port") + " on dev");
});
