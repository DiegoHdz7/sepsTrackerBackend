import express, { Request,Response,NextFunction } from "express";
var guardControllers = require( '../controllers/guardController');
var router = express.Router();


//GET Routes


//get  Guards List
router.get('/', guardControllers.getGuards);


//POST Routes
router.post('/guard', guardControllers.addGuard);

//PUT Routes
router.put('/guard/:id', guardControllers.updateGuard);

//DELETE Routes
router.delete('/guard/:id', guardControllers.delete);

module.exports = router;
