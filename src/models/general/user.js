import mongoose from 'mongoose';

const userCollectionName = 'user';

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model(userCollectionName, userSchema);

export { userCollectionName };
export default User;
