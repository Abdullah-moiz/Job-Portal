import ConnectDB from '@/DB/connectDB';
import AppliedJob from '@/models/ApplyJob';





export default async (req, res) => {
    await ConnectDB();
    const data = req.query;
    const id = data?.id

    if(!id) return res.status(400).json({ success: false, message: "Please Login" })

    try {
        const getApplicationDetails = await AppliedJob.findById(id).populate('job').populate('user')
        return res.status(200).json({ success: true, data: getApplicationDetails })
    } catch (error) {
        console.log('Error in getting a specifed Job job (server) => ', error);
        return res.status(403).json({ success: false, message: "Something Went Wrong Please Retry login  !" })
    }
}