/*IMPORTAR MODULOS*/
const router = require("express").Router();
const employeeController = require("../../controllers/employeeController");

/*DEFINICIÓN DE RUTAS AL CONTROLADOR*/
router.get("/list", employeeController.list);
router.post("/add", employeeController.add);
router.put("/update", employeeController.update);
router.put("/activate", employeeController.activate);
router.put("/deactivate", employeeController.deactivate);
router.delete("/delete/:id", employeeController.delete);
router.get("/activatemail/:id", employeeController.activatemail);

/*EXPORTAR TODAS LAS RUTAS GENERADAS DE EMPLOYEE*/
module.exports = router;
