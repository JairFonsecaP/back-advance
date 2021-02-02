/*CREA LA BASE DE DATOS*/
CREATE DATABASE data;

/*USA LA BASE DE DATOS*/
use data;

/*CREA LAS TABLAS*/
CREATE TABLE Employee(
    employeeid INT AUTO_INCREMENT,
    firstname VARCHAR(70),
    lastname VARCHAR(140),
    gender INT(1),
    email VARCHAR(32),
    phonenumber VARCHAR(15),
    address VARCHAR(70),
    documenttype VARCHAR(25),
    documentnumber VARCHAR(15),
    status INT(1),
    created DATETIME,
    updated DATETIME,
    PRIMARY KEY(employeeid)
);

CREATE TABLE EmployeeAccounts(
    employeeaccountid INT(10) AUTO_INCREMENT PRIMARY KEY,
    employeeid INT,
    bankname VARCHAR(70),
    documenttype VARCHAR(25),
    accountnumber VARCHAR(50),
    status int(2),
    FOREIGN KEY (employeeid) REFERENCES Employee(employeeid)
);

CREATE TABLE CompanyEmployee(
    companyemployeeid INT(8) AUTO_INCREMENT PRIMARY KEY,
    employeeid INT,
    company VARCHAR(70),
    companyemail VARCHAR(32),
    salary FLOAT,
    workstartdate DATE,
    workenddate DATE,
    FOREIGN KEY (employeeid) REFERENCES Employee(employeeid)
);
/*INSERTAR REGISTROS EN TABLA EMPLOYEE*/
INSERT INTO Employee(firstname, lastname, gender, email, phonenumber, address, documenttype, documentnumber, status) 
VALUES ("Mateo","Carvajal", "0","mateo@gmail.com","+58755555","calle 1","Cedula","154444444",0);

/*INSERTAR REGISTROS EN TABLA EMPLOYEEACCOUNT*/
INSERT INTO EmployeeAccounts(employeeaccountid, employeeid, bankname, documenttype, accountnumber, status) VALUES 
(20078,9,"HSBC","Cedula","54874-8587-858","0");

/*INSERTAR REGISTROS EN TABLA COMPANYEMPLOYEE*/
INSERT INTO CompanyEmployee(companyemployeeid, employeeid, company, companyemail, salary, workstartdate) 
VALUES (15487748,9,"Advance","advance@gamil.com",1500000,"2021-01-06");

/*ELIMINAR UN REGISTRO DE LA TABLA EMPLOYEE*/
DELETE FROM Employee 
WHERE employeeid = 6;

/*CONSULTA QUE MUESTRA EL NOMBRE Y APELLIDO DE CADA PERSONA GANA MAS DE $1.000.000 
*Y LO ORDENA DEL QUE MAS GANA AL QUE MENOS GANA TAMBIÉN MUESTRA 
*EN DONDE TRABAJA Y EN QUE BANCO TIENE CUENTA
*/
SELECT firstname, lastname, company, salary, bankname
FROM Employee INNER JOIN EmployeeAccounts  ON Employee.employeeid = EmployeeAccounts.employeeid
			  INNER JOIN CompanyEmployee ON Employee.employeeid = CompanyEmployee.employeeid
WHERE salary > 1000000
ORDER BY salary DESC 

/*CONSULTA QUE FILTRA A TODOS LOS REGISTROS DE TABLA EMPLOYEE
QUE EN SU NOMBRE SE ENCUENTREN LAS LETRAS "AR"*/
SELECT * FROM Employee
WHERE firstname LIKE '%AR%'

/*CONSULTA QUE ORDENA LOS REGISTROS DE LA TABLA EMPLOYEE ORDENADOS ALFABETICAMENTE*/
SELECT * FROM Employee 
ORDER BY lastname ASC;

/*CONSULTA QUE DEVUELVE LA CANTIDAD DE EMPLEADOS QUE TIENE CADA COMPAÑIA*/
SELECT company, COUNT(company) AS Cantidad_de_Empleados
FROM CompanyEmployee
GROUP BY company