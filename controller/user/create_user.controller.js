const userModel = require("../../model/users.model");

const createUser = async (req, res) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password) {
    return res.status(400).json({
      status_code: 400,
      message: "Please enter all required fields",
      data: null,
    });
  }
  try {
    const newUser = await userModel.create(req.body);
    return res.status(201).json({
      status_code: 201,
      message: "User created successfully",
      data: newUser,
    });
  } catch (err) {
    return res.status(500).json({
      status_code: 500,
      message: err.message,
      data: null,
    });
  }
};

module.exports = createUser;
