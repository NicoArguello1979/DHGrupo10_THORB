function guestMiddleware (req, res, next) {
    if (req.session.userLogged){
        return res.redirect('/perfil');

    }
    next();
}

module.exports = guestMiddleware;

//este middleware impide que un usario registrado vuelva a registrarse