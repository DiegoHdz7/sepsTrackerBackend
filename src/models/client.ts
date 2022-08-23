//import mongoose, { Schema } from "mongoose";
import mongoose, {Schema, Document, Types } from 'mongoose';
import IClient from "../interfaces/client";
import Guard from "./guard";

//Getting the schema from the model Guard
var GuardSchema = require('mongoose').model('Guard').schema;

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
        guards: {type: GuardSchema}
    },

    {
        timestamps: true
    }
);

export default mongoose.model<IClient>('Client', ClientSchema);
