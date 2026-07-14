// const bcrypt = require("bcryptjs");
// const User = require("../model/users.model");
// const generateToken = require("../utils/generateToken");

// // signup (register)
// const signup = async (req, res) => {
//   try {
//     const { fullName, email, password } = req.body;

//     if (!fullName || !email || !password) {
//       return res.status(400).json({
//         message: "Full name, email and password are required",
//       });
//     }

//     // check if user already exist
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(409).json({ message: "Email already registered" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     console.log("DB NAME:", User.db.name);

//     const user = await User.create({
//       fullName,
//       email,
//       password: hashedPassword,
//       role: "user",
//     });

//     const token = generateToken({ id: user._id, role: user.role });

//     return res.status(201).json({
//       message: "User registered successfully",
//       token,
//       user: {
//         id: user._id,
//         fullName: user.fullName,
//         email: user.email,
//         role: user.role,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Something went wrong", error: error.message });
//   }
// };

// // login
// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ message: "Email and password are required" });
//     }

//     const user = await User.findOne({ email }).select("+password");
//     if (!user) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }

//     const token = generateToken({ id: user._id, role: user.role });

//     return res.status(200).json({
//       message: "Login successful",
//       token,
//       user: {
//         id: user._id,
//         fullName: user.fullName,
//         email: user.email,
//         role: user.role,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Something went wrong", error: error.message });
//   }
// };

// module.exports = { signup, login };
