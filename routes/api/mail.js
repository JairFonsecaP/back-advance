/*IMPORTAR MODULOS*/
const router = require("express").Router();
const mailController = require("../../controllers/mailController");

/*DEFINICIÓN DE RUTAS AL CONTROLADOR*/

router.post("/send", mailController.send); // http://wwww....../api/mail/send

/*EXPORTAR TODAS LAS RUTAS GENERADAS DE EMAIL*/
module.exports = router;
