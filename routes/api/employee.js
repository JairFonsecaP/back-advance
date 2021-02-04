/*IMPORTAR MODULOS*/
const router = require("express").Router();
const employeeController = require("../../controllers/employeeController");

/*DEFINICIÓN DE RUTAS AL CONTROLADOR*/
router.get("/list", employeeController.list); // http://wwww....../api/employee/list
router.post("/add", employeeController.add); // http://wwww....../api/employee/add
router.put("/update", employeeController.update); // http://wwww....../api/employee/update
router.put("/activate", employeeController.activate); // http://wwww....../api/employee/activate
router.put("/deactivate", employeeController.deactivate); // http://wwww....../api/employee/deactivate
router.delete("/delete/:id", employeeController.delete); // http://wwww....../api/employee/delete
router.get("/activatemail/:id", employeeController.activatemail); // http://wwww....../api/employee/activatemail

/*EXPORTAR TODAS LAS RUTAS GENERADAS DE EMPLOYEE*/
module.exports = router;
