//middeware kiểm tra người dùng có đăng nhập hay không?
var ensureAuth = function ensureAuthenticated(req, res, next){
    if (req.isAuthenticated()){
        next();
    }else {
        req.flash("alert" , "Bạn phải đăng nhập để thực hiện chức năng này!!");
        res.redirect("/signin");
    }
}   
module.exports = {ensureAuthenticated: ensureAuth};
