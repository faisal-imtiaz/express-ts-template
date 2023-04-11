import mongoose, { Schema } from 'mongoose';
import { IUser } from '../types';

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  apiKey: {
    type: [{
      value: { type: String, required: true },
      status: { type: String, enum: ['active', 'closed'], default: 'active' },
    }],
  },
});

export default mongoose.model<IUser>('User', UserSchema);