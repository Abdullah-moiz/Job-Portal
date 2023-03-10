import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    new_job: {
        type: Boolean,
        default: true,
    },

},{timestamps: true});

const Job =  mongoose.models.Job || mongoose.model('Job', JobSchema);

export default Job;