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
    try{

        const newClient = new Client (req.body);
    
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

module.exports.updateClient = async (req: Request, res: Response, next: NextFunction) => {
    try {
        //"_id" :req.params.id,
        const id = req.params.id;

        const clientToUpdate = new Client(req.body);

        Client.updateOne({ _id: id }, clientToUpdate, (err: any) => { //updating the document that matches the id with the previous obj

            if (err) {
                console.log(err);
                res.status(400).send('body syntax error');
            } else {
                res.status(201).send('Client updated successfuly');
            }

        })

    } catch (e:any) {
        console.log(e);
        

    }
}

module.exports.delete =  (req:Request, res:Response, next:NextFunction) => {
    let id = req.params.id;
    Client.remove({_id:id}, (err:any) =>{      //removing document that matched the _id
        if(err){
            console.log(err);
            res.status(400).send('deleting record was not possible');
         }else{
             res.status(204).redirect('/');
         }

    })
}





