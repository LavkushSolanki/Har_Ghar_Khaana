import mongoose from "mongoose";
export const connectDB = async () => {
// here for the password i have used @ # so instead of that we have to use %40 and %23
  await mongoose
    .connect(
      "mongodb+srv://lavkushsolanki:Lavkush12082004%40%23@clusterfood.ozh5t.mongodb.net/ClusterFood"
    )
    .then(() => console.log("Database Connected"));
};