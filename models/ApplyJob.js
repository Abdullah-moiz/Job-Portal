import mongoose from 'mongoose';
import User from './User';
import Job from './Job';

const ApplyJobSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    cv: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'pending',
        enum: ['pending', 'accepted', 'rejected']
    }
}, { timestamps: true });

const AppliedJob = mongoose.models.AppliedJobStatus || mongoose.model('AppliedJobStatus', ApplyJobSchema);

export default AppliedJob;