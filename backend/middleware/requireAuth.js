const jwt = require('jsonwebtoken')

const requireAuth = async (req, res, next) => {
    const { authorisation } = req.headers 

    if (!authorisation) {
        return res.status(401).json({error:'Token required'})
    }

    const token = authorisation.split(" ")[1]

    try {
        const {_id} = jwt.verify(token, process.env.SECRET)

        req.user = await User.findOne({ _id }).select('_id')
        next()

    } catch (error) {
        res.status(401).json({error: "Request is not authorised"})
    }
}

module.exports = requireAuth