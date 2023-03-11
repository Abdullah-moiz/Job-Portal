import mongoose from 'mongoose';
import User from './User';

const JobSchema = new mongoose.Schema({

    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
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
    job_category: {
        type: String,
        required: true,
    },
    job_type: {
        type: String,
        required: true,
        trim : true,
    },
    job_experience: {
        type: String,
        required: true,
    },
    job_vacancy: {
        type: Number,
        required: true,
    },
    job_deadline: {
        type: Date,
        required: true,
    },


},{timestamps: true});

const Job =  mongoose.models.Job || mongoose.model('Job', JobSchema);

export default Job;