import mongoose from 'mongoose';
const DOCUMUNET_NAME = 'Stadium';
const COLLECTION_NAME = 'stadiums';

const stadiumSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    location: {
        type: mongoose.Schema.Types.String,
        required: false,
    },
    capacity: {
        type: mongoose.Schema.Types.Number,
        required: false,
    },
}, {
    timestamps: true,

});

export const StadiumModel = mongoose.model(DOCUMUNET_NAME, stadiumSchema, COLLECTION_NAME);