import mongoose from 'mongoose';

const matchSchema = new mongoose.Schema({
  userA: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
    required: true,
  },
  userB: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
    required: true,
  },
  matchedOn: {
    type: Date,
    default: Date.now,
  },
});

const Match = mongoose.model('Match', matchSchema);

export default Match;
