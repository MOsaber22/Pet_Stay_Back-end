// const userModel = require("../../model/users.model");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({
//         status_code: 400,
//         message: "Email and password are required",
//         data: null,
//       });
//     }


//     const user = await userModel.findOne({ email });
//     if (!user) {
//       return res.status(404).json({
//         status_code: 404,
//         message: "Invalid email or password",
//         data: null,
//       });
//     }


//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({
//         status_code: 401,
//         message: "Invalid email or password",
//         data: null,
//       });
//     }


//     if (!user.isActive) {
//       return res.status(403).json({
//         status_code: 403,
//         message: "This account has been deactivated",
//         data: null,
//       });
//     }

 
//     const token = jwt.sign(
//       { userId: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "7d" }
//     );


//     const userResponse = user.toObject();
//     delete userResponse.password;

//     return res.status(200).json({
//       status_code: 200,
//       message: "Logged in successfully",
//       token: token,
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

// module.exports = login;
