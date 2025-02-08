import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://lavkushsolanki:Lavkush12082004%40%23@clusterfood.ozh5t.mongodb.net/ClusterFood?retryWrites=true&w=majority`
    );
    console.log("Database Connected Successfully!");
  } catch (error) {
    console.error("Database Connection Failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};
