import mongoose from 'mongoose';

const providerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Provider name is required'],
    trim: true,
  },
  logo: {
    type: String,
    required: [true, 'Provider logo URL is required'],
  },
  contactEmail: {
    type: String,
    required: [true, 'Contact email is required'],
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
  },
  contactPhone: {
    type: String,
    required: [true, 'Contact phone is required'],
  },
  website: {
    type: String,
    required: [true, 'Website URL is required'],
  },
  description: {
    type: String,
    required: [true, 'Provider description is required'],
  },
  active: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Provider || mongoose.model('Provider', providerSchema);