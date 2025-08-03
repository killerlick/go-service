import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  user_id: String,
  title: String,
  description: String,
  address: String,
  location: {
    lat: Number,
    lng: Number

  },
  image: String,
}, {
  timestamps: true
});

// Évite les redéfinitions du modèle lors du hot-reload
export default mongoose.models.Post || mongoose.model('Post', PostSchema);
