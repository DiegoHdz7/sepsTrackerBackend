import mongoose, { Schema } from "mongoose";
import IGuard from "../interfaces/guard";

//create book model
let GuardSchema: Schema = new Schema(
    {
       
        photoPath:{type: String},
        name: {type: String, required: true},
        lastname: {type: String, required: true},
        rfc:{type: String, required: true},
        clientAddress:{type: String, required: true},

        contact: {
            phoneNumber: {type: Number},
            email: {type: String}
        },
        workingAt:{type: String}
    },
    {
        timestamps:true
    }
);

export default mongoose.model<IGuard>('Guard', GuardSchema);
