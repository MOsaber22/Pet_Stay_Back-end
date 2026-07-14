// const userModel = require("../../model/users.model");
// const bcrypt = require("bcryptjs");

// const register = async (req, res) => {
//   try {
//     const { fullName, email, password, role } = req.body;

//     if (!fullName || !email || !password) {
//       return res.status(400).json({
//         status_code: 400,
//         message: "Full name, email, and password are required",
//         data: null,
//       });
//     }


//     const existingUser = await userModel.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({
//         status_code: 400,
//         message: "User with this email already exists",
//         data: null,
//       });
//     }


//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);


//     const newUser = await userModel.create({
//       fullName,
//       email,
//       password: hashedPassword,
//       role: role || "user",
//     });


//     const userResponse = newUser.toObject();
//     delete userResponse.password;

//     return res.status(201).json({
//       status_code: 201,
//       message: "User registered successfully",
//       data: userResponse,
//     });
//   } catch (err) {
//     return res.status(500).json({
//       status_code: 500,
//       message: err.message,
//       data: null,
//     });
//   }
// };

// module.exports = register;
