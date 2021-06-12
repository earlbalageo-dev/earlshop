import asyncHandler from 'express-async-handler';
import User from '../models/UserModel.js';
import generateToken from '../utils/generateToken.js';
import validateRegisterInput from '../utils/validation/validateRegisterInput.js';

//@desc    Register new user
//@route   POST api/users/register
//@access  PUBLIC

const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;
  const { errors, isValid } = validateRegisterInput(req.body);

  //validate inputs
  if (!isValid) {
    res.status(400).json(errors);
  }
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error('Email has already been used');
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error('invalid user data');
  }
});

//@desc    Login User
//@route   POST /api/users/login
//@access  Public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid Email or Password');
  }
});

export { registerUser, loginUser };
