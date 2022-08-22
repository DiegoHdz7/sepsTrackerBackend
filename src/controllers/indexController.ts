import express, { Request, Response, NextFunction } from "express";
import { type } from "os";
import Client from "../models/client";
import IClient from "../interfaces/client";


//importing model

module.exports.getClients = async (req: Request, res: Response, next: NextFunction) => {

    console.log("Entered /getClients");

    try{
        await Client.find().exec((err: any, clients: any) => {
            if (err) {
                res.status(400).send('error trying to save the record');
    
            } else {
                res.status(201);
                console.log(clients);
                res.json(clients);
    
            }
        });

    }
    catch(error:any){
    }  
}


module.exports.addClient = async (req: Request, res: Response, next: NextFunction) => {
    /*

    codeName: { type: String },
        name: { type: String },
        rfc: { type: String },
        address: { type: String },
        logoPath: { type: String },
        contact: {
            phoneNumber: { type: Number },
            email: { type: String }
        },
        guards: {type: [guard]}
    */

    try{
        const newClient = new Client({
            codeName:req.body.codeName,
            name: req.body.name,
            rfc: req.body.rfc,
            address:req.body.address,
            logoPath: req.body.logoPath,
           // guards:req.body.guard,
            contact: {
                email: req.body.email,
                phoneNumber: req.body.phoneNumber
    
            }
    
        });
    
        await newClient.save((err: any) => {
            if (err) {
                console.log(err);
                res.status(400).send('body syntax error');
    
            } else {
                res.status(201).send('Client added successfuly');
    
            }
    
    
        });

    }

    catch(error: any){
        console.log(error.message);
    }
     
   

}




