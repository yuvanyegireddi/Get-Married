import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Profile from "../models/profile.model.js";
import Interest from '../models/interest.model.js';
import Match from '../models/match.model.js';

dotenv.config();


export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (email !== process.env.ADMIN_EMAIL) {
      return res.status(401).json({ message: 'Invalid admin credentials' });
    }

    const isMatch = bcrypt.compare(password, process.env.ADMIN_PASSWORD);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid admin credentials' });
    }

    const token = jwt.sign(
      { role: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } 
    );

    return res.status(200).json({
      message: 'Admin login successful',
      token,
    });
  } catch (error) {
    console.error('Error in adminLogin controller: ', error.message);
    return res.status(500).json({ error: 'Admin login failed' });
  }
};


export const viewAllProfiles = async (req, res) => {
    try {
      const profiles = await Profile.find();
      res.status(200).json(profiles);
    } catch (error) {
        console.error('Error in admin viewAllProfiles controller: ', error.message);
        return res.status(500).json({ message: 'Failed to fetch profiles' });
    }
};

export const deleteProfile = async (req, res) => {
    try {
      const { _id } = req.params;
      await Profile.findByIdAndDelete(_id);
      res.status(200).json({ message: 'Profile deleted successfully' });
    } catch (error) {
        console.error('Error in admin viewAllProfiles controller: ', error.message);
        return res.status(500).json({ message: 'Failed to delete profile' });
    }
};


export const viewInterests = async (req, res) => {
  try {
    const interests = await Interest.find()
      .populate('userShowingInterestId') 
      .populate('interestedUserProfileId'); 

    const formattedInterests = interests.map((interest) => ({
      userShowingInterest: interest.userShowingInterestId, 
      interestedUser: interest.interestedUserProfileId,    
      dateOfInterest: interest.dateOfInterest,
      mutual: interest.mutual, 
    }));

    res.status(200).json(formattedInterests);
  } catch (error) {
    console.error('Error fetching interests: ', error.message);
    res.status(500).json({ message: 'Failed to fetch interests' });
  }
};


export const getAllMatches = async (req, res) => {
  try {
    const matches = await Match.find()
      .populate('userA') 
      .populate('userB') 

    if (!matches || matches.length === 0) {
      return res.status(404).json({ message: 'No matches found' });
    }

    const matchDetails = matches.map(match => ({
      userA: match.userA,  
      userB: match.userB,  
      matchedOn: match.matchedOn
    }));

    res.status(200).json(matchDetails);
  } catch (error) {
    console.error('Error fetching all matches: ', error.message);
    res.status(500).json({ message: 'Failed to fetch matches' });
  }
};


  