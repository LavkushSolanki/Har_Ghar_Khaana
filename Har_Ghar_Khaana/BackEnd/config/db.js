import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    // `mongodb+srv://lavkushsolanki:Lavkush12082004%40%23@clusterfood.ozh5t.mongodb.net/ClusterFood?retryWrites=true&w=majority`;
    await mongoose.connect(
      `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@clusterfood.ozh5t.mongodb.net/ClusterFood?retryWrites=true&w=majority`
    );
    console.log("✅ Database Connected Successfully!");
  } catch (error) {
    console.error("❌ Database Connection Failed:", error.message);
    process.exit(1);
  }
};
