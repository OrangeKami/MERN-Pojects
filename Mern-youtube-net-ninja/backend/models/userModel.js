import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static signup method
userSchema.statics.signup = async function (email, password) {
  // validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("not a valid email");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password at least 8 characters, 1 symbol, one uppercase letter");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await this.create({ email, password: hash });

  return user;
};

export default mongoose.model("User", userSchema);
