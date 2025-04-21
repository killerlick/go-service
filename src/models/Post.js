import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  image : String
});

// Évite les redéfinitions du modèle lors du hot-reload
export default mongoose.models.Post || mongoose.model('Post', PostSchema);
