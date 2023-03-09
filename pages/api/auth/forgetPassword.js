import ConnectDB from '@/DB/connectDB';
import User from '@/models/User';
import Joi from 'joi';
import { hash } from 'bcryptjs';


const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
});


export default async (req, res) => {
    await ConnectDB();

    const { email, password} = req.body;
    const { error } = schema.validate({ email, password });

    if (error) return res.status(401).json({ success: false, message: error.details[0].message.replace(/['"]+/g, '') });

    try {
        const ifExist = await User.findOne({ email });
        if(!ifExist) return res.status(404).json({ success: false, message: "Email Not Found" });
        const hashedPassword = await hash(password, 12)
        const updatePassword =  await User.findOneAndUpdate({email  , password : hashedPassword });
        return res.status(201).json({ success: true, message: "Password Updated Successfully"  });
        
    } catch (error) {
        console.log('Error in forget Password (server) => ', error);
        return res.status(500).json({ success: false, message: "Something Went Wrong Please Retry Later !" })
    }
}

