import ConnectDB from '@/DB/connectDB';
import bookMarkJob from '@/models/Bookmark';
import Joi from 'joi';


const schema = Joi.object({
    user: Joi.required(),
    job: Joi.required(),
});


export default async (req, res) => {
    await ConnectDB();
    const data = req.body;
    const { job , user } = data;
    console.log(data)
    const { error } = schema.validate({job , user});

    if (error) return res.status(401).json({ success: false, message: error.details[0].message.replace(/['"]+/g, '') });

    try {
        const checkAlreadyBookMarked  =  await bookMarkJob.findOne({job , user})
        if(checkAlreadyBookMarked) return res.status(401).json({success  :  false , message  : "This Job is Already in Bookmark"})

        const bookmarkingJob =  await bookMarkJob.create({job , user});
        return res.status(200).json({ success: true, message: "Job Bookmarked successfully !" })
    } catch (error) {
        console.log('Error in booking marking a job (server) => ', error);
        return res.status(500).json({ success: false, message: "Something Went Wrong Please Retry Later !" })
    }
}

