import mongoose from 'mongoose';

var FeelSchema = new mongoose.Schema({
    feelText: {
    	type: String,
    	required: true,
    },
    fromUser: {
    	type: mongoose.Schema.Types.String,
    	ref: "User",
    	required: true,
    },
    likes: {
    	type: Number,
    	required: true,
    }
});

module.exports = mongoose.model('Feel', FeelSchema);