module.exports ={
    sumValue : (req, res, next) => {
        req.valueAdder = 100
        next()
    }
}