import{Document} from 'mongoose';

export default interface IClient extends Document{
    
        codeName:string,
        name: string,
        rfc: string,
        address: string,
        logoPath: string,
        contact: {
            phoneNumber: Number,
            email: string
        }

}