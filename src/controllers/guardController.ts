import express, { Request, Response, NextFunction } from "express";
import { type } from "os";
import Guard from "../models/guard";
import IGuard from "../interfaces/guard";


//importing model

module.exports.getGuards = async (req: Request, res: Response, next: NextFunction) => {

    console.log("Entered /guards");

    try{
        await Guard.find().exec((err: any, guards: any) => {
            if (err) {
                res.status(400).send('error trying to save the record');
    
            } else {
                res.status(201);
                console.log(guards);
                res.json(guards);
    
            }
        });
    

    }

    catch (error:any){
        console.log(error);

    }

   
}

module.exports.addGuard = async (req: Request, res: Response, next: NextFunction) => {

    /*
     /*
         photoPath:{type: String},
        name: {type: String, required: true},
        lastname: {type: String, required: true},
        rfc:{type: String, required: true},
        clientLocation:{type: String, required: true},

        contact: {
            phoneNumber: {type: Number},
            email: {type: String}
        },
        workingAt:{type: String}
        */
     
    const newGuard = new Guard({
        photoPath:req.body.photoPath,
        name: req.body.name,
        lastname: req.body.lastname,
        rfc:req.body.rfc,
        clientAddress:req.body.clientAddress,
        contact: {
            email: req.body.email,
            phoneNumber: req.body.phoneNumber

        },
        workingAt: req.body.workingAt

    });

    await newGuard.save((err: any) => {
        if (err) {
            console.log(err);
            res.status(400).send('body syntax error');

        } else {
            res.status(201).send('Guard added successfuly');

        }


    });

}

module.exports.updateGuard = async (req: Request, res: Response, next: NextFunction) => {
    try {
        //"_id" :req.params.id,
        const id = req.params.id;

        const guardToUpdate = new Guard({
            _id:id,
            photoPath:req.body.photoPath,
            name: req.body.name,
            lastname: req.body.lastname,
            rfc:req.body.rfc,
            clientAddress:req.body.clientAddress,
            contact: {
                email: req.body.email,
                phoneNumber: req.body.phoneNumber
    
            },
            workingAt: req.body.workingAt
    
        });

        Guard.updateOne({ _id: id }, guardToUpdate, (err: any) => { //updating the document that matches the id with the previous obj

            if (err) {
                console.log(err);
                res.status(400).send('body syntax error');
            } else {
                res.status(201).send('Guard updated successfuly');
            }

        })

    } catch (e:any) {
        console.log(e);
        

    }
}

module.exports.delete =  (req:Request, res:Response, next:NextFunction) => {
    let id = req.params.id;
    Guard.remove({_id:id}, (err:any) =>{      //removing document that matched the _id
        if(err){
            console.log(err);
            res.status(400).send('deleting record was not possible');
         }else{
             res.status(204).redirect('/guards');
         }

    })
}