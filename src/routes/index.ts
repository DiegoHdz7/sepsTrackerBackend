import express, { Request,Response,NextFunction } from "express";
var clientControllers = require( '../controllers/indexController');
var router = express.Router();


//GET Routes


//get  Guards List
router.get('/', clientControllers.getClients);


//POST Routes
router.post('/client', clientControllers.addClient);

//PUT Routes
router.put('/client/:id', clientControllers.updateClient);

//DELETE Routes
router.delete('/client/:id', clientControllers.delete);

module.exports = router;
