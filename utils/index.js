module.exports.dtoValidate = function (dtoJoi) {
    return function (req, res, next) {
        console.log(req.body)
        const {error} = dtoJoi.validate(req.body)
        if (!error) return next()
        res.json({ok:false, error: error.details})
    }  
}