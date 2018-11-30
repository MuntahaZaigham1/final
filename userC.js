module.exports.nothing2 = function(req, res) {
    res.render("user.html", {
        user_n:"Mark",
        city:"Karachi",
        email:"markZucker@gmail.com",
        phone:"0321-3245237"

    });
};