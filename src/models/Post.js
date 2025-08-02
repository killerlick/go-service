import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  user_id: String,
  title: String,
  description: String,
  location:{
    adress: String,
    coordinates:{
      lat:Number,
      lng:Number
    }
  },
  image : String,
  createdAt: Date , 
  updateAt : Date
});

// Évite les redéfinitions du modèle lors du hot-reload
export default mongoose.models.Post || mongoose.model('Post', PostSchema);
