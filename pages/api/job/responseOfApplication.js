import ConnectDB from '@/DB/connectDB';
import AppliedJob from '@/models/ApplyJob';





export default async (req, res) => {
    await ConnectDB();
    const data = req.body;
    const {status, id} = data;




    if (!id) return res.status(400).json({ success: false, message: "Please Login" })
    

    try {
        const gettingjobs = await AppliedJob.findByIdAndUpdate(id, { status }, { new: true })
        return res.status(200).json({ success: true,  message  : "Status Updated Successfully " ,data: gettingjobs })
    } catch (error) {
        console.log('Error in getting a specifed Job job (server) => ', error);
        return res.status(403).json({ success: false, message: "Something Went Wrong Please Retry Later !" })
    }
}