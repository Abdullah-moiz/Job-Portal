import ConnectDB from '@/DB/connectDB';
import AppliedJob from '@/models/ApplyJob';
import Joi from 'joi';


const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    about: Joi.string().required(),
    job: Joi.string().required(),
    user: Joi.string().required(),
});



export default async (req, res) => {
    await ConnectDB();

    const data = req.body;
    const { name, email, job, user, about} = data;
    const { error } = schema.validate({ name, email, job, user, about , cv });

    console.log(data)
    if (error) return res.status(401).json({ success: false, message: error.details[0].message.replace(/['"]+/g, '') });


    // try {
    //     const creatingUser =  await AppliedJob.create({user , title,description , salary , company , email , job_category , job_type , job_experience , job_vacancy , job_deadline });
    //     return res.status(200).json({ success: true, message: "Job Posted Successfully !" })
    // } catch (error) {
    //     console.log('Error in posting a job (server) => ', error);
    //     return res.status(500).json({ success: false, message: "Something Went Wrong Please Retry Later !" })
    // }
}

