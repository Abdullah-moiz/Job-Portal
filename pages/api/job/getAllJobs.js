import ConnectDB from '@/DB/connectDB';
import Job from '@/models/Job';





export default async (req, res) => {
    await ConnectDB();

    try {
        const gettingjobs  = await Job.find({}).populate('user');
        return res.status(200).json({ success: true, data : gettingjobs })
    } catch (error) {
        console.log('Error in getting a job (server) => ', error);
        return res.status(500).json({ success: false, message: "Something Went Wrong Please Retry Later !" })
    }
}