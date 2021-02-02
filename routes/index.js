/*IMPORTAR MODULOS*/
const router = require("express").Router();
const apiRouterEmployee = require("./api/employee");
const apiRouterMail = require("./api/mail");

/*DIRIGIR A DIFERENTES CONTROLADORES*/
router.use("/employee", apiRouterEmployee);
router.use("/mail", apiRouterMail);

/*EXPORTAR ROUTER*/
module.exports = router;
