import mongoose from "mongoose";

const mongodbUri = process.env.MONGODB_URI;
let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectToDatabase() {
  if (cached.conn) return cached.conn;
  if (!mongodbUri) return "Missing MONGODB_URI";
  cached.promise =
    cached.promise ||
    mongoose.connect(mongodbUri, {
      dbName: "evently",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;
  return cached.conn;
}
