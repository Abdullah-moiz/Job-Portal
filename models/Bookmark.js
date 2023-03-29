import mongoose from 'mongoose';
import User from './User';
import Job from './Job'

const bookMarkSchema = new mongoose.Schema({

    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    job : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
    },


},{timestamps: true});

const bookMarkJob =  mongoose.models.BookMarkJob || mongoose.model('BookMarkJob', bookMarkSchema);

export default bookMarkJob;