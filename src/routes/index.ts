import express, { Request,Response,NextFunction } from "express";
var guardControllers = require( '../controllers/guardController');
var router = express.Router();


//GET Routes


//get  Guards List
router.get('/', guardControllers.getGuards);


//POST Routes
router.post('/client', guardControllers.addGuard);

//PUT Routes
router.put('/client/:id', guardControllers.updateGuard);

//DELETE Routes
router.delete('/client/:id', guardControllers.delete);

module.exports = router;
