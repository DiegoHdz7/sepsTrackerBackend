import{Document} from 'mongoose';

export default interface IGuard extends Document{
    
        name: string,
        lastname: string,
        contact: {
            phoneNumber: Number,
            email: string
        },
        workingAt: String
    
}