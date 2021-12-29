import mongoose from 'mongoose';
const DOCUMUNET_NAME = 'Coach';
const COLLECTION_NAME = 'coaches';

const coachSchema = new mongoose.Schema({
    firstName: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    lastName: {
        type: mongoose.Schema.Types.String,
        required: false,
    },
    nationality: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
}, {
    timestamps: true,

});

export const CoachModel = mongoose.model(DOCUMUNET_NAME, coachSchema, COLLECTION_NAME);