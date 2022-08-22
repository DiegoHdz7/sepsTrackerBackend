import express, { Request,Response,NextFunction } from "express";
var clientControllers = require( '../controllers/indexController');
var router = express.Router();


//GET Routes


//get  Guards List
//router.get('/', guardControllers.getGuards);


//POST Routes
router.post('/client', clientControllers.addClient);

//PUT Routes
//router.put('/client/:id', guardControllers.updateGuard);

//DELETE Routes
//router.delete('/client/:id', guardControllers.delete);

module.exports = router;
