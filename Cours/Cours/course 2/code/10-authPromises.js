function login (req, res, callback) {

    //* autre function findOne AVEC PROMESSE & NON CALLBACK
    User.findOne({email: req.body.email})
        .then(function(user){ 
            return user.comparePassword(req.body.password)
        })
        .then(function(isMatch){
            if (!isMatch) return res.status(401).send('Incorrect password')
            else {
                const payload = {id:user.id, email: user.email}
                return jwt.sign(payload, config.secret, {})
            }
        })
        .then(function(token){
            user.token = token
            return user.save()
        })
        .then(function() {
            res.json({token})
        })
        .catch(function(err) {
            return callback(err)
        })
   //* FIN autre function findOne AVEC PROMESSE & NON CALLBACK



      //! Function finOne en callBack 

    User.findOne({email: req.body.email})
        if (err) return callback(err)

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (err) return callback(err)
            if (!isMatch) return res.status(401).send('Incorrect password')

            //* add relevant data to token 

            const payload = {id: user._id, email: user.email}

            jwt.sign(payload. config.secret, {}, function(err, token){
                if (err) return callback(err)

                user.token = token
                 return user.save((err) => {
                    if (err) return callback(err)
                    res.json({token})
                })
            })   
        })
}
      //! FIN  Function finOne en callBack 