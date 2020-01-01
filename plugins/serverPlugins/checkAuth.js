//检查用户是否登录并且是否有权限
export default async (req, res, next) => {
  if (req.session.authUser && req.session.authUser.role === 0) {
    return next()
  } else {
    return res.json({
      status: 'not ok',
      message: "You don't have acceess to excute this!"
    })
  }
}
