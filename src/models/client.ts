import mongoose, { Schema } from "mongoose";
import IClient from "../interfaces/client";
import IGuard from "../interfaces/guard";
import guard from "./guard";


//type guard = IGuard;



//create book model
let ClientSchema: Schema = new Schema(

  

    {
        codeName: { type: String },
        name: { type: String },
        rfc: { type: String },
        address: { type: String },
        logoPath: { type: String },
        contact: {
            phoneNumber: { type: Number },
            email: { type: String }
        },
        //guards: {type: [IGuard]}
    },

    {
        timestamps: true
    }

     
        

);

export default mongoose.model<IClient>('Client', ClientSchema);
