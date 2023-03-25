import ConnectDB from '@/DB/connectDB';
import Joi from 'joi';
import AppliedJob from '@/models/ApplyJob';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path'

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    about: Joi.string().required(),
    job: Joi.string().required(),
    user: Joi.string().required(),
});

export const config = {
    api: {
        bodyParser: false,
    },
};




export default async (req, res) => {
    await ConnectDB();


    try {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            if (err) {
                console.error('Error', err)
                throw err
            }
            const oldPath = files.cv.filepath;
            console.log(oldPath)
            const fileName = files.cv.originalFilename;
            console.log(fileName)
            
            const tempPath = path.join(process.cwd(), 'public', 'uploads', fileName + '.temp');
            fs.renameSync(oldPath, tempPath);
            fs.renameSync(tempPath, newPath);


            const jobApplication = {
                name: fields.name,
                email: fields.email,
                about: fields.about,
                job: fields.job,
                user: fields.user,
                cv: fileName,
            };

            console.log(jobApplication)

            const { error } = schema.validate(jobApplication);
            if (error) return res.status(401).json({ success: false, message: error.details[0].message.replace(/['"]+/g, '') });

            const newJobApplication = AppliedJob.create(jobApplication);
            return res.status(200).json({ success: true, message: 'Job application submitted successfully' });


        })
    } catch (error) {

        console.log('error in apply job (server) => ', error);
        return res.status(500).json({ success: false, message: 'something went wrong' });
    }







}

