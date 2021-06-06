import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: String,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);
//encrypt password
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//Match Password

userSchema.methods.matchPassword = async function (pass) {
  return await bcrypt.compare(pass, this.password);
};

const User = mongoose.model('User', userSchema);
export default User;
