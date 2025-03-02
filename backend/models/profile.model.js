import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    firstName : {type: String, required: true},
    lastName : {type: String, required: true},
    dob: {type: Date, required: true},
    height: {
        feet: { type: Number, required: true },
        inches: { type: Number, required: true },
    },
    religion: {type: String, required: true},
    gender: {type: String, required: true},
    // gender: {type: String, required: true, enum:["male","female"]},
    city: {type: String, required: true},
    state: {type: String, required: true},
    country: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    contact: {type: String, required: true},
    maritalStatus: {type: String, required: true},
    // maritalStatus: {type: String, required: true,enum:["never married","seperated","divorced"]},
    community: {type: String, required: true},
    community_preference: {type: String, required: true},
    photos: [
        {
          url: { type: String, required: true }, // Store the URL of the photo
        },
      ],
    timeOfBirth: { type: String, required: false },
    placeOfBirth: {type: String, required: false},

},
{ timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
