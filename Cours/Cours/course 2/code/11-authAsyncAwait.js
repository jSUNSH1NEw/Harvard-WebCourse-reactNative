async function login (req, res, callback) {

    try {
    const user = await User.findOne({email: req.body.email})
    const isMAtch = await user.comparePassword(req.body.password)

    if (!isMAtch) return res.status(401).send('Incorrect password')

    const payloard = {if: user._id, email: user.email}
    const token = await jwt.sign(payloard, config.secret, {})
    
    user.token = token
    const success = user.save()

    res.json({token})
    }
     catch(err) {
        callback(err)
    }
}