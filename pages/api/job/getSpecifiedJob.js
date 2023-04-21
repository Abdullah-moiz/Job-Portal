import ConnectDB from '@/DB/connectDB';
import Job from '@/models/Job';



export default async (req, res) => {
    await ConnectDB();
    const { method } = req;
    switch (method) {
        case 'GET':

            await getSpecifiedJob(req, res);

            break;
        default:
            res.status(400).json({ success: false, message: 'Invalid Request' });
    }
}


const getSpecifiedJob = async (req, res) => {
    await ConnectDB();
    const data = req.query;
    const id = data?.id

    if (!id) return res.status(400).json({ success: false, message: "Please Login" })

    try {
        const gettingjobs = await Job.findById(id).populate('user');
        return res.status(200).json({ success: true, data: gettingjobs })
    } catch (error) {
        console.log('Error in getting a specifed Job job (server) => ', error);
        return res.status(403).json({ success: false, message: "Something Went Wrong Please Retry login !" })
    }
}