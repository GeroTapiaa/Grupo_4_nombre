module.exports = (req , res, next) => req.session.userLogin.rol === "admin" ? next() : res.redirect('/user/login')