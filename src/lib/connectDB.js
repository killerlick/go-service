import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  throw new Error("Please define the MONGODB_URL environment variable inside .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {

  console.log("Connected to MongoDB:");
console.log("  - Database:", mongoose.connection.name);
console.log("  - Host:", mongoose.connection.host);
console.log("  - Port:", mongoose.connection.port);
console.log("  - User:", mongoose.connection.user);

  console.log("connect  ")
  if (cached.conn) {
    console.log("connect  cached")
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    console.log("connect  cached compromise")
    cached.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }
  console.log("connect  2")
  cached.conn = await cached.promise;
  console.log("connect  3")
  return cached.conn;
}

export default connectDB;