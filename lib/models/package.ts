import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const packageSchema = new mongoose.Schema({
  providerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Provider',
    required: true,
  },
  name: {
    type: String,
    required: [true, 'Package name is required'],
    trim: true,
  },
  type: {
    type: String,
    required: [true, 'Package type is required'],
    enum: ['prepaid', 'postpaid', 'broadband'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: 0,
  },
  dataLimit: {
    type: String,
    required: [true, 'Data limit is required'],
  },
  speed: {
    type: String,
    required: function() {
      return this.type === 'broadband';
    },
  },
  validity: {
    type: String,
    required: [true, 'Validity period is required'],
  },
  description: {
    type: String,
    required: [true, 'Package description is required'],
  },
  features: [{
    type: String,
  }],
  reviews: [reviewSchema],
  active: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

// Add indexes for common queries
packageSchema.index({ type: 1, price: 1 });
packageSchema.index({ providerId: 1 });

export default mongoose.models.Package || mongoose.model('Package', packageSchema);