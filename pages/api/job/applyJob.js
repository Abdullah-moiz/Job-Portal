import ConnectDB from '@/DB/connectDB';
import AppliedJob from '@/models/ApplyJob';
import Joi from 'joi';
import busboy from 'busboy';


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

    const bb = busboy({ headers: req.headers });
    bb.on('file', (name, file, info) => {
        const { filename, encoding, mimeType } = info;
        console.log(
            `File [${name}]: filename: %j, encoding: %j, mimeType: %j`,
            filename,
            encoding,
            mimeType
        );
        file.on('data', (data) => {
            console.log(`File [${name}] got ${data.length} bytes`);
        }).on('close', () => {
            console.log(`File [${name}] done`);
        });
    });
    bb.on('field', (name, val, info) => {
        console.log(`Field [${name}]: value: %j`, val);
    });
    bb.on('close', () => {
        console.log('Done parsing form!');
        res.writeHead(303, { Connection: 'close' });
        res.end();
    });
    req.pipe(bb);


}

