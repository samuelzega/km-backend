module.exports ={
    sumValue : (req, res) => {
        const result = req.body.value + req.valueAdder
        res.status(200).json({hasil: result})
    }
}