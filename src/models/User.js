import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  phone:String,
  isVerified:Boolean,
  role:String,
  createAt: Date,
  updateAt:Date

});

// Évite les redéfinitions du modèle lors du hot-reload
export default mongoose.models.User || mongoose.model('User', UserSchema);
