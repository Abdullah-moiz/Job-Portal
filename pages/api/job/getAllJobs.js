import ConnectDB from '@/DB/connectDB';
import Job from '@/models/Job';

export default async (req, res) => {
    await ConnectDB();
    const { method } = req;
    switch (method) {
        case 'GET':
            await getAllJobs(req, res);
            break;
        default:
            res.status(400).json({ success: false, message: 'Invalid Request' });
    }
}

const getAllJobs = async (req, res) => {
    await ConnectDB();
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const skip = (page - 1) * limit;

        const jobs = await Job.find({})
            .populate('user')
            .skip(skip)
            .limit(limit);

        const total = await Job.countDocuments();

        return res.status(200).json({
            success: true,
            data: jobs,
            total,
            page,
            totalPages: Math.ceil(total / limit)
        });
    } catch (error) {
        console.log('Error in getting a job (server) => ', error);
        return res.status(500).json({ success: false, message: "Something Went Wrong Please Retry login  !" });
    }
}