/* METODO QUE LISTA TODOS LOS USUARIOS*/
exports.list = (req, res, next) => {
  req.getConnection((e, conn) => {
    try {
      conn.query("SELECT * FROM Employee", (e, employees) => {
        if (employees) {
          res.status(200).send(employees);
        } else {
          res.status(400).send({
            message: "No se encontraron usuarios",
          });
        }
      });
    } catch (e) {
      res.status(500).send({
        message: "Error al cargar los registros",
      });
      next(e);
    }
  });
};

/*METODO PARA GENERAR FECHAS */
const getDate = () => {
  const date = new Date();
  return JSON.stringify(date);
};

/* METODO PARA CREAR UN EMPLEADO*/
exports.add = (req, res) => {
  const datos = req.body;
  datos.created = getDate();
  req.getConnection((e, conn) => {
    conn.query("INSERT INTO Employee SET ?", [datos], (e, registro) => {
      if (e) {
        res.status(500).send({
          message: "Error al crear el usuario.",
        });
      } else {
        res.status(200).json(registro);
      }
    });
  });
};

// /* METODO PARA ACTUALIZAR LOS DATOS DE UN EMPLEADO*/
exports.update = (req, res) => {
  const datos = req.body;
  datos.updated = getDate();
  req.getConnection((e, conn) => {
    conn.query(
      "UPDATE Employee SET ? WHERE employeeid = ?",
      [datos, datos.employeeid],
      (e, registro) => {
        if (e) {
          res.status(500).send({
            message: "Error al actualizar el empleado",
          });
        } else {
          res.status(200).json(registro);
        }
      }
    );
  });
};

/* METODO PARA CREAR UN EMPLEADO*/
exports.delete = (req, res) => {
  const employeeid = req.params.id;

  req.getConnection((e, conn) => {
    conn.query(
      "DELETE FROM Employee WHERE employeeid = ?",
      [employeeid],
      (e, registro) => {
        if (e) {
          res.status(500).send({
            message: "No se pudo actualizar el cliente en la base de datos.",
          });
        } else {
          res.status(200).json(registro);
        }
      }
    );
  });
};

/*METODO PARA ACTIVAR UN USUARIO*/
exports.activate = (req, res) => {
  const datos = req.body;
  datos.updated = getDate();
  req.getConnection((e, conn) => {
    conn.query(
      "UPDATE Employee SET status = 1, updated = ? WHERE employeeid = ?",
      [datos.updated, datos.employeeid],
      (e, registro) => {
        if (e) {
          res.status(500).send({
            message: "Error al actualizar el empleado.",
          });
        } else {
          res.status(200).json(registro);
        }
      }
    );
  });
};

/*METODO PARA DESACTIVAR UN USUARIO*/
exports.deactivate = (req, res) => {
  const datos = req.body;
  datos.updated = getDate();
  req.getConnection((e, conn) => {
    conn.query(
      "UPDATE Employee SET status = 0 , updated = ? WHERE employeeid = ?",
      [datos.updated, datos.employeeid],
      (e, registro) => {
        if (e) {
          res.status(500).send({
            message: "Error al actualizar el empleado",
          });
        } else {
          res.status(200).json(registro);
        }
      }
    );
  });
};

/*METODO QUE ACTIVA EL REGISTRO CUANTO EL USUARIO OPRIME EL BOTON DEL MAIL*/
exports.activatemail = (req, res) => {
  const employeeid = req.params.id;
  const fecha = getDate();
  req.getConnection((e, conn) => {
    conn.query(
      "UPDATE Employee SET status = 1, updated = ? WHERE employeeid = ?",
      [fecha, employeeid],
      (e, registro) => {
        if (e) {
          res.status(500).send({
            message: "Error al actualizar el empleado.",
          });
        } else {
          res.status(200).json(registro);
        }
      }
    );
  });
};
