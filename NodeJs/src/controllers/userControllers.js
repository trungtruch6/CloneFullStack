import userService from "../services/userService";
let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing input parameter!",
    });
  }
  let userData = await userService.handleUserLogin(email, password);
  // API trả về status
  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};
// Check email user => Exist (Không tồn tại trả về lỗi)
// Nếu email người dùng hợp lệ, có tồn tại trong hệ thông => kiểm tra password người dùng nhập và so sánh với password trên DB(Không trùng trả về lỗi)
// Email và password người dùng nhập trùng khớp với dữ liệu từ DB trả về thông tin người dùng
// trả vè access_token: JWT
let handleGetAllUser = async (req, res) => {
  let id = req.query.id; // query paremater sẽ dùng query(?id=).
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameters",
      users: [],
    });
  }
  let users = await userService.getAllUser(id);
  console.log(users);
  return res.status(200).json({
    errCode: 0,
    errMessage: "Success!",
    users,
  });
};
module.exports = {
  handleLogin: handleLogin,
  handleGetAllUser: handleGetAllUser,
};
