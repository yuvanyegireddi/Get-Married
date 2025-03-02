import mongoose from "mongoose";

const interestSchema = new mongoose.Schema({
    userShowingInterestId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Profile', 
        required: true 
    }, 
      interestedUserProfileId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Profile', 
            required: true 
        },
        mutual: { 
            type: Boolean, 
            default: false 
        },  
        dateOfInterest: { 
            type: Date, 
            default: Date.now 
        }, 
}, { timestamps: true });
    
const Interest = mongoose.model("Interest", interestSchema);

export default Interest;